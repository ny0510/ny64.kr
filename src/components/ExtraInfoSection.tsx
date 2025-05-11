import React from 'react';

interface ExtraInfo {
  label: string;
  items: Array<string | { label: string; items: string[] | ExtraInfo[] }>;
}

const extraInfo: ExtraInfo[] = [
  {
    label: '하드웨어 장비',
    items: [
      { label: '홈랩 서버', items: ['CPU: 5700X', 'RAM: 128GB', 'DISKS: 512GB NVMe SSD, 3TB SATA SSD, 11TB HDD'] },
      { label: '메인 랩탑', items: ['Apple MacBook Air M1'] },
    ],
  },
  {
    label: '소프트웨어',
    items: ['IDE: VSCode, Xcode', 'Shell: Zsh, Fish'],
  },
];

function renderItems(items: Array<string | { label: string; items: string[] | ExtraInfo[] }>) {
  return (
    <ul className="list-[circle] ml-6">
      {items.map((item, idx) =>
        typeof item === 'string' ? (
          <li key={idx}>{item}</li>
        ) : (
          <li key={idx}>
            <span className="font-medium">{item.label}</span>
            {item.items && item.items.length > 0 && renderItems(Array.isArray(item.items) && typeof item.items[0] === 'string' ? (item.items as string[]) : (item.items as Array<string | { label: string; items: string[] | ExtraInfo[] }>))}
          </li>
        )
      )}
    </ul>
  );
}

export default function ExtraInfoSection() {
  return (
    <section className="break-keep break-words">
      <h3 className="text-2xl font-normal mb-2">추가 정보들</h3>
      <ul className="list-disc list-inside text-base space-y-2">
        {extraInfo.map((section, idx) => (
          <li key={idx}>
            <span className="font-medium">{section.label}</span>
            {section.items && renderItems(section.items)}
          </li>
        ))}
      </ul>
    </section>
  );
}
