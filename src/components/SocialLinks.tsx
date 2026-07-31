import React from 'react';
import { SiGithub, SiPaypal } from '@icons-pack/react-simple-icons';
import { Mail, Rss } from 'lucide-react';
import { socialLinks } from '@/data/content';
import type { SocialLink } from '@/data/types';

const ICONS: Record<SocialLink['iconKey'], React.ComponentType<{ size?: number }>> = {
  github: SiGithub,
  paypal: SiPaypal,
  blog: Rss,
  email: Mail,
};

export default function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-base">
      {socialLinks.map((link, i) => {
        const Icon = ICONS[link.iconKey];
        return (
          <li key={i}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-1">
              <Icon size={16} />
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
