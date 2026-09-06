import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, 
  Linkedin, Twitter, Instagram, Send, Mail, Link2, Check, Sparkles 
} from 'lucide-react';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { blogService, BlogPost } from '../lib/supabase';
import { useLoader } from '../context/LoaderContext';

interface BlogPostPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onRouteChange }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { showLoader } = useLoader();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleNavigateTo = (path: string) => {
    showLoader(3000);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    async function loadPostAndRelated() {
      if (!slug) return;
      setLoading(true);
      try {
        const fetchedPost = await blogService.getPostBySlug(slug);
        setPost(fetchedPost);

        if (fetchedPost) {
          const all = await blogService.getPosts(false);
          setAllPosts(all);
          
          // Related: same category, excluding current post
          const related = all
            .filter(p => p.category === fetchedPost.category && p.id !== fetchedPost.id)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    }
    loadPostAndRelated();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-white flex flex-col justify-center items-center py-20 gap-4">
        <div className="w-10 h-10 border-2 border-t-transparent border-[#58A6FF] rounded-full animate-spin"></div>
        <p className="text-[#8b949e] animate-pulse text-sm">Preparing article layout...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-white flex flex-col justify-center items-center py-20 px-6 text-center">
        <Sparkles size={40} className="text-[#8B5CF6] mb-4 animate-bounce" />
        <h1 className="text-3xl font-display font-bold mb-4">Article Not Found</h1>
        <p className="text-[#8b949e] max-w-md mb-8">The article you are trying to access does not exist or has been archived.</p>
        <button 
          onClick={() => handleNavigateTo('/blog')}
          className="px-6 py-2.5 bg-gradient-to-r from-[#58A6FF] to-[#8B5CF6] text-white rounded-full text-sm font-semibold transition-all hover:opacity-90 shadow-md shadow-[#58A6FF]/25 cursor-pointer"
        >
          Back to Blog Insights
        </button>
      </div>
    );
  }

  // Generate Previous & Next Post
  const currentIdx = allPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const nextPost = currentIdx < allPosts.length - 1 && currentIdx !== -1 ? allPosts[currentIdx + 1] : null;

