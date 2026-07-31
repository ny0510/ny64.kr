import React from 'react';
import { education } from '@/data/content';

function formatPeriod(start: string, end?: string): string {
  const startFormatted = start.replace('-', '.');
  const endFormatted = end ? end.replace('-', '.') : '현재';
  return `${startFormatted} – ${endFormatted}`;
}

export default function EducationSection() {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-medium">학력</h3>
      <ul className="space-y-2">
        {education.map((item, idx) => (
          <li key={idx} className="flex flex-wrap items-baseline justify-between gap-x-4 text-base">
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
