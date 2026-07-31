import React from 'react';
import { achievements } from '@/data/content';
import Badge from '@/components/Badge';

export default function AchievementsSection() {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-medium">활동</h3>
      <ul className="space-y-2">
        {achievements.map((item, idx) => (
          <li key={idx} className="grid grid-cols-[auto_1fr] items-start gap-x-2 gap-y-1 text-base sm:flex sm:flex-wrap sm:items-center">
            <span className="tabular-nums text-muted-foreground">{item.date.replace('-', '.').slice(0, 7)}</span>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="min-w-0 underline decoration-border underline-offset-4 hover:decoration-foreground">
                {item.title}
              </a>
            ) : (
              <span>{item.title}</span>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="col-start-2 flex flex-wrap gap-1 sm:ml-auto">
                {item.tags.map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
