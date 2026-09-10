import React from 'react';
import { PORTFOLIO_NAME } from '../constants';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] pt-32 pb-24 min-h-screen" id="main-content">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 border-b border-[#0F1E2E]/10 pb-8">
          <span className="text-[#C6A75E] font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Legal</span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F1E2E] serif mb-4">Términos y Condiciones</h1>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">1. Uso del sitio</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              Este sitio web presenta el perfil profesional de {PORTFOLIO_NAME}. El contenido es
              de carácter meramente informativo y no constituye asesoría jurídica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">2. Ausencia de relación abogado-cliente</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              El envío de información a través de este sitio o por correo electrónico no crea una
              relación abogado-cliente. Dicha relación solo se establece mediante un acuerdo
              escrito de prestación de servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">3. Contenido informativo</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              La información contenida en este sitio es presentada con diligencia, pero puede no
              estar actualizada o no ser aplicable a circunstancias particulares. Se recomienda
              consultar a un profesional del derecho respecto de cada caso concreto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">4. Propiedad intelectual</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              El nombre de {PORTFOLIO_NAME} y los contenidos de este sitio son de su titularidad.
              Queda prohibida la reproducción, distribución o uso no autorizado de estos
              contenidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">5. Enlaces externos</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              Este sitio puede contener enlaces a sitios externos (como redes sociales). No se
              asume responsabilidad por el contenido o las políticas de privacidad de dichos
              sitios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">6. Legislación aplicable</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              Estos términos se rigen por las leyes de la República de Colombia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;