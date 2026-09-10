import React from 'react';
import Hero from '../components/features/Hero';
import ProfileSection from '../components/features/ProfileSection';
import ExperienceTimeline from '../components/features/ExperienceTimeline';
import EducationSection from '../components/features/EducationSection';
import ContactSection from '../components/features/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div id="main-content">
      <Hero />
      <ProfileSection />
      <ExperienceTimeline />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;