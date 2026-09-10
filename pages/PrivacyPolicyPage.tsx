import React from 'react';
import { PORTFOLIO_EMAIL, PORTFOLIO_EMAIL_LINK, PORTFOLIO_NAME } from '../constants';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] pt-32 pb-24 min-h-screen" id="main-content">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 border-b border-[#0F1E2E]/10 pb-8">
          <span className="text-[#C6A75E] font-bold tracking-[0.5em] uppercase text-xs mb-4 block">Privacidad</span>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0F1E2E] serif mb-4">Política de Privacidad</h1>
          <p className="text-slate-500 text-sm italic">Fecha de actualización: septiembre de 2026</p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">1. Compromiso con la privacidad</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              Este sitio web es un portafolio profesional de {PORTFOLIO_NAME}, abogada y
              especialista en Derecho Constitucional. Esta política describe cómo se trata la
              información personal que usted pueda proporcionar a través de este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">2. Información recopilada</h2>
            <p className="text-slate-700 leading-relaxed font-light mb-4">
              Este sitio es informativo y no recopila datos personales de forma automática más
              allá de los datos técnicos básicos que los servidores web registran (por ejemplo,
              dirección IP y navegador) con fines de seguridad y funcionamiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">3. Uso de la información</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              Los correos electrónicos y mensajes que usted envíe a través de los enlaces de
              contacto serán utilizados únicamente para responder a su solicitud. Estos datos no
              se comparten con terceros ni se utilizan con fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">4. Seguridad de los datos</h2>
            <p className="text-slate-700 leading-relaxed font-light">
              Se aplican medidas técnicas y organizativas razonables para proteger la información
              proporcionada a través de este sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0F1E2E] serif mb-6">5. Sus derechos</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              De acuerdo con la legislación aplicable en materia de protección de datos, usted
              puede solicitar acceso, rectificación o supresión de la información personal
              tratada. Para ejercer estos derechos o realizar cualquier consulta sobre esta
              política, contáctese a través del siguiente correo:
            </p>
            <a
              href={PORTFOLIO_EMAIL_LINK}
              className="text-[#0F1E2E] font-medium hover:text-[#C6A75E] transition-colors break-all"
            >
              {PORTFOLIO_EMAIL}
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;