import React from 'react';
import ProfileHeader from '@/components/ProfileHeader';
import AboutMeSection from '@/components/AboutMeSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';

export default function Home() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      <ProfileHeader />
      <AboutMeSection />
      <ProjectsSection />
      <AchievementsSection />
    </main>
  );
}
