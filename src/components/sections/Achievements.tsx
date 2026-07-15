import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { achievements } from '@/data/content';
import Badge from '@/components/Badge';

export default function AchievementsSection() {
  return (
    <section className="break-keep wrap-break-word">
      <h3 className="text-2xl font-normal mb-2">수상 및 경험</h3>
      <ul className="space-y-2">
        {achievements.map((item, idx) => (
          <li key={idx}>
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <div className="flex flex-col items-start gap-x-2 sm:flex-row sm:items-center">
                <Badge>{new Date(item.date).getFullYear()}</Badge>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium text-base flex items-center gap-x-2 px-0.5">
                    {item.title}
                    <SquareArrowOutUpRight size={16} />
                  </a>
                ) : (
                  <span className="font-medium text-base">{item.title}</span>
                )}
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="flex gap-1 flex-wrap">
                  {item.tags.map((tag, i) => (
                    <Badge key={i}>{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
