import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  PORTFOLIO_NAME,
  PORTFOLIO_TITLE,
  PORTFOLIO_SPECIALIZATION,
  PORTFOLIO_LOCATION,
} from '../../constants';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2000"
          alt=""
          role="presentation"
          className="w-full h-full object-cover object-center grayscale brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-[#0F1E2E]/85"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#0F1E2E]/60 via-transparent to-[#0F1E2E]/80"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl pt-16 md:pt-20">
        <span className="text-[#C6A75E] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-[8px] md:text-[10px] mb-4 md:mb-5 block animate-in fade-in slide-in-from-top-4 duration-1000">
          {PORTFOLIO_TITLE} · {PORTFOLIO_SPECIALIZATION}
        </span>
        <h1
          id="hero-title"
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F7F5F0] font-bold leading-[1.1] mb-5 md:mb-6 serif animate-in fade-in slide-in-from-bottom-6 duration-1000"
        >
          {PORTFOLIO_NAME}
        </h1>
        <div className="w-16 h-px bg-[#C6A75E] mx-auto mb-6"></div>

        <p className="text-xs md:text-base text-[#F7F5F0]/75 mb-6 md:mb-8 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          Abogada de la Universidad Externado de Colombia y especialista en Derecho Constitucional
          de la Universidad del Rosario, con más de diez años de experiencia en el sector público,
          enfocada en la protección de los derechos humanos y fundamentales, la atención a víctimas
          y la promoción de una atención con enfoque de género y diferencial.
        </p>

        <div className="flex items-center justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <Link
            to="/#perfil"
            className="px-10 py-4 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-2xl flex items-center gap-3 w-fit"
          >
            Conoce mi perfil <ArrowRight size={16} className="shrink-0" />
          </Link>
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-[10px] md:text-xs text-[#F7F5F0]/50 tracking-[0.3em] uppercase font-bold">
          <MapPin size={12} className="text-[#C6A75E]" />
          {PORTFOLIO_LOCATION}
        </p>
      </div>
    </section>
  );
};

export default Hero;
