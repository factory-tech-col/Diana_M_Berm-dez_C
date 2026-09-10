import React from 'react';
import { Briefcase } from 'lucide-react';
import { PROFESSIONAL_EXPERIENCE } from '../../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experiencia"
      className="py-6 pt-6 pb-10 md:py-8 md:pb-14 bg-[#F7F5F0] relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4 md:mb-5">
          <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
            Trayectoria Profesional
          </span>
          <h2
            id="experience-heading"
            className="text-xl md:text-2xl font-bold text-[#0F1E2E] mb-2 serif"
          >
            Experiencia Laboral
          </h2>
          <div className="w-16 h-1 bg-[#C6A75E] mx-auto"></div>
        </div>

        <div className="relative">
          <div
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-[#C6A75E]/30 -translate-x-1/2"
            aria-hidden="true"
          ></div>

          <ol className="space-y-4 md:space-y-5">
            {PROFESSIONAL_EXPERIENCE.map((exp, idx) => (
              <li key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div
                  className="absolute left-[15px] md:left-1/2 top-1 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0F1E2E] border-2 border-[#C6A75E] shadow-lg z-10"
                  aria-hidden="true"
                >
                  <Briefcase size={12} className="text-[#C6A75E]" />
                </div>

                <div
                  className={`pl-11 md:pl-0 ${
                    idx % 2 === 0 ? 'md:col-start-1 md:text-right' : 'md:col-start-2 md:row-start-1'
                  }`}
                >
                  <span className="inline-block px-2 py-0.5 bg-[#C6A75E]/10 text-[#0F1E2E] text-[7px] md:text-[8px] font-bold uppercase tracking-[0.18em] mb-1.5">
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 ml-1.5 bg-[#0F1E2E] text-[#C6A75E] text-[7px] md:text-[8px] font-bold uppercase tracking-[0.18em] mb-1.5">
                      Actualmente
                    </span>
                  )}
                  <h3 className="text-base md:text-lg font-bold text-[#0F1E2E] serif leading-tight mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-[#C6A75E] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] mb-2">
                    {exp.organization}
                  </p>
                </div>

                <div
                  className={`pl-11 md:pl-0 ${idx % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}
                >
                  <p className="text-[13px] md:text-sm text-[#4A5568] font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
