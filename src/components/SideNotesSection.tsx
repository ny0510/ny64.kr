import React from 'react';

const sideNotes = ['작은 홈서버를 운영하고 있습니다. (5700X, 128GB, 512GB NVMe SSD, 3TB SATA SSD, 11TB HDD)', '개인적으로 JetBrains IDE를 선호하지 않습니다. 램먹는 하마에요. 안드로이드 개발 또한 VSCode를 사용하고 있습니다.', 'AI/ML 관련 프로젝트가 아니라면 Python을 사용하지 않습니다. 공백만으로 블록을 구분하는 것을 좋아하지 않습니다.'];

export default function SideNotesSection() {
  return (
    <section className="break-keep break-words">
      <h3 className="text-2xl font-normal mb-2">여담</h3>
      <ul className="list-disc list-inside text-base space-y-2">
        {sideNotes.map((note, idx) => (
          <li key={idx}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
