import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

interface LinkedInBadgeProps {
  vanity?: string;
  name?: string;
  profileUrl?: string;
  theme?: 'dark' | 'light';
  size?: 'medium' | 'large';
  type?: 'VERTICAL' | 'HORIZONTAL';
  className?: string;
}

export const LinkedInBadge: React.FC<LinkedInBadgeProps> = ({
  vanity = 'sakshampandeyin',
  name = 'saksham pandey',
  profileUrl = 'https://in.linkedin.com/in/sakshampandeyin?trk=profile-badge',
  theme = 'dark',
  size = 'medium',
  type = 'VERTICAL',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadBadgeScript = () => {
      // Remove any previously inserted badge script to force re-parsing on route transition
      const existingScript = document.getElementById('linkedin-badge-script');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'linkedin-badge-script';
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.type = 'text/javascript';

      script.onload = () => {
        if (isMounted) {
          setLoaded(true);
          // If LinkedIn's renderer function exists, invoke it
          if (typeof (window as any).LIRenderAll === 'function') {
            (window as any).LIRenderAll();
          }
        }
      };

      document.body.appendChild(script);
    };

    // Small delay to ensure DOM element is painted
    const timer = setTimeout(() => {
      loadBadgeScript();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [vanity, theme, size, type]);

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div 
        ref={containerRef}
        className="relative w-full flex justify-center items-center min-h-[280px] overflow-hidden"
      >
        {/* LinkedIn Official Badge DOM Element */}
        <div
          className="badge-base LI-profile-badge !m-0 !p-0 transition-all duration-300"
          data-locale="en_US"
          data-size={size}
          data-theme={theme}
          data-type={type}
          data-vanity={vanity}
          data-version="v1"
        >
          <a
            className="badge-base__link LI-simple-link text-xs text-[#58A6FF] hover:underline flex items-center gap-1.5 py-4"
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={14} className="text-[#0A66C2]" />
            <span>{name} (LinkedIn Profile)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
