import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return <span className={`inline-flex items-center rounded-[3px] bg-muted px-1.5 py-0.5 text-xs text-muted-foreground ${className}`}>{children}</span>;
}
