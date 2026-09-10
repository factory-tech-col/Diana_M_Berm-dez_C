import {
  NavLink,
  ProfessionalExperience,
  Education,
  ComplementaryStudy,
  ExpertiseArea,
} from './types';

export const PORTFOLIO_NAME = 'Diana Marcela Bermúdez Cuevas';
export const PORTFOLIO_TITLE = 'Abogada';
export const PORTFOLIO_SPECIALIZATION = 'Especialista en Derecho Constitucional';
export const PORTFOLIO_LOCATION = 'Bogotá, Colombia';
export const PORTFOLIO_EMAIL = 'dianabermudezc@gmail.com';
export const PORTFOLIO_EMAIL_LINK = 'mailto:dianabermudezc@gmail.com';
export const PORTFOLIO_WHATSAPP_MESSAGE =
  'Hola, vi tu portafolio web y me gustaría charlar sobre una posible colaboración o relación laboral.';
export const PORTFOLIO_WHATSAPP_URL = `https://wa.me/573133030681?text=${encodeURIComponent(PORTFOLIO_WHATSAPP_MESSAGE)}`;

export const NAV_LINKS: NavLink[] = [
  { name: 'Inicio', href: '/#inicio' },
  { name: 'Experiencia', href: '/#experiencia' },
  { name: 'Formación', href: '/#formacion' },
];

export const PROFILE_SUMMARY: { id: string; text: string }[] = [
  {
    id: 'profile-1',
    text: 'Abogada de la Universidad Externado de Colombia y especialista en Derecho Constitucional de la Universidad del Rosario, con más de diez años de trayectoria en el sector público. Especializada en derecho de familia y administrativo, protección de derechos humanos y fundamentales de víctimas en el contexto familiar, mecanismos alternativos de solución de conflictos y rutas de atención con enfoque diferencial. Con amplia experiencia en la defensa de las mujeres de las Fuerzas Militares en el Ministerio de Defensa, destacada por su excelente capacidad de oratoria, redacción jurídica argumentativa y liderazgo en la prevención de riesgos sobre derechos fundamentales.',
  },
];

export const EXPERIENCE_AREAS: ExpertiseArea[] = [
  {
    id: 'family',
    title: 'Derecho de familia',
    description:
      'Atención integral e interdisciplinaria a niños, niñas, adolescentes y miembros del grupo familiar que acceden a la justicia de familia en las Comisarías de Familia.',
    icon: 'Users',
  },
  {
    id: 'administrativo',
    title: 'Derecho administrativo',
    description:
      'Análisis normativo, elaboración de conceptos jurídicos y revisión de trámites legales en el sector público.',
    icon: 'Landmark',
  },
  {
    id: 'humanos',
    title: 'Derechos humanos',
    description:
      'Protección de los derechos humanos y fundamentales de las víctimas en el contexto familiar.',
    icon: 'HeartHandshake',
  },
  {
    id: 'fundamentales',
    title: 'Derechos fundamentales',
    description:
      'Detección y prevención de amenazas en materia de derechos fundamentales – humanos –.',
    icon: 'ShieldCheck',
  },
  {
    id: 'conflictos',
    title: 'Mecanismos alternativos de solución de conflictos',
    description:
      'Aplicación de mecanismos alternativos de solución de conflictos, especialmente la conciliación.',
    icon: 'Scale',
  },
  {
    id: 'conciliacion',
    title: 'Conciliación',
    description:
      'Mecanismo alternativo de solución de conflictos aplicado en el contexto de la justicia familiar.',
    icon: 'Handshake',
  },
  {
    id: 'rutas',
    title: 'Rutas de atención con enfoque diferencial',
    description:
      'Implementación de rutas de atención con enfoque diferencial para la protección de víctimas.',
    icon: 'Route',
  },
];

export const PROFESSIONAL_EXPERIENCE: ProfessionalExperience[] = [
  {
    id: 'ministerio',
    role: 'Asesora Jurídica',
    organization: 'Ministerio de Defensa Nacional',
    period: 'Agosto 2025',
    current: true,
    description:
      'Asesorar jurídicamente a la Oficina Asesora Legal del Comando General, mediante el análisis normativo, elaboración de conceptos jurídicos, revisión y seguimiento de trámites legales, conforme a los procesos institucionales, y análisis de pronunciamientos de impacto para las Fuerzas Militares, incluyendo apoyo jurídico en la implementación de la Estrategia de Género.',
  },
  {
    id: 'seguridad',
    role: 'Líder Redes Distritales',
    organization: 'Secretaría de Seguridad, Convivencia y Justicia',
    period: 'Agosto 2023 — Enero 2025',
    description:
      'Articular de Redes de Cuidado con Entidades Distritales y Nacionales, con el objetivo de aumentar la seguridad en los principales gremios y grupos ciudadanos de la ciudad como Taxismo, Bares, Hoteles, Zonas de parqueo Pago entre otros.',
  },
  {
    id: 'mujer',
    role: 'Abogada de orientación y asesoría a mujeres víctimas de violencia dentro de la Estrategia URI de la FGN',
    organization: 'Secretaría Distrital de la Mujer',
    period: 'Marzo 2023 — Agosto 2023',
    description:
      'Brindar atención a mujeres víctimas de violencias en los niveles de orientación y asesoría, en el marco de la implementación de la estrategia de semi presencialidad en escenarios de URI de la Fiscalía General de la Nación.',
  },
  {
    id: 'integracion',
    role: 'Profesional – Abogada',
    organization: 'Secretaría Distrital de Integración Social, Bogotá',
    period: 'Febrero 2013 — Enero 2023',
    description:
      'Atender integral e interdisciplinaria a niños, niñas, adolescentes y miembros del grupo familiar que accedan a la justicia familia en las Comisarías de Familia.',
  },
];

export const EDUCATION: Education[] = [
  {
    id: 'abogada',
    degree: 'Abogada',
    institution: 'Universidad Externado de Colombia',
    date: 'Agosto 2011',
  },
  {
    id: 'especialista',
    degree: 'Especialista en Derecho Constitucional',
    institution: 'Universidad del Rosario',
    date: 'Abril 2016',
  },
];

export const COMPLEMENTARY_STUDIES: ComplementaryStudy[] = [
  {
    id: 'foro',
    name: 'Foro Balance del Código General del Proceso',
    organizer: 'Instituto Colombiano de Derecho Procesal',
    date: '12 de julio de 2018',
  },
  {
    id: 'jornadas',
    name: 'Jornadas Sobre el Nuevo Código General del Proceso',
    organizer: 'Universidad Nacional de Colombia',
    date: '26 de agosto, 8, 9 y 10 de octubre de 2013',
  },
  {
    id: 'congreso',
    name: 'XXXII Congreso Colombiano de Derecho Procesal',
    organizer: 'Bogotá D.C.',
    date: '7, 8 y 9 de septiembre de 2011',
  },
];