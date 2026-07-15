import React from 'react';
import { footer } from '@/data/content';

export default function Footer() {
  return (
    <footer className="text-sm text-muted-foreground">
      <p>{footer.copyright}</p>
    </footer>
  );
}
