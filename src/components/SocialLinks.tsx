import React from 'react';
import { SiGithub, SiPaypal } from '@icons-pack/react-simple-icons';
import { Rss } from 'lucide-react';
import { socialLinks } from '@/data/content';
import type { SocialLink } from '@/data/types';

const ICONS: Record<SocialLink['iconKey'], React.ComponentType<{ size?: number }>> = {
  github: SiGithub,
  paypal: SiPaypal,
  blog: Rss,
};

export default function SocialLinks() {
  return (
    <ul className="flex flex-row gap-x-2 text-sm *:*:px-0.5 *:*:items-center *:*:gap-x-1">
      {socialLinks.map((link, i) => {
        const Icon = ICONS[link.iconKey];
        return (
          <li key={i}>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon size={16} />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