  // Extract Heading Elements for Table of Contents
  const extractHeadings = (text: string) => {
    const lines = text.split('\n');
    const headings: { id: string; text: string; level: number }[] = [];
    lines.forEach((line) => {
      const match = line.match(/^(###|##)\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const headingText = match[2].trim().replace(/\*\*|__/g, '');
        const id = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        headings.push({ id, text: headingText, level });
      }
    });
    return headings;
  };

  const tableOfContents = extractHeadings(post.content);

  // High-fidelity custom Markdown renderer for perfect React 19 safety and semantic layout
  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: { items: string[]; ordered: boolean } | null = null;
    let currentTable: { headers: string[]; rows: string[][] } | null = null;
    let currentCodeBlock: { lines: string[] } | null = null;

    const flushList = (key: number) => {
      if (!currentList) return null;
      const listElement = currentList.ordered ? (
        <ol key={`ol-${key}`} className="list-decimal pl-6 my-6 text-[#c9d1d9] space-y-2 text-base md:text-lg leading-relaxed">
          {currentList.items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
          ))}
        </ol>
      ) : (
        <ul key={`ul-${key}`} className="list-disc pl-6 my-6 text-[#c9d1d9] space-y-2 text-base md:text-lg leading-relaxed">
          {currentList.items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(item) }} />
          ))}
        </ul>
      );
      currentList = null;
      return listElement;
    };

    const flushTable = (key: number) => {
      if (!currentTable) return null;
      const tableElement = (
        <div key={`table-wrapper-${key}`} className="overflow-x-auto my-8 border border-[#30363d] rounded-xl bg-[#161b22]/50">
          <table className="w-full text-left border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-[#161b22] border-b border-[#30363d]">
                {currentTable.headers.map((h, idx) => (
                  <th key={idx} className="p-4 font-semibold text-white border-r border-[#30363d]/50 last:border-r-0">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentTable.rows.map((row, rIdx) => (
                <tr key={rIdx} className="border-b border-[#30363d]/40 last:border-b-0 hover:bg-[#30363d]/10 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="p-4 text-[#c9d1d9] border-r border-[#30363d]/30 last:border-r-0" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(cell) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = null;
      return tableElement;
    };

    const flushCodeBlock = (key: number) => {
      if (!currentCodeBlock) return null;
      const codeElement = (
        <div key={`code-wrapper-${key}`} className="my-8 rounded-xl overflow-hidden border border-[#30363d] shadow-2xl">
          <div className="bg-[#161b22] px-4 py-2 flex items-center justify-between border-b border-[#30363d] text-xs text-[#8b949e] font-mono">
            <span>Terminal / Code View</span>
            <span>TypeScript</span>
          </div>
          <pre className="p-5 overflow-x-auto bg-[#0d1117] text-[#58A6FF] font-mono text-xs md:text-sm leading-relaxed">
            <code>{currentCodeBlock.lines.join('\n')}</code>
          </pre>
        </div>
      );
      currentCodeBlock = null;
      return codeElement;
    };

    const parseInlineMarkdown = (text: string) => {
      return text
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em class="italic text-gray-300">$1</em>')
        // Inline Code
        .replace(/`(.*?)`/g, '<code class="bg-[#161b22] border border-[#30363d] text-[#58A6FF] px-1.5 py-0.5 rounded font-mono text-xs md:text-sm">$1</code>')
        // Custom link replacement
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#58A6FF] hover:underline underline-offset-4 font-medium transition-all" target="_blank" rel="noopener noreferrer">$1</a>');
    };

    let idx = 0;
    while (idx < lines.length) {
      const line = lines[idx];
      const trimmed = line.trim();

      // Inside Code Block
      if (trimmed.startsWith('```')) {
        if (currentCodeBlock) {
          elements.push(flushCodeBlock(idx));
        } else {
          // Flush others
          if (currentList) elements.push(flushList(idx));
          if (currentTable) elements.push(flushTable(idx));
          currentCodeBlock = { lines: [] };
        }
        idx++;
        continue;
      }

      if (currentCodeBlock) {
        currentCodeBlock.lines.push(line);
        idx++;
        continue;
      }

      // Inside Table
      if (trimmed.startsWith('|')) {
        if (currentList) elements.push(flushList(idx));
        const cells = trimmed.split('|').map(c => c.trim()).filter((c, i, arr) => i > 0 && i < arr.length - 1);
        
        // Skip separator line e.g. | :--- | :--- |
        if (cells.every(c => c.startsWith(':') || c.startsWith('-'))) {
          idx++;
          continue;
        }

        if (!currentTable) {
          currentTable = { headers: cells, rows: [] };
        } else {
          currentTable.rows.push(cells);
        }
        idx++;
        continue;
      } else if (currentTable) {
        elements.push(flushTable(idx));
      }

      // Bullet List
      if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        if (currentTable) elements.push(flushTable(idx));
        const itemContent = trimmed.substring(2);
        if (!currentList) {
          currentList = { items: [itemContent], ordered: false };
        } else {
          currentList.items.push(itemContent);
        }
        idx++;
        continue;
      }

      // Numbered List
      const orderMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
      if (orderMatch) {
        if (currentTable) elements.push(flushTable(idx));
        const itemContent = orderMatch[2];
        if (!currentList) {
          currentList = { items: [itemContent], ordered: true };
        } else {
          currentList.items.push(itemContent);
        }
        idx++;
        continue;
      }

      // If we got here, it's not a list item, so flush any list
      if (currentList) {
        elements.push(flushList(idx));
      }

      // Blockquotes
      if (trimmed.startsWith('> ')) {
        const quoteContent = trimmed.substring(2);
        elements.push(
          <blockquote key={idx} className="my-8 pl-5 border-l-4 border-[#8B5CF6] italic text-[#8b949e] bg-[#161b22]/30 py-4 pr-4 rounded-r-xl">
            <p className="text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(quoteContent) }} />
          </blockquote>
        );
        idx++;
        continue;
      }

      // Blank line
      if (!trimmed) {
        idx++;
        continue;
      }

      // Headings
      if (trimmed.startsWith('### ')) {
        const headingText = trimmed.substring(4);
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        elements.push(
          <h3 key={idx} id={headingId} className="text-xl md:text-2xl font-bold text-white mt-10 mb-4 tracking-tight scroll-mt-28 flex items-center gap-2">
            <span className="text-[#58A6FF]">#</span>
            {headingText}
          </h3>
        );
        idx++;
        continue;
      }

      if (trimmed.startsWith('## ')) {
        const headingText = trimmed.substring(3);
        const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        elements.push(
          <h2 key={idx} id={headingId} className="text-2xl md:text-3xl font-display font-bold text-white mt-12 mb-5 tracking-tight border-b border-[#30363d]/40 pb-2 scroll-mt-28 flex items-center gap-2">
            <span className="text-[#8B5CF6]">#</span>
            {headingText}
          </h2>
        );
        idx++;
        continue;
      }

      if (trimmed.startsWith('# ')) {
        const headingText = trimmed.substring(2);
        elements.push(
          <h1 key={idx} className="text-3xl md:text-4xl font-display font-extrabold text-white mt-12 mb-6 tracking-tight">
            {headingText}
          </h1>
        );
        idx++;
        continue;
      }

      // Regular Paragraph
      elements.push(
        <p key={idx} className="my-5 text-[#c9d1d9] text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: parseInlineMarkdown(trimmed) }} />
      );
      idx++;
    }

    // Final flushes
    if (currentCodeBlock) elements.push(flushCodeBlock(idx));
    if (currentTable) elements.push(flushTable(idx));
    if (currentList) elements.push(flushList(idx));

    return elements;
  };

  // Social Sharing Buttons Trigger Handlers
  const shareUrl = window.location.href;
  const shareTitle = encodeURIComponent(post.title);

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareTitle}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.featured_image,
    "datePublished": post.publish_date,
    "author": {
      "@type": "Person",
      "name": post.author_name,
      "url": "https://sparkstation.vercel.app/saksham-pandey"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Spark Station",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sparkstation.vercel.app/favicon.png"
      }
    },
    "description": post.summary,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sparkstation.vercel.app/blog/${post.slug}`
    }
  };

  return (
    <div className="relative min-h-screen py-16 bg-[#0d1117] text-[#c9d1d9]">
      <SEO 
        title={`${post.title} | Spark Station Blog`}
        description={post.summary}
        path={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.featured_image}
        schemaMarkup={articleSchema}
      />
      <div className="ambient-glow" />

      {/* Hero Header Area */}
      <div className="max-w-4xl mx-auto px-6 mb-10 relative z-10">
        <button 
          onClick={() => handleNavigateTo('/blog')}
          className="inline-flex items-center gap-2 text-sm text-[#8b949e] hover:text-white transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Insights</span>
        </button>

        {/* Category Badge */}
        <span className="inline-block bg-[#58A6FF]/10 text-[#58A6FF] text-xs font-semibold px-3.5 py-1.5 rounded-full border border-[#58A6FF]/30 mb-6">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Article Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#30363d]/50 pb-6">
          {/* Author info */}
          <div className="flex items-center gap-3">
            <img 
              src={post.author_avatar} 
              alt={post.author_name} 
              className="w-11 h-11 rounded-full object-cover border-2 border-[#58A6FF]/40"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80';
              }}
            />
            <div>
              <span className="block font-semibold text-white text-sm md:text-base leading-none mb-1">{post.author_name}</span>
              <span className="text-xs text-[#8b949e]">Founder &amp; CEO, Spark Station</span>
            </div>
          </div>

          {/* Date / Reading Time */}
          <div className="flex items-center gap-5 text-sm text-[#8b949e]">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.publish_date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.reading_time}
            </span>
          </div>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto px-6 mb-12 relative z-10">
        <div className="rounded-2xl overflow-hidden aspect-[21/9] border border-[#30363d] shadow-2xl relative">
          <img 
            src={post.featured_image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Core Article Layout Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-20 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sidebar widgets */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8 order-2 lg:order-1">
          
          {/* Table of Contents Box */}
          {tableOfContents.length > 0 && (
            <div className="bg-[#161b22]/70 border border-[#30363d]/80 rounded-2xl p-6 backdrop-blur-md">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#30363d]/40 pb-2 flex items-center gap-2">
                <Sparkles size={14} className="text-[#8B5CF6]" />
                <span>Table of Contents</span>
              </h4>
              <nav className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                {tableOfContents.map((heading) => (
                  <a 
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm transition-all hover:text-[#58A6FF] leading-snug cursor-pointer ${
                      heading.level === 3 ? 'pl-4 text-[#8b949e]' : 'font-medium text-[#c9d1d9]'
                    }`}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Social Sharing Component */}
          <div className="bg-[#161b22]/70 border border-[#30363d]/80 rounded-2xl p-6 backdrop-blur-md">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#30363d]/40 pb-2">
              Share This Article
            </h4>
            <div className="grid grid-cols-4 gap-3">
              <button 
                onClick={shareOnLinkedIn}
                className="flex items-center justify-center p-3 rounded-xl bg-[#0d1117] hover:bg-[#1f242e] border border-[#30363d] text-[#8b949e] hover:text-[#58A6FF] transition-all cursor-pointer"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={18} />
              </button>
              <button 
                onClick={shareOnTwitter}
                className="flex items-center justify-center p-3 rounded-xl bg-[#0d1117] hover:bg-[#1f242e] border border-[#30363d] text-[#8b949e] hover:text-[#58A6FF] transition-all cursor-pointer"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} />
              </button>
              <button 
                onClick={shareOnWhatsApp}
                className="flex items-center justify-center p-3 rounded-xl bg-[#0d1117] hover:bg-[#1f242e] border border-[#30363d] text-[#8b949e] hover:text-[#58A6FF] transition-all cursor-pointer"
                aria-label="Share on WhatsApp"
              >
                <Send size={18} />
              </button>
              <button 
                onClick={copyToClipboard}
                className="flex items-center justify-center p-3 rounded-xl bg-[#0d1117] hover:bg-[#1f242e] border border-[#30363d] text-[#8b949e] hover:text-white transition-all relative cursor-pointer"
                aria-label="Copy post link"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Link2 size={18} />}
                {copied && (
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#30363d] text-white text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Author short details banner */}
          <div className="bg-[#161b22]/40 border border-[#30363d]/50 rounded-2xl p-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#30363d]/40 pb-2">
              Author Profile
            </h4>
            <div className="text-center">
              <img 
                src={post.author_avatar} 
                alt="Saksham Pandey" 
                className="w-16 h-16 rounded-full object-cover border-2 border-[#8B5CF6]/40 mx-auto mb-3"
                referrerPolicy="no-referrer"
              />
              <span className="block text-white font-bold text-base mb-1">Saksham Pandey</span>
              <span className="block text-xs text-[#8b949e] mb-4">Founder &amp; CEO of Spark Station</span>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                Full-stack web engineer, cybersecurity enthusiast, and growth specialist committed to engineering high-converting software systems.
              </p>
              <div className="flex justify-center gap-3">
                <a 
                  href="https://in.linkedin.com/in/sakshampandeyin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8b949e] hover:text-white transition-colors"
                >
                  <Linkedin size={15} />
                </a>
                <a 
                  href="https://x.com/crazy_saksham" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8b949e] hover:text-white transition-colors"
                >
                  <Twitter size={15} />
                </a>
                <a 
                  href="https://www.instagram.com/sakshampandey.x/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#8b949e] hover:text-white transition-colors"
                >
                  <Instagram size={15} />
                </a>
                <a 
                  href="mailto:sparkstation.x@gmail.com" 
                  className="text-[#8b949e] hover:text-white transition-colors"
                >
                  <Mail size={15} />
                </a>
              </div>
            </div>
          </div>

        </aside>

        {/* Main content body */}
        <main className="lg:col-span-8 order-1 lg:order-2">
          <div className="bg-[#161b22]/40 border border-[#30363d]/50 rounded-2xl p-6 md:p-10 shadow-xl backdrop-blur-md">
            
            {/* Dynamic Content Renderer */}
            <div className="prose prose-invert max-w-none prose-headings:font-display prose-headings:tracking-tight">
              {renderMarkdown(post.content)}
            </div>

            {/* Pagination / Prev / Next controls */}
            {(prevPost || nextPost) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#30363d]/60 mt-12 pt-8">
                {prevPost ? (
                  <button 
                    onClick={() => handleNavigateTo(`/blog/${prevPost.slug}`)}
                    className="p-5 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#58A6FF]/40 transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <span className="text-xs text-[#8b949e] flex items-center gap-1.5 mb-2 font-medium">
                      <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                      Previous Article
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#58A6FF] transition-colors line-clamp-1">
                      {prevPost.title}
                    </span>
                  </button>
                ) : (
                  <div className="hidden sm:block"></div>
                )}

                {nextPost ? (
                  <button 
                    onClick={() => handleNavigateTo(`/blog/${nextPost.slug}`)}
                    className="p-5 rounded-xl bg-[#0d1117] border border-[#30363d] hover:border-[#58A6FF]/40 transition-all text-right flex flex-col justify-between items-end group cursor-pointer"
                  >
                    <span className="text-xs text-[#8b949e] flex items-center gap-1.5 mb-2 font-medium">
                      Next Article
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-[#58A6FF] transition-colors line-clamp-1">
                      {nextPost.title}
                    </span>
                  </button>
                ) : (
                  <div className="hidden sm:block"></div>
                )}
              </div>
            )}

          </div>
        </main>

      </div>

      {/* Related Articles Segment */}
      {relatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
          <div className="border-t border-[#30363d]/40 pt-16">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Related Articles
                </h3>
                <p className="text-sm text-[#8b949e]">Hand-picked strategic insights you might find valuable.</p>
              </div>
              <button 
                onClick={() => handleNavigateTo('/blog')}
                className="text-sm font-semibold text-[#58A6FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View All Posts</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <div 
                  key={related.id} 
                  onClick={() => handleNavigateTo(`/blog/${related.slug}`)}
                  className="ss-card overflow-hidden group flex flex-col cursor-pointer transition-all hover:translate-y-[-4px]"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={related.featured_image} 
                      alt={related.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#58A6FF] tracking-widest block mb-2">
                        {related.category}
                      </span>
                      <h4 className="text-base font-bold text-white line-clamp-2 leading-snug mb-3 group-hover:text-[#58A6FF] transition-colors">
                        {related.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-[#8b949e] flex items-center gap-1 mt-4">
                      <span>Read Article</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA Section */}
      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
