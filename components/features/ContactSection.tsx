import React from 'react';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_LOCATION,
  PORTFOLIO_EMAIL,
  PORTFOLIO_EMAIL_LINK,
  PORTFOLIO_WHATSAPP_URL,
} from '../../constants';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const CONTACT_ITEMS = [
  {
    id: 'ubicacion',
    label: 'Ubicación',
    value: PORTFOLIO_LOCATION,
    icon: MapPin,
    href: null as string | null,
  },
  {
    id: 'correo',
    label: 'Correo',
    value: PORTFOLIO_EMAIL,
    icon: Mail,
    href: PORTFOLIO_EMAIL_LINK,
  },
];

const ContactSection: React.FC = () => {
  return (
    <section
      id="contacto"
      className="pt-12 md:pt-16 pb-12 md:pb-16 bg-[#0F1E2E] relative overflow-hidden border-t-4 border-t-[#C6A75E]/30"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,167,94,0.08),transparent_45%)] pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
              Contacto
            </span>
            <h2
              id="contact-heading"
              className="text-2xl md:text-3xl font-bold text-[#F7F5F0] mb-5 serif leading-tight"
            >
              Canal directo de comunicación profesional.
            </h2>
            <p className="text-[#F7F5F0]/60 max-w-lg text-sm md:text-base font-light leading-relaxed mb-8">
              Contáctame a través de WhatsApp o por correo electrónico para dialogar sobre una
              posible colaboración o relación laboral.
            </p>

            <a
              href={PORTFOLIO_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-3.5 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-2xl group"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              WhatsApp
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <ul className="space-y-3">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;
              const inner = (
                <>
                  <div className="shrink-0 p-4 rounded-sm border border-white/10 bg-white/5 text-[#C6A75E] transition-colors duration-300 group-hover:bg-[#C6A75E] group-hover:text-[#0F1E2E] group-hover:border-[#C6A75E]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[#F7F5F0]/40 mb-1">
                      {item.label}
                    </span>
                    <span className="block text-base md:text-lg font-medium text-[#F7F5F0] break-words">
                      {item.value}
                    </span>
                  </div>
                </>
              );
              return (
                <li key={item.id}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-center gap-5 p-4 md:p-5 border border-white/10 rounded-sm bg-white/5 hover:border-[#C6A75E]/50 transition-all duration-300"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-5 p-4 md:p-5 border border-white/10 rounded-sm bg-white/5">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
