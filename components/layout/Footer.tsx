import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  PORTFOLIO_LOCATION,
  PORTFOLIO_EMAIL,
  PORTFOLIO_EMAIL_LINK,
} from '../../constants';
import Logo from '../ui/Logo';

const Footer: React.FC = () => (
  <footer
    className="bg-[#0F1E2E] text-[#F7F5F0] pt-[60px] pb-[60px] border-t border-white/5"
    aria-labelledby="footer-heading"
  >
    <h2 id="footer-heading" className="sr-only">
      Pie de página
    </h2>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center">
      <Link to="/" className="flex items-center justify-center gap-3 group shrink-0" aria-label="Ir al inicio">
        <Logo className="w-8 h-8" light={true} />
        <div className="flex flex-col justify-center text-left">
          <span className="text-xs font-bold tracking-[0.2em] text-[#F7F5F0] serif leading-none uppercase">
            Diana Marcela
          </span>
          <span className="text-[8px] tracking-[0.35em] text-[#C6A75E] font-bold uppercase mt-1 opacity-90">
            Bermúdez Cuevas
          </span>
        </div>
      </Link>

      <p className="text-[11px] text-[#F7F5F0]/60 font-light uppercase tracking-[0.25em]">
        Abogada · Especialista en Derecho Constitucional
      </p>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#F7F5F0]/70 font-light">
        <span className="flex items-center gap-2">
          <MapPin size={14} className="text-[#C6A75E]" />
          {PORTFOLIO_LOCATION}
        </span>
        <a
          href={PORTFOLIO_EMAIL_LINK}
          className="flex items-center gap-2 hover:text-[#C6A75E] transition-colors break-all"
        >
          <Mail size={14} className="text-[#C6A75E] shrink-0" />
          {PORTFOLIO_EMAIL}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;