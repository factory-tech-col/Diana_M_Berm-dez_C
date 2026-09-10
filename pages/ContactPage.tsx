import React from 'react';
import ContactSection from '../components/features/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div id="main-content">
      <section className="relative min-h-[45vh] w-full overflow-hidden flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000"
            alt=""
            role="presentation"
            className="w-full h-full object-cover object-center grayscale brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-[#0F1E2E]/85"></div>
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="text-[#C6A75E] font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-4 block">
            Contacto
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#F7F5F0] mb-6 serif leading-[1.1]">
            Canal directo de comunicación profesional.
          </h1>
          <p className="max-w-xl text-sm md:text-base text-[#F7F5F0]/70 font-light leading-relaxed mx-auto">
            Diana Marcela Bermúdez Cuevas, Abogada y Especialista en Derecho Constitucional,
            con sede en Bogotá, Colombia.
          </p>
        </div>
      </section>
      <ContactSection />
    </div>
  );
};

export default ContactPage;