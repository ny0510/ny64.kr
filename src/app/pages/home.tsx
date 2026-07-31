import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutMeSection from '@/components/sections/AboutMe';
import EducationSection from '@/components/sections/Education';
import ProjectsSection from '@/components/sections/Projects';
import AchievementsSection from '@/components/sections/Achievements';
import SideNotesSection from '@/components/sections/SideNotes';

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl space-y-7 px-4 py-8 text-pretty sm:space-y-8 sm:px-6 sm:py-14">
      <Header />
      <AboutMeSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <SideNotesSection />
      <Footer />
    </main>
  );
}
