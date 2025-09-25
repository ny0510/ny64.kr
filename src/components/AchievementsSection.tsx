import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

const achievements = [
  { date: '2025-09-21', title: "Daangn Builder's Camp 2025 해커톤 우승 (1위)", tags: ['Award'] },
  { date: '2024-11-01', title: '제 20회 국제특허정보박람회 부스 운영', tags: ['Conference'], url: 'https://patinex.org' },
  { date: '2024-10-29', title: '한국코드페어 SW 공모전 동상 수상', tags: ['Award'], url: 'https://www.kcf.or.kr/notice/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=123951920' },
  { date: '2024-10-04', title: '리눅스마스터 2급 자격증 취득', tags: ['Certification'] },
  { date: '2024-09-20', title: 'Gencon 2024 AI Conference for DEV 참여', tags: ['Conference'], url: 'https://gencon2024.fastcampus.co.kr' },
  { date: '2024-08-24', title: '제11회 대한민국 SW융합 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://www.swhackathon.kr' },
  { date: '2024-08-09', title: 'JUNCTION ASIA 2024 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://eu.junctionplatform.com/projects/junction-asia-2024' },
  { date: '2023-11-09', title: '콘텐츠유니버스 코리아 테크 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://contentsuniverse.com/kr/2023contest' },
  { date: '2023-09-09', title: 'UbuCon Korea 2023 참여', tags: ['Conference'], url: 'https://2023.ubuntu-kr.org/ko' },
  { date: '2023-03-02', title: '선린인터넷고등학교 118기 소프트웨어과 합격', tags: ['Education'] },
];

export default function AchievementsSection() {
  return (
    <section className="break-keep break-words">
      <h3 className="text-2xl font-normal mb-2">수상 및 경험</h3>
      <ul className="space-y-4">
        {achievements.map((item, idx) => (
          <li key={idx}>
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <div className="flex flex-col items-start gap-x-2 sm:flex-row sm:items-center">
                <span className="text-sm text-muted-foreground tabular-nums">[{new Date(item.date).getFullYear()}]</span>
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
                <span>
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-muted px-2 py-0.5 rounded text-xs text-muted-foreground font-medium mr-1">
                      {tag}
                    </span>
                  ))}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
