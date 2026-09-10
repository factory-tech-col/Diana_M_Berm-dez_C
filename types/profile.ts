export interface ProfessionalExperience {
  id: string;
  role: string;
  organization: string;
  period: string;
  current?: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  date: string;
}

export interface ComplementaryStudy {
  id: string;
  name: string;
  organizer: string;
  date: string;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}