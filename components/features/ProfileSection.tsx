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
      className="pt-6 md:pt-8 pb-12 md:pb-14 bg-[#F7F5F0] overflow-hidden relative"
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

            <div className="mt-5 md:mt-6">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="h-px w-10 bg-[#C6A75E]/50"></div>
                <h3 className="text-[11px] md:text-xs font-bold text-[#0F1E2E] serif tracking-[0.2em] uppercase whitespace-nowrap">
                  Campos de conocimiento
                </h3>
                <div className="h-px grow bg-[#C6A75E]/25"></div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 md:gap-3 items-stretch">
                {EXPERIENCE_AREAS.map((area) => {
                  const Icon = ICON_MAP[area.icon] ?? Scale;
                  return (
                    <div
                      key={area.id}
                      className="group flex flex-col items-center justify-center overflow-hidden rounded-xl border border-[#0F1E2E]/10 bg-white p-2.5 md:p-3 text-center shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-[#C6A75E]/60 hover:shadow-[0_16px_32px_-12px_rgba(15,30,46,0.35)]"
                    >
                      <div className="mb-1.5 inline-flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-[#C6A75E]/15 text-[#C6A75E] transition-colors duration-500 group-hover:bg-[#C6A75E] group-hover:text-[#0F1E2E]">
                        <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                      </div>
                      <h4 className="text-[9px] md:text-[10px] font-bold text-[#0F1E2E] serif leading-snug uppercase tracking-tight">
                        {area.title}
                      </h4>
                    </div>
                  );
                })}
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
                className="text-2xl md:text-3xl font-bold text-[#0F1E2E] mb-5 md:mb-6 serif leading-tight"
              >
                Trayectoria orientada a la defensa de los derechos humanos y la protección de las
                víctimas con enfoque de género.
              </h2>
              <div className="w-16 h-1 bg-[#C6A75E] mb-6"></div>
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
      </div>
    </section>
  );
};

export default ProfileSection;