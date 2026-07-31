import React from 'react';
import { achievements } from '@/data/content';
import Badge from '@/components/Badge';
import { formatPeriod } from '@/lib/utils';

export default function AchievementsSection() {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-medium">활동</h3>
      <div className="space-y-5">
        {achievements.map((item, idx) => (
          <article key={idx} className="space-y-1.5">
            <div className="flex flex-col items-start gap-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-1">
              <div className="flex flex-col items-start gap-y-1 sm:flex-row sm:items-center sm:gap-x-1.5">
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">
                    {item.title}
                  </a>
                ) : (
                  <span className="font-medium">{item.title}</span>
                )}
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, i) => (
                    <Badge key={i}>{tag}</Badge>
                  ))}
                </div>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">{formatPeriod(item.start, item.end)}</span>
            </div>
            {item.detail && <p className="text-base leading-6 text-muted-foreground">{item.detail}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
