import React from 'react';
import {
  GraduationCap,
  Users,
  Landmark,
  HeartHandshake,
  ShieldCheck,
  Scale,
  Handshake,
  Route,
  type LucideIcon,
} from 'lucide-react';
import {
  PORTFOLIO_NAME,
  PORTFOLIO_TITLE,
  PORTFOLIO_SPECIALIZATION,
  PROFILE_SUMMARY,
  EDUCATION,
  EXPERIENCE_AREAS,
} from '../../constants';

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Landmark,
  HeartHandshake,
  ShieldCheck,
  Scale,
  Handshake,
  Route,
};

const ProfileSection: React.FC = () => {
  return (
    <section
      id="perfil"
      className="pt-6 md:pt-8 pb-10 md:pb-12 bg-[#F7F5F0] overflow-hidden relative"
      aria-labelledby="profile-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-2 relative order-2 lg:order-1 lg:sticky lg:top-16">
            <div className="relative p-6 md:p-8 bg-[#0F1E2E] text-[#F7F5F0] border-b-4 border-b-[#C6A75E] shadow-[0_35px_60px_-15px_rgba(15,30,46,0.35)]">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C6A75E]/10 pointer-events-none"></div>
              <div className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C6A75E]/40 mb-5">
                <span className="text-[#C6A75E] font-bold serif text-lg tracking-wide">DM</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold serif leading-tight mb-2">
                {PORTFOLIO_NAME}
              </h3>
              <p className="text-[#C6A75E] text-[9px] md:text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                {PORTFOLIO_TITLE} · {PORTFOLIO_SPECIALIZATION}
              </p>
              <div className="space-y-3 pt-5 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <GraduationCap size={14} className="text-[#C6A75E] shrink-0 mt-1" />
                  <div className="space-y-2">
                    {EDUCATION.map((edu) => (
                      <div key={edu.id}>
                        <p className="text-[13px] font-bold leading-snug">{edu.degree}</p>
                        <p className="text-[11px] text-[#F7F5F0]/60 leading-relaxed">
                          {edu.institution} · {edu.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-5 order-1 lg:order-2">
            <div>
              <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-3 block">
                Perfil Profesional
              </span>
              <h2
                id="profile-heading"
                className="text-2xl md:text-3xl font-bold text-[#0F1E2E] mb-4 md:mb-5 serif leading-tight"
              >
                Trayectoria orientada a la defensa de los derechos humanos y la protección de las
                víctimas con enfoque de género.
              </h2>
              <div className="w-16 h-1 bg-[#C6A75E] mb-5"></div>
            </div>

            <div className="space-y-3 text-[#2D3748] leading-relaxed">
              {PROFILE_SUMMARY.map((segment) => (
                <p key={segment.id} className="text-sm md:text-base font-light leading-relaxed">
                  {segment.text}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-4 md:pt-5 border-t border-[#C6A75E]/25">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-[#C6A75E]/30 grow"></div>
            <h3 className="text-xs md:text-sm font-bold text-[#0F1E2E] serif tracking-[0.2em] uppercase whitespace-nowrap">
              Campos de conocimiento
            </h3>
            <div className="h-px bg-[#C6A75E]/30 grow"></div>
          </div>

          <div className="flex flex-row gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {EXPERIENCE_AREAS.map((area) => {
              const Icon = ICON_MAP[area.icon] ?? Scale;
              return (
                <article
                  key={area.id}
                  className="group relative flex-1 shrink-0 basis-[200px] min-w-[200px] snap-start rounded-xl border border-[#0F1E2E]/10 bg-white p-5 text-center shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C6A75E]/60 hover:shadow-[0_16px_32px_-12px_rgba(15,30,46,0.35)] overflow-hidden"
                >
                  <div className="mx-auto mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A75E]/15 text-[#C6A75E] transition-colors duration-500 group-hover:bg-[#C6A75E] group-hover:text-[#0F1E2E]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[11px] md:text-xs font-bold text-[#0F1E2E] serif leading-snug uppercase tracking-wide">
                    {area.title}
                  </h4>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C6A75E]/0 transition-colors duration-500 group-hover:bg-[#C6A75E]/60"></div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;