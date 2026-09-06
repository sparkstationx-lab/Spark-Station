import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/agencyData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-14">
        <span className="section-label">
          <HelpCircle size={14} />
          <span>FAQ</span>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mt-3 text-white">
          Common <span className="gradient-text">Questions</span>
        </h2>
        <p className="text-base text-[#8b949e] mt-4 max-w-xl mx-auto">
          Everything you need to know about working with Spark Station, pricing, timelines, and ownership.
        </p>
      </div>

      <div className="ss-card divide-y divide-[#30363d]/80 overflow-hidden">
        {FAQS.map((faq, index) => {
          const isOpen = openIdx === index;
          return (
            <div key={index} className="transition-colors hover:bg-[#21262d]/40">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-6 focus:outline-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-semibold text-white">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center flex-shrink-0 text-[#58A6FF] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#58A6FF]/20 border-[#58A6FF]/40' : ''
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-1 text-[#8b949e] text-base leading-relaxed border-t border-transparent animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center text-sm text-[#8b949e] bg-[#161b22]/60 p-6 rounded-2xl border border-[#30363d]/60 flex flex-col sm:flex-row items-center justify-center gap-2">
        <span>Have a question not listed here?</span>
        <a
          href="https://wa.me/919111376314?text=Hi%2C%20I%20have%20a%20question"
          target="_blank"
          rel="noreferrer"
          className="text-[#58A6FF] hover:underline font-semibold"
        >
          Ask us directly on WhatsApp →
        </a>
      </div>
    </section>
  );
};
