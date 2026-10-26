import React from 'react';
import { education } from '@/data/content';
import { formatPeriod } from '@/lib/utils';

export default function EducationSection() {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-medium">학력</h3>
      <ul className="space-y-2">
        {education.map((item, idx) => (
          <li key={idx} className="flex flex-col items-start gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-4">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-medium">{item.school}</span>
              <span className="text-muted-foreground">{item.major}</span>
            </div>
            <span className="text-xs text-muted-foreground tabular-nums">{formatPeriod(item.start, item.end)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
