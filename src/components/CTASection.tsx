import React from 'react';
import { Zap, MessageCircle, Phone, Mail } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { PageRoute } from '../types';

interface CTASectionProps {
  onRouteChange: (route: PageRoute) => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onRouteChange }) => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div
        className="ss-card p-12 md:p-16 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(88,166,255,0.08), rgba(139,92,246,0.08))',
          borderColor: 'rgba(88,166,255,0.25)',
        }}
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#58A6FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-5 text-white">
            Ready to <span className="gradient-text">Start Your Project?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#8b949e] mb-10 leading-relaxed">
            Let's build something great together. Get in touch for a free consultation and a transparent custom quote within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <button
              onClick={() => {
                onRouteChange('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary text-base !py-3.5 !px-8 shadow-xl shadow-[#58A6FF]/25"
            >
              <Zap size={18} />
              <span>Start Your Project</span>
            </button>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-base !py-3.5 !px-8 hover:border-[#25D366]/50 hover:text-[#25D366]"
            >
              <MessageCircle size={18} />
              <span>Free Consultation</span>
            </a>
          </div>

          {/* Quick Contact Grid inside CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-[#30363d]/80 text-left">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-xl bg-[#0d1117]/60 border border-[#30363d] hover:border-[#25D366]/40 transition-all group flex items-center gap-3.5 no-underline"
            >
              <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-[#8b949e] block">WhatsApp</span>
                <span className="text-sm font-mono text-white font-medium truncate block">
                  {AGENCY_INFO.whatsapp}
                </span>
                <span className="text-[10px] text-[#58A6FF] block">Saksham · Consultation</span>
              </div>
            </a>

            <a
              href={`tel:${AGENCY_INFO.callManas}`}
              className="p-4 rounded-xl bg-[#0d1117]/60 border border-[#30363d] hover:border-[#58A6FF]/40 transition-all group flex items-center gap-3.5 no-underline"
            >
              <div className="w-10 h-10 rounded-lg bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-[#8b949e] block">Call Us</span>
                <span className="text-sm font-mono text-white font-medium truncate block">
                  {AGENCY_INFO.callManas}
                </span>
                <span className="text-[10px] text-[#34D399] block">Manas · Client Relations</span>
              </div>
            </a>

            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="p-4 rounded-xl bg-[#0d1117]/60 border border-[#30363d] hover:border-[#F778BA]/40 transition-all group flex items-center gap-3.5 no-underline"
            >
              <div className="w-10 h-10 rounded-lg bg-[#F778BA]/15 text-[#F778BA] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-[#8b949e] block">Email Us</span>
                <span className="text-xs font-mono text-white font-medium truncate block">
                  {AGENCY_INFO.email}
                </span>
                <span className="text-[10px] text-[#F778BA] block">Business Inquiries</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
