import React from 'react';
import { sideNotes } from '@/data/content';

export default function SideNotesSection() {
  return (
    <section className="break-keep wrap-break-word">
      <h3 className="text-2xl font-normal mb-2">여담</h3>
      <ul className="list-inside text-base space-y-2">
        {sideNotes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
