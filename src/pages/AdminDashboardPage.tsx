import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Lock, ShieldCheck, Mail, Key, LogOut, Plus, Search, 
  Trash2, Edit, Eye, Save, Globe, FileText, CheckCircle2, 
  AlertCircle, Upload, EyeOff, Code, Heading, Bold, Italic, 
  Quote, List, Link, Image, Table, ArrowLeft, ArrowUpRight, HelpCircle
} from 'lucide-react';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { blogService, BlogPost, isSupabaseConfigured, SUPABASE_SQL_SETUP } from '../lib/supabase';
import { useLoader } from '../context/LoaderContext';

interface AdminDashboardPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onRouteChange }) => {
  const { triggerAction } = useLoader();
  // Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(blogService.isLoggedIn());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // CMS State
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'draft'>('all');
  
  // Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [editorMode, setEditorMode] = useState<'create' | 'edit'>('create');
  const [currentPostId, setCurrentPostId] = useState<string | null>(null);
  const [showSetupHelp, setShowSetupHelp] = useState(false);

  // Form Fields
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState<'Website Development' | 'Business Growth'>('Website Development');
  const [publishDate, setPublishDate] = useState(new Date().toISOString().split('T')[0]);
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState('https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&auto=format&fit=crop&q=80');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [readingTime, setReadingTime] = useState('5 min read');

