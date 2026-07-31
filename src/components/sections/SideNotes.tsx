import React from 'react';
import { sideNotes } from '@/data/content';

export default function SideNotesSection() {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-medium">여담</h3>
      <ul className="list-disc space-y-1 pl-5 text-base leading-6 text-muted-foreground">
        {sideNotes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
