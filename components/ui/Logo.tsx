import React, { memo } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = 'w-10 h-10', light = false }) => {
  const primary = light ? '#F7F5F0' : '#C6A75E';
  const accent = '#C6A75E';
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="8" y="8" width="84" height="84" stroke={primary} strokeWidth="2.5" />
      <rect x="14" y="14" width="72" height="72" stroke={accent} strokeWidth="1" opacity="0.45" />
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="52"
        fontWeight="700"
        fill={primary}
      >
        D
      </text>
      <path d="M68 72L82 72" stroke={accent} strokeWidth="2.5" strokeLinecap="square" />
    </svg>
  );
};

export default memo(Logo);