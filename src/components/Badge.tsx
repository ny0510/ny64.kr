import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center bg-muted px-2 py-0.5 rounded text-xs text-muted-foreground font-medium ${className}`}>
      {children}
    </span>
  );
}