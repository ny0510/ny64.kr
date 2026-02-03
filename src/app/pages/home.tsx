import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutMeSection from '@/components/sections/AboutMe';
import ProjectsSection from '@/components/sections/Projects';
import AchievementsSection from '@/components/sections/Achievements';
import SideNotesSection from '@/components/sections/SideNotes';

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <Header />
      <AboutMeSection />
      <ProjectsSection />
      <AchievementsSection />
      <SideNotesSection />
      <Footer />
    </main>
  );
}
