export interface Achievement {
  start: string;
  end?: string;
  title: string;
  detail?: string;
  tags: string[];
  url?: string;
}

export interface Project {
  name: string;
  url?: string;
  desc: string;
  detail: string;
  tags: string[];
}

export interface HeaderMeta {
  name: string;
  username: string;
  tagline: string;
}

export interface FooterMeta {
  copyright: string;
}

export interface SocialLink {
  href: string;
  iconKey: 'github' | 'paypal' | 'blog' | 'email';
  label: string;
}

export interface Education {
  school: string;
  major: string;
  start: string;
  end?: string;
}
