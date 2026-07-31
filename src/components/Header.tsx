import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import { header } from '@/data/content';

export default function Header() {
  return (
    <header className="space-y-3">
      <div className="space-y-1">
        <h1 className="text-[28px] font-bold tracking-tight sm:text-[32px]">
          {header.name} <span className="text-xl font-normal tracking-normal text-muted-foreground sm:text-2xl">@{header.username}</span>
        </h1>
        {/* <p className="text-base text-muted-foreground">{header.tagline}</p> */}
      </div>
      <SocialLinks />
    </header>
  );
}
