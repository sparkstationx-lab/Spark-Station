import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, size = 20, className = '', style }) => {
  // Map standard string names to Lucide icons dynamically
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.CodeXml;
  return <IconComponent size={size} className={className} style={style} />;
};
