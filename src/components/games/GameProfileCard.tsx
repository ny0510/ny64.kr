import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';

type GameProfileCardProps = {
  readonly title: string;
  readonly name: string;
  readonly href: string;
  readonly statistic?: ReactNode;
  readonly children?: ReactNode;
};

export function GameProfileCard({ title, name, href, statistic, children }: GameProfileCardProps) {
  return (
    <article className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-2 text-base">
      <a href={href} target="_blank" rel="noopener noreferrer" className="min-w-0 items-center gap-1 sm:mr-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
        <h4 className="min-w-0 truncate font-medium leading-6">
          {title} <span className="text-muted-foreground">· {name}</span>
        </h4>
        <ArrowUpRight size={14} className="shrink-0 text-muted-foreground" aria-hidden="true" />
      </a>
      {(statistic != null || children != null) && (
        <div className="flex min-w-0 basis-full items-center justify-between gap-3 sm:basis-auto sm:justify-end">
          {statistic}
          {children}
        </div>
      )}
    </article>
  );
}
