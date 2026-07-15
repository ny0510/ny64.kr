import type { Achievement, Education, FooterMeta, HeaderMeta, Project, SocialLink } from './types';

export const aboutMe: string[] = [
  '안녕하세요, **저는 늘 배우고 도전하며 성장하는 김가온입니다.**',
  '항상 **호기심을 바탕으로 새로운 기술을 배우는 것**을 즐깁니다. 또한 최근에는 **정보보안 분야에** 관심을 가지고 공부하고 있습니다.',
];

export const achievements: Achievement[] = [
  { date: '2026-06-08', title: '화이트햇스쿨 4기 합격', tags: ['Education'], url: 'https://whsedu.kr' },
  {
    date: '2025-09-21',
    title: "제 1회 Daangn Builder's Camp 해커톤 (1위)",
    tags: ['Award'],
    url: 'https://about.daangn.com/blog/archive/%EB%8B%B9%EA%B7%BC-%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4-%EC%B1%84%EC%9A%A9/',
  },
  { date: '2025-09-21', title: "제 1회 Daangn Builder's Camp 수료", tags: ['Education'] },
  { date: '2024-11-01', title: '제 20회 국제특허정보박람회 (PATINEX) 부스 운영', tags: ['Conference'], url: 'https://patinex.org' },
  { date: '2024-10-29', title: '한국코드페어 SW 공모전 동상 (3위)', tags: ['Award'], url: 'https://www.kcf.or.kr/notice/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=123951920' },
  { date: '2024-10-04', title: '리눅스마스터 2급 취득', tags: ['Certification'] },
  // { date: '2024-09-20', title: 'Gencon 2024 AI Conference for DEV 참여', tags: ['Conference'], url: 'https://gencon2024.fastcampus.co.kr' },
  { date: '2024-08-24', title: '제11회 대한민국 SW융합 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://www.swhackathon.kr' },
  { date: '2024-08-09', title: 'JUNCTION ASIA 2024 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://eu.junctionplatform.com/projects/junction-asia-2024' },
  { date: '2023-11-09', title: '콘텐츠유니버스 코리아 테크 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://contentsuniverse.com/kr/2023contest' },
  // { date: '2023-09-09', title: 'UbuCon Korea 2023 참여', tags: ['Conference'], url: 'https://2023.ubuntu-kr.org/ko' },
  // { date: '2023-03-02', title: '선린인터넷고등학교 118기 소프트웨어과 합격', tags: ['Education'] },
];

export const projects: Project[] = [
  {
    name: 'NYL',
    url: 'https://github.com/NY0510/slunchv2',
    desc: '급식, 시간표, 학사일정',
    detail: '전국 중·고등학교 급식, 시간표, 학사일정을 제공하는 React Native 기반 네이티브 앱입니다.',
    tags: ['React Native', 'ElysiaJS'],
  },
  {
    name: 'NM',
    url: 'https://github.com/NY0510/NM-TS',
    detail: 'Discord.js와 Lavalink를 기반으로 한 고성능 디스코드 음악 봇입니다.',
    desc: '디스코드 음악 봇',
    tags: ['TypeScript', 'Discord.js', 'Lavalink'],
  },
];

export const sideNotes: string[] = [
  '작은 홈서버를 운영하고 있습니다. (5500GT, 96GB RAM, 22TB Disk)',
  // '개인적으로 JetBrains IDE를 선호하지 않습니다. 램먹는 하마에요. 안드로이드 개발 또한 VSCode를 사용하고 있습니다.',
  // 'AI/ML 관련 프로젝트가 아니라면 Python을 사용하지 않습니다. 공백만으로 블록을 구분하는 것을 좋아하지 않습니다.',
];

export const header: HeaderMeta = {
  email: 'me@ny64.kr',
  tagline: 'Student Developer based in Incheon, Korea',
};

export const footer: FooterMeta = {
  copyright: '© 2026 ny64. All rights reserved.',
};

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/ny0510', iconKey: 'github', label: 'GitHub' },
  { href: 'https://paypal.me/ny64', iconKey: 'paypal', label: 'Buy me a coffee' },
  { href: 'https://blog.ny64.kr', iconKey: 'blog', label: 'Blog' },
];

export const education: Education[] = [
  { school: '백석대학교', major: '컴퓨터공학부 소프트웨어학과', start: '2026-03' },
  { school: '선린인터넷고등학교', major: '소프트웨어과', start: '2023-03', end: '2026-02' },
];
