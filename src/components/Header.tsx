import React from 'react';
import SocialLinks from '@/components/SocialLinks';

export default function Header() {
  return (
    <header className="space-y-2">
      <div>
        <a href="mailto:me@ny64.kr">
          <h1 className="text-4xl font-bold font-ridibatang">me@ny64.kr</h1>
        </a>
        <h2 className="text-base text-muted-foreground">Student Developer based in Incheon, Korea</h2>
      </div>
      <SocialLinks />
    </header>
  );
}
