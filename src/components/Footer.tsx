import React from 'react';
import { footer } from '@/data/content';

export default function Footer() {
  return (
    <footer className="border-t border-border pt-5 text-xs text-muted-foreground">
      <p>{footer.copyright}</p>
    </footer>
  );
}
