import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Search, SlidersHorizontal, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { CTASection } from '../components/CTASection';
import { blogService, BlogPost } from '../lib/supabase';
import { useLoader } from '../context/LoaderContext';

interface BlogListPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const BlogListPage: React.FC<BlogListPageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();
  const { showLoader } = useLoader();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      try {
        const publishedPosts = await blogService.getPosts(false);
        setPosts(publishedPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  // Filter & Search Logic
  const filteredPosts = posts
    .filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.publish_date).getTime();
      const dateB = new Date(b.publish_date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

  // Paginated Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Website Development', label: 'Website Development' },
    { id: 'Business Growth', label: 'Business Growth' },
  ];

  // Reset pagination on filter or search change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery, sortBy]);

  const handlePostClick = (slug: string) => {
    showLoader(3000);
    navigate(`/blog/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Spark Station Blog",
    "description": "Premium insights on web development, UI/UX design, SEO, and digital business growth.",
    "publisher": {
      "@type": "Organization",
      "name": "Spark Station",
      "logo": "https://sparkstation.vercel.app/favicon.png",
      "url": "https://sparkstation.vercel.app/"
    },
    "blogPost": currentPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.publish_date,
      "author": {
        "@type": "Person",
        "name": post.author_name
      },
      "url": `https://sparkstation.vercel.app/blog/${post.slug}`,
      "image": post.featured_image,
      "description": post.summary
    }))
  };

  return (
    <div className="relative min-h-screen py-20 overflow-x-hidden bg-[#0d1117] text-[#c9d1d9]">
      <SEO 
        title="CMS Insights &amp; Blog | Spark Station Digital Agency"
        description="Read standard articles and insights from Spark Station. We cover custom website pricing, digital strategy, SEO guidelines, and conversion mechanics."
        path="/blog"
        schemaMarkup={listSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10 pt-4">
        <span className="section-label mb-6">
          <Sparkles size={14} className="text-[#58A6FF]" />
          <span>Agency Blog &amp; Insights</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Knowledge to <span className="gradient-text">Spark Growth</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Deep dives, guides, and strategic viewpoints on modern web frameworks, UI/UX methodologies, and digital scalability.
        </p>
      </section>

      {/* Search, Filter, Sort Controls */}
      <section className="max-w-6xl mx-auto px-6 mb-12 relative z-10">
        <div className="bg-[#161b22]/80 border border-[#30363d]/80 rounded-2xl p-6 shadow-xl backdrop-blur-md flex flex-col md:flex-row gap-6 justify-between items-center">
          
          {/* Categories Tab list */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#58A6FF] text-white shadow-lg shadow-[#58A6FF]/25'
                    : 'bg-[#0d1117] text-[#8b949e] hover:text-white border border-[#30363d] hover:border-[#8b949e]/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto md:max-w-md items-stretch sm:items-center">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b949e]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-full pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#58A6FF] transition-all"
              />
            </div>

            {/* Sort Select */}
            <div className="relative min-w-[140px]">
              <SlidersHorizontal size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b949e] pointer-events-none" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-full pl-9 pr-8 py-2.5 text-sm focus:outline-none focus:border-[#58A6FF] transition-all appearance-none cursor-pointer"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 gap-4">
            <div className="w-10 h-10 border-2 border-t-transparent border-[#58A6FF] rounded-full animate-spin"></div>
            <p className="text-[#8b949e] text-sm animate-pulse">Retrieving dynamic posts...</p>
          </div>
        ) : currentPosts.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => handlePostClick(post.slug)}
                  className="ss-card overflow-hidden group flex flex-col cursor-pointer transition-all hover:translate-y-[-4px]"
                >
                  {/* Card Featured Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#161b22]/95 backdrop-blur-md text-[#58A6FF] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#30363d]/80">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta Date & Reading Time */}
                      <div className="flex items-center gap-4 text-xs text-[#8b949e] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.publish_date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.reading_time}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#58A6FF] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-sm text-[#8b949e] line-clamp-3 mb-6 leading-relaxed">
                        {post.summary}
                      </p>
                    </div>

                    {/* Author & Read More Arrow */}
                    <div className="flex items-center justify-between border-t border-[#30363d]/50 pt-4 mt-auto">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author_avatar}
                          alt={post.author_name}
                          className="w-7 h-7 rounded-full object-cover border border-[#30363d]"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            // Fallback if avatar fails
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80';
                          }}
                        />
                        <span className="text-xs font-medium text-[#c9d1d9]">{post.author_name}</span>
                      </div>
                      
                      <span className="text-xs font-semibold text-[#58A6FF] flex items-center gap-1 group-hover:gap-2 transition-all">
                        <span>Read Post</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 border-t border-[#30363d]/40 pt-8">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="px-4 py-2 text-xs font-medium bg-[#161b22] border border-[#30363d] rounded-full text-[#8b949e] hover:text-white disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  Previous
                </button>
                <span className="text-xs text-[#8b949e]">
                  Page <strong className="text-white">{currentPage}</strong> of <strong className="text-white">{totalPages}</strong>
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="px-4 py-2 text-xs font-medium bg-[#161b22] border border-[#30363d] rounded-full text-[#8b949e] hover:text-white disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#161b22]/30 border border-[#30363d]/40 rounded-2xl p-10 max-w-lg mx-auto">
            <SlidersHorizontal size={40} className="text-[#8b949e] mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold text-white mb-2">No Articles Found</h3>
            <p className="text-sm text-[#8b949e] mb-6">We couldn't find any articles matching your search query or selected category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="px-5 py-2 bg-[#58A6FF] hover:bg-[#58A6FF]/80 text-white rounded-full text-xs font-semibold transition-all cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* CMS CTA bottom segment */}
      <section className="max-w-4xl mx-auto px-6 mb-16 relative z-10 text-center">
        <div className="p-1 border border-[#30363d]/60 rounded-xl bg-[#161b22]/30 inline-flex items-center gap-2">
          <span className="text-xs text-[#8b949e] px-3">Are you a Spark Station editor?</span>
          <a
            href="/admin"
            className="px-3 py-1.5 bg-[#161b22] hover:bg-[#21262d] text-xs font-semibold text-white rounded-lg border border-[#30363d] transition-all"
          >
            Author Console Login
          </a>
        </div>
      </section>

      {/* Global CTA Section */}
      <CTASection onRouteChange={onRouteChange} />
    </div>
  );
};
