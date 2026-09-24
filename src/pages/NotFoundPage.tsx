import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, Layers, Briefcase, MapPin, MessageCircle, HelpCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { SEO } from '../components/SEO';
import { AGENCY_INFO } from '../data/agencyData';

interface NotFoundPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onRouteChange }) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string, route: PageRoute) => {
    onRouteChange(route);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden">
      <SEO
        title="404: Page Not Found | Spark Station"
        description="The page you are looking for does not exist or has been moved. Explore our web development services, portfolio case studies, and digital agency solutions."
        path="/404"
        robots="noindex, follow"
      />
      <div className="ambient-glow" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-6 bg-[#F85149]/10 text-[#F85149] border border-[#F85149]/30"
        >
          <HelpCircle size={14} />
          <span>Error 404 • Resource Not Found</span>
        </motion.div>

        {/* Big Code */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl sm:text-8xl font-display font-bold text-white tracking-tight mb-4"
        >
          4<span className="gradient-text">0</span>4
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-display font-semibold text-white mb-4"
        >
          This Page Could Not Be Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-[#8b949e] max-w-lg mx-auto leading-relaxed mb-10"
        >
          The link you followed may be broken, outdated, or the address might have changed. Discover what you need using our primary shortcuts below.
        </motion.p>

        {/* Helpful Shortcut Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-10 text-left"
        >
          <button
            onClick={() => handleNavigate('/', 'home')}
            className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#58A6FF] transition-colors group cursor-pointer"
          >
            <Home size={18} className="text-[#58A6FF] mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Home</div>
            <div className="text-[10px] text-[#8b949e]">Main overview</div>
          </button>

          <button
            onClick={() => handleNavigate('/services', 'services')}
            className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#34D399] transition-colors group cursor-pointer"
          >
            <Layers size={18} className="text-[#34D399] mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Services</div>
            <div className="text-[10px] text-[#8b949e]">7 core domains</div>
          </button>

          <button
            onClick={() => handleNavigate('/portfolio', 'portfolio')}
            className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#FBBF24] transition-colors group cursor-pointer"
          >
            <Briefcase size={18} className="text-[#FBBF24] mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Portfolio</div>
            <div className="text-[10px] text-[#8b949e]">Case studies</div>
          </button>

          <button
            onClick={() => handleNavigate('/gwalior', 'home')}
            className="p-3.5 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#A855F7] transition-colors group cursor-pointer"
          >
            <MapPin size={18} className="text-[#A855F7] mb-2 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Gwalior Hub</div>
            <div className="text-[10px] text-[#8b949e]">Local agency</div>
          </button>
        </motion.div>

        {/* Primary Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => handleNavigate('/', 'home')}
            className="btn-primary !py-3 !px-6 text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </button>

          <a
            href={AGENCY_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary !py-3 !px-6 text-sm cursor-pointer"
          >
            <MessageCircle size={16} />
            <span>Contact Support</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
