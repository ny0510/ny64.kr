import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { header } from '@/data/content';

export default function Header() {
  return (
    <header className="space-y-2">
      <div>
        <a href={`mailto:${header.email}`}>
          <h1 className="text-4xl font-bold font-ridibatang">{header.email}</h1>
        </a>
        <h2 className="text-base text-muted-foreground">{header.tagline}</h2>
      </div>
      <SocialLinks />
    </header>
  );
}