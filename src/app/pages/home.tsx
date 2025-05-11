import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutMeSection from '@/components/AboutMeSection';
import ExtraInfoSection from '@/components/ExtraInfoSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import SideNotesSection from '@/components/SideNotesSection';

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <Header />
      <AboutMeSection />
      <ProjectsSection />
      <AchievementsSection />
      {/* <ExtraInfoSection /> */}
      <SideNotesSection />
      <Footer />
    </main>
  );
}
