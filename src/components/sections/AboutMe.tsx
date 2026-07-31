import React from 'react';
import { aboutMe } from '@/data/content';

const HIGHLIGHT_PATTERN = /(\*\*.+?\*\*)/g;

function renderParagraph(text: string) {
  const segments = text.split(HIGHLIGHT_PATTERN);
  return segments.map((segment, idx) => {
    if (segment.startsWith('**') && segment.endsWith('**')) {
      return (
        <span key={idx} className="highlight">
          {segment.slice(2, -2)}
        </span>
      );
    }
    return <React.Fragment key={idx}>{segment}</React.Fragment>;
  });
}

export default function AboutMeSection() {
  return (
    <section className="space-y-1 text-base text-muted-foreground">
      {aboutMe.map((paragraph, idx) => (
        <p key={idx}>{renderParagraph(paragraph)}</p>
      ))}
    </section>
  );
}
