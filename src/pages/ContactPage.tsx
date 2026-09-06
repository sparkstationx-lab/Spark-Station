import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, CheckCircle2, ArrowUpRight, HelpCircle, Sparkles } from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/agencyData';
import { SEO } from '../components/SEO';
import { useLoader } from '../context/LoaderContext';

export const ContactPage: React.FC = () => {
  const { triggerAction } = useLoader();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.message) return;

    await triggerAction(async () => {
      // Build a WhatsApp message URL to instantly send the project brief
      const text = encodeURIComponent(
        `*New Project Brief Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Service:* ${formData.service}\n\n*Message:*\n${formData.message}`
      );
      window.open(`https://wa.me/919111376314?text=${text}`, '_blank');
      setSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setSubmitted(false);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Spark Station",
    "description": "Get in touch with Spark Station. Let's discuss your custom web application, UI/UX design, or branding project and build something remarkable together.",
    "url": "https://spark-station-2.vercel.app/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Spark Station",
      "email": "sparkstation.x@gmail.com",
      "telephone": "+919111376314",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+919111376314",
          "contactType": "customer service",
          "email": "sparkstation.x@gmail.com",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+917224935780",
          "contactType": "sales",
          "email": "manas@sparkstation.agency",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        }
      ],
      "sameAs": [
        "https://in.linkedin.com/in/sakshampandeyin",
        "https://www.instagram.com/sakshampandey.x/",
        "https://x.com/crazy_saksham",
        "https://www.snapchat.com/@sakshampande.x?share_id=_KJ6klHB2G0&locale=en-IN",
        "https://wa.me/919111376314"
      ]
    }
  };

  return (
    <div className="relative min-h-screen py-20 overflow-x-hidden">
      <SEO 
        title="Contact Us &amp; Start Your Project | Spark Station"
        description="Get in touch with Spark Station. Let's discuss your custom web application, UI/UX design, or branding project and build something remarkable together."
        path="/contact"
        schemaMarkup={contactSchema}
      />
      <div className="ambient-glow" />

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <span className="section-label mb-6">
          <Mail size={14} className="text-[#58A6FF]" />
          <span>Connect</span>
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto leading-relaxed">
          Have a project in mind? We’d love to hear from you. Reach out and we’ll get back to you within 24 hours.
        </p>
      </section>

      {/* Content Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Col: Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="ss-card p-8 bg-gradient-to-br from-[#161b22] to-[#0d1117]">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Direct Communication Channels
              </h3>

              <div className="space-y-5">
                {/* WhatsApp */}
                <a
                  href={AGENCY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl bg-[#21262d]/60 border border-[#30363d] hover:border-[#25D366]/50 transition-all flex items-start gap-4 no-underline group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">WhatsApp &amp; Direct</span>
                      <ArrowUpRight size={16} className="text-[#8b949e] group-hover:text-[#25D366]" />
                    </div>
                    <span className="text-base font-mono font-medium text-white block mt-1">
                      {AGENCY_INFO.whatsapp}
                    </span>
                    <span className="text-xs text-[#58A6FF] block mt-1">
                      Saksham Pandey · Founder &amp; CEO
                    </span>
                  </div>
                </a>

                {/* Call - Saksham */}
                <a
                  href={`tel:${AGENCY_INFO.callSaksham}`}
                  className="p-5 rounded-2xl bg-[#21262d]/60 border border-[#30363d] hover:border-[#58A6FF]/50 transition-all flex items-start gap-4 no-underline group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#58A6FF]/15 text-[#58A6FF] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">Direct Call</span>
                      <ArrowUpRight size={16} className="text-[#8b949e] group-hover:text-[#58A6FF]" />
                    </div>
                    <span className="text-base font-mono font-medium text-white block mt-1">
                      {AGENCY_INFO.callSaksham}
                    </span>
                    <span className="text-xs text-[#58A6FF] block mt-1">
                      Saksham Pandey · Founder &amp; CEO
                    </span>
                  </div>
                </a>

                {/* Call - Manas */}
                <a
                  href={`tel:${AGENCY_INFO.callManas}`}
                  className="p-5 rounded-2xl bg-[#21262d]/60 border border-[#30363d] hover:border-[#34D399]/50 transition-all flex items-start gap-4 no-underline group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#34D399]/15 text-[#34D399] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">Client Relations Call</span>
                      <ArrowUpRight size={16} className="text-[#8b949e] group-hover:text-[#34D399]" />
                    </div>
                    <span className="text-base font-mono font-medium text-white block mt-1">
                      {AGENCY_INFO.callManas}
                    </span>
                    <span className="text-xs text-[#34D399] block mt-1">
                      Manas · Project Coordinator
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="p-5 rounded-2xl bg-[#21262d]/60 border border-[#30363d] hover:border-[#F778BA]/50 transition-all flex items-start gap-4 no-underline group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F778BA]/15 text-[#F778BA] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8b949e]">Email</span>
                      <ArrowUpRight size={16} className="text-[#8b949e] group-hover:text-[#F778BA]" />
                    </div>
                    <span className="text-sm sm:text-base font-mono font-medium text-white block mt-1 truncate">
                      {AGENCY_INFO.email}
                    </span>
                    <span className="text-xs text-[#F778BA] block mt-1">
                      Business Inquiries & RFP
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Advisory note */}
            <div className="p-6 rounded-2xl bg-[#161b22]/50 border border-[#30363d]/80 flex items-start gap-3.5 text-xs text-[#8b949e] leading-relaxed">
              <HelpCircle size={18} className="text-[#58A6FF] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-white font-medium block mb-1">Response Guarantee</span>
                We review every project inquiry personally. You will receive an initial proposal or calendar invite within 24 hours.
              </div>
            </div>
          </div>

          {/* Right Col: Consultation Form */}
          <div className="lg:col-span-7">
            <div className="ss-card p-8 sm:p-12 shadow-2xl relative bg-[#161b22]">
              
              {!submitted ? (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                      Send Us a Project Brief
                    </h2>
                    <p className="text-sm text-[#8b949e]">
                      Fill out the form below and we’ll get back to you with a custom quote within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#c9d1d9] font-medium mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Saksham Pandey"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white focus:border-[#58A6FF] focus:outline-none transition-colors placeholder-[#484f58] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#c9d1d9] font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white focus:border-[#58A6FF] focus:outline-none transition-colors placeholder-[#484f58] text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#c9d1d9] font-medium mb-2">
                          Phone <span className="text-[#8b949e] font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white focus:border-[#58A6FF] focus:outline-none transition-colors placeholder-[#484f58] text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#c9d1d9] font-medium mb-2">
                          Service *
                        </label>
                        <select
                          required
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white focus:border-[#58A6FF] focus:outline-none transition-colors text-sm"
                        >
                          <option value="" disabled className="text-[#484f58]">
                            Select a service...
                          </option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title} className="bg-[#161b22] text-white">
                              {s.title}
                            </option>
                          ))}
                          <option value="Other / Multiple" className="bg-[#161b22] text-white">
                            Other / Custom Scope
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#c9d1d9] font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us about your project goals, scope, rough timeline, and any reference designs you like..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#0d1117] border border-[#30363d] text-white focus:border-[#58A6FF] focus:outline-none transition-colors placeholder-[#484f58] text-sm leading-relaxed resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full !py-4 text-base justify-center shadow-xl shadow-[#58A6FF]/20"
                    >
                      <Send size={18} />
                      <span>Send Us a Project Brief</span>
                    </button>
                  </form>

                  <div className="mt-8 pt-6 border-t border-[#30363d] text-center">
                    <span className="text-xs text-[#8b949e]">Prefer a structured consultation doc? </span>
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[#58A6FF] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Fill our detailed project questionnaire on WhatsApp</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-[#34D399]/15 text-[#34D399] flex items-center justify-center mx-auto border border-[#34D399]/30">
                    <CheckCircle2 size={44} />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white">
                    Message Received!
                  </h2>
                  <p className="text-base text-[#8b949e] max-w-md mx-auto leading-relaxed">
                    Thanks for reaching out. Your project details have been forwarded to Saksham & Manas. We’ll get back to you within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="btn-secondary !px-8 !py-3 text-sm font-semibold"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
