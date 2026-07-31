import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { header } from '@/data/content';

export default function Header() {
  return (
    <header className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-[32px] font-bold tracking-tight">
          {header.name} <span className="text-2xl font-normal text-muted-foreground tracking-normal">@{header.username}</span>
        </h1>
        {/* <p className="text-base text-muted-foreground">{header.tagline}</p> */}
      </div>
      <SocialLinks />
    </header>
  );
}
