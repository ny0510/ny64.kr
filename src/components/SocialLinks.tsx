import React from 'react';
import { SiGithub, SiPaypal } from '@icons-pack/react-simple-icons';
import { Rss } from 'lucide-react';

const links = [
  {
    href: 'https://github.com/ny0510',
    icon: <SiGithub size={16} />,
    label: 'GitHub',
  },
  {
    href: 'https://paypal.me/ny64',
    icon: <SiPaypal size={16} />,
    label: 'Buy me a coffee',
  },
  {
    href: 'https://blog.ny64.kr',
    icon: <Rss size={16} />,
    label: 'Blog',
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex flex-row gap-x-2 text-sm *:*:px-0.5 *:*:items-center *:*:gap-x-1">
      {links.map((link, i) => (
        <li key={i}>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {link.icon}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
