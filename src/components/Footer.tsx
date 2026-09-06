import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types';
import { AGENCY_INFO } from '../data/agencyData';
import { Logo } from './Logo';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (route: PageRoute) => {
    onRouteChange(route);
    scrollToTop();
  };

  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d]/80 pt-20 pb-12 text-[#8b949e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo size={36} showText={true} />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6 text-[#8b949e]">
              Helping startups, businesses, and creators build, grow, and scale online. From high-converting web apps to brand identities — we deliver measurable digital results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#25D366] hover:bg-[#21262d] hover:border-[#25D366]/40 transition-all"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={`tel:${AGENCY_INFO.call}`}
                className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#58A6FF] hover:bg-[#21262d] hover:border-[#58A6FF]/40 transition-all"
                title="Call Us"
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-10 h-10 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#F778BA] hover:bg-[#21262d] hover:border-[#F778BA]/40 transition-all"
                title="Email Us"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-white transition-colors cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('portfolio')} className="hover:text-white transition-colors cursor-pointer">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('team')} className="hover:text-white transition-colors cursor-pointer">
                  Team
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-5">
              Core Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleLink('services')}>Web Development</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleLink('services')}>Product Design</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleLink('services')}>UI/UX Design</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleLink('services')}>Branding & Identity</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleLink('services')}>E-Commerce</li>
              <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleLink('services')}>SEO & Performance</li>
            </ul>
          </div>

          {/* Col 4: Contact Direct */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-5">
              Get In Touch
            </h4>
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-xs text-[#8b949e] block">Consultation (WhatsApp &amp; Call)</span>
                <a href={`tel:${AGENCY_INFO.callSaksham}`} className="text-white hover:text-[#58A6FF] font-mono flex items-center gap-1 mt-0.5">
                  {AGENCY_INFO.callSaksham}
                </a>
                <span className="text-[11px] text-[#58A6FF] block mt-0.5">Saksham Pandey (Founder)</span>
              </div>
              <div>
                <span className="text-xs text-[#8b949e] block">Client Relations (Call)</span>
                <a href={`tel:${AGENCY_INFO.callManas}`} className="text-white hover:text-[#34D399] font-mono flex items-center gap-1 mt-0.5">
                  {AGENCY_INFO.callManas}
                </a>
                <span className="text-[11px] text-[#34D399] block mt-0.5">Manas (Project Coordinator)</span>
              </div>
              <div>
                <span className="text-xs text-[#8b949e] block">Business Email</span>
                <a href={`mailto:${AGENCY_INFO.email}`} className="text-white hover:text-[#F778BA] flex items-center gap-1 mt-0.5 break-all">
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>{AGENCY_INFO.copyright}</p>
          <div className="flex items-center gap-6">
            <span>Built with precision & speed</span>
            <button onClick={scrollToTop} className="text-[#58A6FF] hover:underline cursor-pointer">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