  // Preview Mode
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  // Custom Toast notifications
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);

  const contentTextAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isLoggedIn) {
      loadPosts();
    }
  }, [isLoggedIn]);

  // Handle Toast timeout
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Recalculate reading time when content changes
  useEffect(() => {
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    setReadingTime(`${minutes} min read`);
  }, [content]);

  // Generate slug from title automatically in Create mode
  useEffect(() => {
    if (editorMode === 'create' && title) {
      const formattedSlug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setSlug(formattedSlug);
    }
  }, [title, editorMode]);

  const loadPosts = async () => {
    setLoading(true);
    try {
      const allPosts = await blogService.getPosts(true);
      setPosts(allPosts);
    } catch (e) {
      showToast('Failed to load posts', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
  };

  // Auth Submit Handlers
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    if (!email || !password) {
      setAuthError('Please fill in all fields');
      return;
    }
    setAuthLoading(true);
    await triggerAction(async () => {
      const res = await blogService.login(email, password);
      setAuthLoading(false);
      if (res.success) {
        setIsLoggedIn(true);
        showToast('Admin logged in successfully', 'success');
      } else {
        setAuthError(res.error || 'Invalid credentials');
      }
    }, 700);
  };

  const handleLogout = () => {
    blogService.logout();
    setIsLoggedIn(false);
    showToast('Logged out successfully', 'info');
  };

  // Image upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    showToast('Uploading featured image...', 'info');
    try {
      const url = await blogService.uploadImage(file);
      setFeaturedImage(url);
      showToast('Featured image uploaded successfully', 'success');
    } catch (error) {
      showToast('Image upload failed', 'error');
    }
  };

  // Create new blog reset form
  const handleInitCreate = () => {
    setTitle('');
    setSlug('');
    setCategory('Website Development');
    setPublishDate(new Date().toISOString().split('T')[0]);
    setSummary('');
    setContent('');
    setFeaturedImage('https://images.unsplash.com/photo-1547082299-de196ea013d6?w=1200&auto=format&fit=crop&q=80');
    setStatus('draft');
    setEditorMode('create');
    setCurrentPostId(null);
    setIsEditing(true);
    setIsPreviewActive(false);
  };

  // Load post into form for editing
  const handleInitEdit = (post: BlogPost) => {
    setTitle(post.title);
    setSlug(post.slug);
    setCategory(post.category);
    setPublishDate(post.publish_date);
    setSummary(post.summary);
    setContent(post.content);
    setFeaturedImage(post.featured_image);
    setStatus(post.status);
    setEditorMode('edit');
    setCurrentPostId(post.id);
    setIsEditing(true);
    setIsPreviewActive(false);
  };

  // Handle form submission
  const handleSavePost = async (targetStatus?: 'draft' | 'published') => {
    const currentStatus = targetStatus || status;
    if (!title || !slug || !content || !summary) {
      showToast('Please fill in all required fields (Title, Slug, Summary, Content)', 'error');
      return;
    }

    const payload = {
      title,
      slug,
      category,
      publish_date: publishDate,
      author_name: 'Saksham Pandey',
      author_avatar: '/saksham.png',
      reading_time: readingTime,
      content,
      status: currentStatus,
      summary,
      featured_image: featuredImage,
    };

    try {
      if (editorMode === 'create') {
        // Check duplicate slug
        const exists = posts.some(p => p.slug === slug);
        if (exists) {
          showToast('Slug already exists! Please write a unique slug.', 'error');
          return;
        }
        await blogService.createPost(payload);
        showToast('Article created successfully', 'success');
      } else {
        if (currentPostId) {
          await blogService.updatePost(currentPostId, payload);
          showToast('Article updated successfully', 'success');
        }
      }
      setIsEditing(false);
      loadPosts();
    } catch (error) {
      showToast('Error saving article', 'error');
    }
  };

  const handleDeletePost = async (id: string, postTitle: string) => {
    // Avoid blocked native confirm, use a clean overlay confirmation or custom verify logic
    const confirmed = window.confirm(`Are you sure you want to delete the article: "${postTitle}"?`);
    if (!confirmed) return;

    try {
      await blogService.deletePost(id);
      showToast('Article deleted successfully', 'success');
      loadPosts();
    } catch (error) {
      showToast('Error deleting article', 'error');
    }
  };

  // Markdown Toolbar helper insertion
  const insertMarkdownTag = (tagType: string) => {
    const textarea = contentTextAreaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    
    let replacement = '';
    let selectionOffset = 0;

    switch (tagType) {
      case 'heading':
        replacement = `### ${selectedText || 'Heading Text'}\n`;
        break;
      case 'bold':
        replacement = `**${selectedText || 'bold text'}**`;
        selectionOffset = 2;
        break;
      case 'italic':
        replacement = `*${selectedText || 'italic text'}*`;
        selectionOffset = 1;
        break;
      case 'quote':
        replacement = `> ${selectedText || 'Quote citation'}\n`;
        break;
      case 'list':
        replacement = `* ${selectedText || 'List item'}\n`;
        break;
      case 'link':
        replacement = `[${selectedText || 'Link Text'}](https://example.com)`;
        break;
      case 'code':
        replacement = `\`\`\`\n${selectedText || '// code goes here'}\n\`\`\``;
        break;
      case 'image':
        replacement = `![${selectedText || 'Alt Text'}](https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600)`;
        break;
      case 'table':
        replacement = `\n| Column 1 | Column 2 |\n| :--- | :--- |\n| Row 1 | Data 1 |\n| Row 2 | Data 2 |\n`;
        break;
      default:
        return;
    }

    setContent(text.substring(0, start) + replacement + text.substring(end));
    
    // Focus back on textarea
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + selectionOffset, start + replacement.length - selectionOffset);
    }, 50);
  };

  // High-fidelity markdown preview generator for dual-pane CMS visualization
  const renderPreviewMarkdown = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: React.ReactNode[] = [];
    
    const parseInline = (text: string) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>')
        .replace(/\*(.*?)\*/g, '<em class="italic text-gray-300">$1</em>')
        .replace(/`(.*?)`/g, '<code class="bg-[#161b22] px-1 py-0.5 rounded text-[#58A6FF] font-mono text-xs">$1</code>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-[#58A6FF] hover:underline" target="_blank" rel="noopener">$1</a>');
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('### ')) {
        elements.push(<h4 key={idx} className="text-lg font-bold text-white mt-5 mb-2">{trimmed.substring(4)}</h4>);
      } else if (trimmed.startsWith('## ')) {
        elements.push(<h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3 border-b border-[#30363d] pb-1">{trimmed.substring(3)}</h3>);
      } else if (trimmed.startsWith('# ')) {
        elements.push(<h2 key={idx} className="text-2xl font-extrabold text-white mt-8 mb-4">{trimmed.substring(2)}</h2>);
      } else if (trimmed.startsWith('> ')) {
        elements.push(<blockquote key={idx} className="border-l-4 border-[#8B5CF6] pl-4 italic text-[#8b949e] my-4 py-1">{trimmed.substring(2)}</blockquote>);
      } else if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
        elements.push(<li key={idx} className="ml-5 list-disc text-sm text-[#c9d1d9]" dangerouslySetInnerHTML={{ __html: parseInline(trimmed.substring(2)) }} />);
      } else {
        elements.push(<p key={idx} className="text-sm text-[#c9d1d9] leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />);
      }
    });

    return elements;
  };

  // Filtering list
  const filteredPosts = posts.filter(post => {
    const matchesTab = 
      activeTab === 'all' || 
      (activeTab === 'published' && post.status === 'published') ||
      (activeTab === 'draft' && post.status === 'draft');
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="relative min-h-screen py-20 bg-[#0d1117] text-[#c9d1d9] overflow-x-hidden">
      <SEO 
        title="Admin Blog Dashboard | Spark Station"
        description="Internal content management system for publishing, editing, and managing Spark Station publications and articles."
        path="/admin"
        robots="noindex, nofollow"
      />
      <div className="ambient-glow animate-pulse" />

      {/* Floating Custom Toast */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl border shadow-2xl backdrop-blur-md animate-slide-up ${
          toast.type === 'success' 
            ? 'bg-green-950/90 text-green-300 border-green-500/40' 
            : toast.type === 'error'
            ? 'bg-red-950/90 text-red-300 border-red-500/40'
            : 'bg-blue-950/90 text-blue-300 border-blue-500/40'
        }`}>
          {toast.type === 'success' && <CheckCircle2 size={18} className="text-green-400" />}
          {toast.type === 'error' && <AlertCircle size={18} className="text-red-400" />}
          {toast.type === 'info' && <Sparkles size={18} className="text-blue-400 animate-spin" />}
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* LOGIN VIEW */}
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto px-6 relative z-10 pt-12">
          <div className="bg-[#161b22]/90 border border-[#30363d]/90 rounded-2xl p-8 shadow-2xl backdrop-blur-lg">
            
            <div className="text-center mb-8">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#58A6FF]/10 text-[#58A6FF] mb-4">
                <Lock size={22} />
              </span>
              <h1 className="text-2xl font-display font-extrabold text-white tracking-tight">
                Author Console
              </h1>
              <p className="text-xs text-[#8b949e] mt-2">
                Log in with your administrator credentials to access the Spark Station CMS.
              </p>
            </div>

            {authError && (
              <div className="bg-red-950/40 border border-red-500/30 rounded-xl p-4 flex items-start gap-3 mb-6 text-xs text-red-400 leading-relaxed">
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Admin Email
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b949e]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@sparkstation.agency"
                    className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                  Console Key
                </label>
                <div className="relative">
                  <Key size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b949e]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl pl-11 pr-11 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8b949e] hover:text-white"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={authLoading}
                className="w-full py-3 bg-gradient-to-r from-[#58A6FF] to-[#8B5CF6] hover:opacity-90 disabled:opacity-50 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-[#58A6FF]/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                {authLoading ? (
                  <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <ShieldCheck size={16} />
                    <span>Authorize Login</span>
                  </>
                )}
              </button>
            </form>

            <div className="border-t border-[#30363d]/40 mt-8 pt-6 text-center">
              <button
                onClick={() => {
                  setEmail('sparkstation.x@gmail.com');
                  setPassword('SparkAdmin2026!');
                  showToast('Auto-filled default administrative testing credentials', 'info');
                }}
                className="text-xs text-[#58A6FF] hover:underline cursor-pointer"
              >
                Reveal testing credentials (Demo Mode)
              </button>
            </div>

          </div>
        </div>
      ) : (
        /* ADMIN DASHBOARD CONSOLE VIEW */
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-4">
          
          {/* Header Dashboard Nav */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-[#30363d]/50 pb-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500/15 text-green-400 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-green-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span>
                  <span>Console Active</span>
                </span>
                
                {isSupabaseConfigured ? (
                  <span className="bg-blue-500/15 text-blue-400 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-blue-500/30">
                    Supabase Connected
                  </span>
                ) : (
                  <span className="bg-amber-500/15 text-amber-400 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-md border border-amber-500/30">
                    LocalStorage Cache Mode
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-display font-extrabold text-white tracking-tight flex items-center gap-3">
                <span>Spark Station CMS</span>
                <span className="text-[#8b949e] font-sans font-light text-xl">/ Dashboard</span>
              </h1>
              <p className="text-sm text-[#8b949e] mt-1">
                Authorized editor: <strong className="text-white">Saksham Pandey</strong> (sparkstation.x@gmail.com)
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSetupHelp(!showSetupHelp)}
                className="px-4 py-2 bg-[#161b22] hover:bg-[#30363d] border border-[#30363d] text-xs font-semibold text-white rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle size={14} />
                <span>Supabase Setup Instructions</span>
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-[#30363d]/40 hover:bg-red-950/20 hover:border-red-500/30 border border-[#30363d] text-xs font-semibold text-[#8b949e] hover:text-red-400 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <LogOut size={14} />
                <span>Log Out</span>
              </button>
            </div>
          </header>

          {/* Database setup assistance box */}
          {showSetupHelp && (
            <div className="bg-[#161b22]/90 border border-blue-500/30 rounded-2xl p-6 mb-10 shadow-2xl relative animate-slide-down">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles size={16} className="text-[#58A6FF]" />
                <span>Live Supabase Configuration Guide</span>
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed mb-4">
                This website supports dynamic DB updates out-of-the-box. To sync your posts with Supabase permanently:
                <br />
                1. Create a Supabase project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-[#58A6FF] underline">supabase.com</a>.
                <br />
                2. Run the SQL script below inside your Supabase <strong>SQL Editor</strong>.
                <br />
                3. Go to Storage, create a bucket named <strong className="text-white">blog-images</strong>, and set it to <strong>Public</strong>.
                <br />
                4. Define the variables <strong className="text-white">VITE_SUPABASE_URL</strong> and <strong className="text-white">VITE_SUPABASE_ANON_KEY</strong> inside your AI Studio Environment Keys or Vercel Environment Variables.
              </p>
              
              <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-4 max-h-[180px] overflow-y-auto font-mono text-[11px] text-green-400 leading-relaxed mb-2">
                <pre>{SUPABASE_SQL_SETUP}</pre>
              </div>
              <button
                onClick={() => setShowSetupHelp(false)}
                className="text-xs text-[#58A6FF] hover:underline block text-right ml-auto"
              >
                Close instructions
              </button>
            </div>
          )}

          {/* CMS EDITOR PANEL */}
          {isEditing ? (
            <div className="bg-[#161b22]/80 border border-[#30363d] rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-md mb-12">
              
              {/* Editor sub header */}
              <div className="flex flex-wrap items-center justify-between gap-6 border-b border-[#30363d]/50 pb-6 mb-8">
                <div>
                  <button 
                    onClick={() => setIsEditing(false)}
                    className="inline-flex items-center gap-2 text-xs text-[#8b949e] hover:text-white transition-colors mb-2 cursor-pointer"
                  >
                    <ArrowLeft size={12} />
                    <span>Back to posts overview</span>
                  </button>
                  <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    <FileText size={20} className="text-[#58A6FF]" />
                    <span>{editorMode === 'create' ? 'Draft New Article' : 'Modify Article Settings'}</span>
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  {/* Status Toggle Draft/Publish indicator */}
                  <div className="bg-[#0d1117] p-1 border border-[#30363d] rounded-xl flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setStatus('draft')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        status === 'draft' ? 'bg-[#30363d] text-white' : 'text-[#8b949e]'
                      }`}
                    >
                      Draft
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus('published')}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                        status === 'published' ? 'bg-[#58A6FF] text-white' : 'text-[#8b949e]'
                      }`}
                    >
                      Publish
                    </button>
                  </div>

                  <button
                    onClick={() => setIsPreviewActive(!isPreviewActive)}
                    className="px-4 py-2 bg-[#161b22] hover:bg-[#30363d] border border-[#30363d] text-xs font-semibold text-[#8b949e] hover:text-white rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    {isPreviewActive ? <EyeOff size={14} /> : <Eye size={14} />}
                    <span>{isPreviewActive ? 'Write Content' : 'Preview Blog'}</span>
                  </button>

                  <button
                    onClick={() => handleSavePost()}
                    className="px-5 py-2 bg-[#58A6FF] hover:bg-[#58A6FF]/85 text-white text-xs font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Save size={14} />
                    <span>Save Post Settings</span>
                  </button>
                </div>
              </div>

              {/* EDITOR DUAL-PANE GRID LAYOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Editor Inputs panel */}
                <div className={`${isPreviewActive ? 'lg:col-span-6' : 'lg:col-span-12'} space-y-6`}>
                  
                  {/* Main Core Fields block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#0d1117]/45 p-6 border border-[#30363d]/50 rounded-2xl">
                    {/* Title */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                        Blog Title *
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., How Much Does a Website Cost in 2026?"
                        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all font-semibold"
                      />
                    </div>

                    {/* Slug */}
                    <div>
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span>Slug URL Path *</span>
                        <span className="text-[10px] text-[#8b949e] font-mono">/blog/{slug || '...'}</span>
                      </label>
                      <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
                        placeholder="how-much-does-a-website-cost"
                        className="w-full bg-[#0d1117] text-[#58A6FF] font-mono border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all"
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                        Post Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as 'Website Development' | 'Business Growth')}
                        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all appearance-none cursor-pointer"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Business Growth">Business Growth</option>
                      </select>
                    </div>

                    {/* Publish Date */}
                    <div>
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                        Publish Date
                      </label>
                      <input
                        type="date"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all cursor-pointer"
                      />
                    </div>

                    {/* Estimated reading time (Auto Calculated) */}
                    <div>
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                        Estimated Reading Time
                      </label>
                      <input
                        type="text"
                        value={readingTime}
                        onChange={(e) => setReadingTime(e.target.value)}
                        placeholder="e.g., 5 min read"
                        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all"
                      />
                    </div>

                    {/* Featured Image URL Input & File Upload */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2">
                        Featured Banner Image URL
                      </label>
                      <div className="flex gap-4 items-center">
                        <input
                          type="text"
                          value={featuredImage}
                          onChange={(e) => setFeaturedImage(e.target.value)}
                          placeholder="https://images.unsplash.com/..."
                          className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all"
                        />
                        
                        <div className="relative">
                          <input
                            type="file"
                            accept="image/*"
                            id="banner-image-uploader"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                          <label
                            htmlFor="banner-image-uploader"
                            className="px-4 py-3 bg-[#161b22] border border-[#30363d] rounded-xl text-xs font-semibold text-[#c9d1d9] hover:text-white transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap"
                          >
                            <Upload size={14} />
                            <span>Upload File</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Summary (SEO description) */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold text-[#8b949e] uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span>SEO Summary / Meta Description *</span>
                        <span className={`text-[10px] ${summary.length >= 150 && summary.length <= 160 ? 'text-green-400' : 'text-[#8b949e]'}`}>
                          {summary.length} characters (Ideal: 150-160)
                        </span>
                      </label>
                      <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        placeholder="e.g. Spark Station is a premium agency explaining custom pricing, SEO optimizations, and UI guidelines to maximize client conversions."
                        maxLength={220}
                        rows={2}
                        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#58A6FF] transition-all resize-none leading-relaxed"
                      />
                    </div>
                  </div>

                  {/* Core Markdown Body content editor */}
                  <div className="bg-[#0d1117]/45 p-6 border border-[#30363d]/50 rounded-2xl flex flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#30363d]/50 pb-4 mb-4">
                      <span className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">
                        Article Content (Markdown) *
                      </span>
                      
                      {/* Markdown Toolbar buttons */}
                      <div className="flex flex-wrap gap-1.5 bg-[#161b22] p-1 border border-[#30363d] rounded-lg">
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('heading')} 
                          title="Insert Heading"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Heading size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('bold')} 
                          title="Insert Bold text"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Bold size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('italic')} 
                          title="Insert Italic text"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Italic size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('quote')} 
                          title="Insert Blockquote"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Quote size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('list')} 
                          title="Insert List Item"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <List size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('link')} 
                          title="Insert Hyperlink"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Link size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('code')} 
                          title="Insert Code Block"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Code size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('image')} 
                          title="Insert Image"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Image size={14} />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => insertMarkdownTag('table')} 
                          title="Insert Table Grid"
                          className="p-1.5 hover:bg-[#30363d] hover:text-white text-[#8b949e] rounded transition-colors cursor-pointer"
                        >
                          <Table size={14} />
                        </button>
                      </div>
                    </div>

                    <textarea
                      ref={contentTextAreaRef}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      placeholder="Write your article body here in Markdown format. Utilize structural ## and ### headings, list points, bullet grids, tables, blockquotes, and code snippets."
                      rows={16}
                      className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl px-4 py-3 text-sm md:text-base focus:outline-none focus:border-[#58A6FF] transition-all resize-y font-mono leading-relaxed"
                    />
                  </div>

                </div>

                {/* Live Preview Dual Pane Panel */}
                {isPreviewActive && (
                  <div className="lg:col-span-6 flex flex-col space-y-4">
                    <span className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider px-1">
                      Live parsed blog preview
                    </span>
                    
                    <div className="bg-[#0d1117] border border-[#30363d] rounded-2xl p-6 md:p-8 max-h-[850px] overflow-y-auto">
                      <div className="mb-6">
                        <span className="text-[10px] uppercase font-bold text-[#58A6FF] tracking-wider block mb-2">{category}</span>
                        <h1 className="text-2xl font-display font-extrabold text-white leading-tight mb-2">{title || 'Your Title Goes Here'}</h1>
                        <div className="flex gap-4 text-xs text-[#8b949e] items-center">
                          <span>By Saksham Pandey</span>
                          <span>•</span>
                          <span>{publishDate}</span>
                          <span>•</span>
                          <span>{readingTime}</span>
                        </div>
                      </div>

                      {/* Display featured banner image in preview if supplied */}
                      {featuredImage && (
                        <div className="rounded-xl overflow-hidden aspect-video border border-[#30363d] mb-6">
                          <img 
                            src={featuredImage} 
                            alt="Banner Preview" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600';
                            }}
                          />
                        </div>
                      )}

                      <div className="prose prose-invert max-w-none border-t border-[#30363d]/40 pt-4">
                        {content ? renderPreviewMarkdown(content) : <p className="text-xs text-[#8b949e] italic">No content written yet. Begin typing in the editor pane to preview here.</p>}
                      </div>
                    </div>
                  </div>
                )}

              </div>

            </div>
          ) : (
            /* BLOG OVERVIEW LIST VIEW */
            <div>
              
              {/* Stat Counters Row */}
              <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="bg-[#161b22]/70 border border-[#30363d]/80 rounded-2xl p-5 backdrop-blur-md text-left">
                  <span className="block text-xs font-bold text-[#8b949e] uppercase tracking-wider mb-1">Total Blogs</span>
                  <span className="text-3xl font-bold text-white font-mono">{posts.length}</span>
                </div>
                <div className="bg-[#161b22]/70 border border-[#30363d]/80 rounded-2xl p-5 backdrop-blur-md text-left">
                  <span className="block text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Published</span>
                  <span className="text-3xl font-bold text-white font-mono">
                    {posts.filter(p => p.status === 'published').length}
                  </span>
                </div>
                <div className="bg-[#161b22]/70 border border-[#30363d]/80 rounded-2xl p-5 backdrop-blur-md text-left">
                  <span className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Drafts</span>
                  <span className="text-3xl font-bold text-white font-mono">
                    {posts.filter(p => p.status === 'draft').length}
                  </span>
                </div>
                <div className="bg-[#161b22]/70 border border-[#30363d]/80 rounded-2xl p-5 backdrop-blur-md text-left">
                  <span className="block text-xs font-bold text-[#58A6FF] uppercase tracking-wider mb-1 font-sans">Agency Domain</span>
                  <span className="text-sm font-semibold text-white truncate block mt-2">spark-station-2.vercel.app</span>
                </div>
              </section>

              {/* Table search, tab control headers */}
              <section className="bg-[#161b22]/80 border border-[#30363d]/80 rounded-2xl p-6 shadow-xl backdrop-blur-md mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  
                  {/* Tabs */}
                  <div className="flex gap-2 bg-[#0d1117] p-1 border border-[#30363d] rounded-xl w-full md:w-auto">
                    {(['all', 'published', 'draft'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 md:flex-none px-5 py-2 text-xs font-semibold rounded-lg transition-all capitalize cursor-pointer ${
                          activeTab === tab 
                            ? 'bg-[#30363d] text-white shadow' 
                            : 'text-[#8b949e] hover:text-white'
                        }`}
                      >
                        {tab} Blogs
                      </button>
                    ))}
                  </div>

                  {/* Actions search & Create */}
                  <div className="flex gap-3 w-full md:w-auto md:max-w-md items-stretch sm:items-center flex-col sm:flex-row">
                    <div className="relative flex-1">
                      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8b949e]" />
                      <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#0d1117] text-white border border-[#30363d] rounded-xl pl-9 pr-4 py-2 text-xs focus:outline-none focus:border-[#58A6FF] transition-all"
                      />
                    </div>

                    <button
                      onClick={handleInitCreate}
                      className="px-4 py-2 bg-gradient-to-r from-[#58A6FF] to-[#8B5CF6] hover:opacity-90 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Plus size={14} />
                      <span>Write Article</span>
                    </button>
                  </div>

                </div>
              </section>

              {/* TABLE LISTING GRID */}
              <section className="bg-[#161b22]/50 border border-[#30363d]/60 rounded-2xl overflow-hidden shadow-xl mb-12">
                {loading ? (
                  <div className="flex flex-col justify-center items-center py-24 gap-4">
                    <div className="w-10 h-10 border-2 border-t-transparent border-[#58A6FF] rounded-full animate-spin"></div>
                    <p className="text-[#8b949e] text-xs">Retrieving database articles...</p>
                  </div>
                ) : filteredPosts.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#161b22] border-b border-[#30363d] text-[#8b949e] text-xs font-semibold uppercase tracking-wider">
                          <th className="p-4 pl-6">Article Details</th>
                          <th className="p-4">Category</th>
                          <th className="p-4">Publish Date</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 pr-6 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-[#30363d]/30">
                        {filteredPosts.map((post) => (
                          <tr key={post.id} className="hover:bg-[#161b22]/40 transition-colors">
                            {/* Card style info detail */}
                            <td className="p-4 pl-6">
                              <div className="flex items-center gap-4">
                                <img 
                                  src={post.featured_image} 
                                  alt={post.title} 
                                  className="w-12 h-12 rounded-lg object-cover border border-[#30363d] shrink-0"
                                  referrerPolicy="no-referrer"
                                />
                                <div>
                                  <span className="block font-bold text-white line-clamp-1 max-w-[280px] sm:max-w-md">{post.title}</span>
                                  <span className="block text-xs text-[#8b949e] font-mono mt-0.5">/blog/{post.slug}</span>
                                </div>
                              </div>
                            </td>

                            {/* Category badge */}
                            <td className="p-4 whitespace-nowrap">
                              <span className="text-xs text-[#c9d1d9] bg-[#30363d]/40 border border-[#30363d]/80 px-2.5 py-1 rounded-full">
                                {post.category}
                              </span>
                            </td>

                            {/* Date published */}
                            <td className="p-4 text-xs text-[#8b949e] whitespace-nowrap">
                              {post.publish_date}
                            </td>

                            {/* Draft / Published status */}
                            <td className="p-4 whitespace-nowrap">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                                post.status === 'published'
                                  ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${post.status === 'published' ? 'bg-green-400' : 'bg-amber-400'}`}></span>
                                {post.status}
                              </span>
                            </td>

                            {/* Actions block */}
                            <td className="p-4 pr-6 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end gap-2.5">
                                <a
                                  href={`/blog/${post.slug}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="p-1.5 hover:bg-[#30363d] text-[#8b949e] hover:text-white rounded-lg border border-[#30363d]/60 transition-all cursor-pointer"
                                  title="View Public Post"
                                >
                                  <ArrowUpRight size={14} />
                                </a>

                                <button
                                  onClick={() => handleInitEdit(post)}
                                  className="p-1.5 hover:bg-[#30363d] text-[#8b949e] hover:text-white rounded-lg border border-[#30363d]/60 transition-all cursor-pointer"
                                  title="Edit Post"
                                >
                                  <Edit size={14} />
                                </button>

                                <button
                                  onClick={() => handleDeletePost(post.id, post.title)}
                                  className="p-1.5 hover:bg-red-950/20 text-[#8b949e] hover:text-red-400 rounded-lg border border-[#30363d]/60 transition-all cursor-pointer"
                                  title="Delete Post"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-20 px-6">
                    <FileText size={40} className="text-[#8b949e] mx-auto mb-3 opacity-40" />
                    <h4 className="text-lg font-bold text-white mb-1">No Posts Available</h4>
                    <p className="text-xs text-[#8b949e] max-w-sm mx-auto mb-6">Create a new draft or publish blog insights to get started.</p>
                    <button
                      onClick={handleInitCreate}
                      className="px-4 py-2 bg-[#58A6FF] hover:bg-[#58A6FF]/85 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer"
                    >
                      Write your first post
                    </button>
                  </div>
                )}
              </section>

            </div>
          )}

        </div>
      )}
    </div>
  );
};
