import React from 'react';
import { GraduationCap, BookOpenCheck, CalendarDays, MapPin } from 'lucide-react';
import { EDUCATION, COMPLEMENTARY_STUDIES } from '../../constants';

const EducationSection: React.FC = () => {
  return (
    <section
      id="formacion"
      className="pt-6 pb-14 md:pt-8 md:pb-20 bg-[#0F1E2E] relative overflow-hidden"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-5 md:mb-6">
          <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-2 block">
            Formación Académica
          </span>
          <h2
            id="education-heading"
            className="text-2xl md:text-3xl font-bold text-[#F7F5F0] mb-2 serif"
          >
            Educación
          </h2>
          <div className="w-16 h-1 bg-[#C6A75E] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5">
          {EDUCATION.map((edu, idx) => (
            <div
              key={edu.id}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm transition-all duration-500 hover:border-[#C6A75E]/50 hover:bg-white/10"
            >
              <div className="absolute top-0 right-0 text-4xl font-bold text-white/5 serif select-none">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#C6A75E]/30 text-[#C6A75E]">
                <GraduationCap size={17} />
              </div>
              <h3 className="text-base md:text-lg font-bold text-[#F7F5F0] serif leading-tight mb-1">
                {edu.degree}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <BookOpenCheck size={13} className="text-[#C6A75E] shrink-0" />
                <p className="text-xs md:text-[13px] font-medium text-[#F7F5F0]/80">
                  {edu.institution}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#C6A75E] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.18em]">
                <CalendarDays size={11} />
                {edu.date}
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px bg-[#C6A75E]/40 grow"></div>
            <h3 className="text-[13px] md:text-sm font-bold text-[#F7F5F0] serif tracking-[0.2em] uppercase whitespace-nowrap">
              Estudios Complementarios
            </h3>
            <div className="h-px bg-[#C6A75E]/40 grow"></div>
          </div>

          <ol className="max-w-4xl mx-auto space-y-2">
            {COMPLEMENTARY_STUDIES.map((study, idx) => (
              <li
                key={study.id}
                className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-1.5 sm:gap-5 p-3.5 md:p-4 border border-white/10 rounded-xl bg-white/5 transition-colors duration-500 hover:border-[#C6A75E]/40"
              >
                <div className="sm:w-12 text-left sm:text-right">
                  <span className="text-[#C6A75E] font-bold serif text-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h4 className="text-[13px] md:text-sm font-bold text-[#F7F5F0] leading-snug mb-0.5">
                    {study.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 text-[10px] md:text-[11px] text-[#F7F5F0]/60 font-light">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={10} className="text-[#C6A75E]" />
                      {study.organizer}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={10} className="text-[#C6A75E]" />
                      {study.date}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
