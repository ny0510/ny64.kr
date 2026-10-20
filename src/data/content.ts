import type { Achievement, Education, FooterMeta, HeaderMeta, Project, SocialLink } from './types';

export const aboutMe: string[] = [
  '안녕하세요, **저는 늘 배우고 도전하며 성장하는 김가온입니다.**',
  '항상 **호기심을 바탕으로 새로운 기술을 배우는 것**을 즐깁니다. 또한 최근에는 **정보보안 분야에** 관심을 가지고 공부하고 있습니다.',
];

export const achievements: Achievement[] = [
  {
    start: '2026-06-08',
    end: '현재',
    title: '화이트햇스쿨 4기',
    tags: ['Education'],
    url: 'https://whsedu.kr',
    detail: '화이트 해커 및 정보보안 인재양성을 위한 최신 정보보안 교육 프로그램인 화이트햇스쿨 4기에 참여하여 다양한 정보보안 기술과 실무 프로젝트 경험을 쌓았습니다.',
  },
  {
    start: '2025-09-21',
    end: '2025-09-21',
    title: "제 1회 Daangn Builder's Camp 해커톤 (1위)",
    tags: ['Award'],
    url: 'https://about.daangn.com/blog/archive/%EB%8B%B9%EA%B7%BC-%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4-%EC%B1%84%EC%9A%A9/',
    detail: "주민이 직접 동네의 어두운 골목이나 불편한 환경을 촬영해 문제를 공유하고 개선 아이디어를 제안할 수 있는 서비스 'Blueprint'를 개발하여 1위를 수상하였습니다.",
  },
  {
    start: '2024-11-01',
    end: '2024-11-01',
    title: '제 20회 국제특허정보박람회 (PATINEX) 부스 운영',
    tags: ['Conference'],
    url: 'https://patinex.org',
    detail: "(주)뉴로서킷과 함께 전문가용 상표 업무 통합 시스템 '마크엣' 부스를 운영하였습니다.",
  },
  {
    start: '2024-10-29',
    end: '2024-10-29',
    title: '한국코드페어 SW 공모전 동상 (3위)',
    tags: ['Award'],
    url: 'https://www.kcf.or.kr',
    detail: "TV 밑 카메라와 MediaPipe를 사용하여 노인 뇌질환 전조 증상을 감지해 보호자와 의료기관에 알리는 자동 모니터링 시스템 '집돌이 의사'를 개발하여 동상을 수상하였습니다.",
  },
  { start: '2024-10-04', end: '2024-10-04', title: '리눅스마스터 2급 자격증 취득', tags: ['Certification'] },
  // { start: '2024-08-24', end: '2024-08-24', title: '제11회 대한민국 SW융합 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://www.swhackathon.kr' },
  // { start: '2024-08-09', end: '2024-08-09', title: 'JUNCTION ASIA 2024 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://eu.junctionplatform.com/projects/junction-asia-2024' },
  // { start: '2023-11-09', end: '2023-11-09', title: '콘텐츠유니버스 코리아 테크 해커톤 본선 진출', tags: ['Hackathon'], url: 'https://contentsuniverse.com/kr/2023contest' },
];

export const projects: Project[] = [
  {
    name: 'NM',
    url: 'https://github.com/NY0510/NM-TS',
    detail: 'Discord.js와 Lavalink를 기반으로 한 고성능 디스코드 음악 봇입니다.',
    desc: '디스코드 음악 봇',
    tags: ['TypeScript', 'Discord.js', 'Lavalink'],
  },
  {
    name: 'NYL',
    url: 'https://github.com/NY0510/slunchv2',
    desc: '급식, 시간표, 학사일정',
    detail: '전국 중·고등학교 급식, 시간표, 학사일정을 제공하는 React Native 기반 네이티브 앱입니다.',
    tags: ['React Native', 'ElysiaJS'],
  },
];

export const sideNotes: string[] = [
  '작은 홈서버를 운영하고 있습니다. (5500GT, 96GB RAM, 22TB Disk, 700VA / 420W UPS)',
  // '개인적으로 JetBrains IDE를 선호하지 않습니다. 램먹는 하마에요. 안드로이드 개발 또한 VSCode를 사용하고 있습니다.',
  // 'AI/ML 관련 프로젝트가 아니라면 Python을 사용하지 않습니다. 공백만으로 블록을 구분하는 것을 좋아하지 않습니다.',
];

export const header: HeaderMeta = {
  name: '김가온',
  username: 'ny64',
  tagline: 'Student Developer based in Incheon, Korea',
};

export const footer: FooterMeta = {
  copyright: '© 2026 ny64. All rights reserved.',
};

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com/ny0510', iconKey: 'github', label: 'GitHub' },
  { href: 'https://blog.ny64.kr', iconKey: 'blog', label: 'Blog' },
  { href: 'mailto:me@ny64.kr', iconKey: 'email', label: 'Email' },
  { href: 'https://paypal.me/ny64', iconKey: 'paypal', label: 'Buy me a coffee' },
];

export const education: Education[] = [
  { school: '백석대학교', major: '컴퓨터공학부 소프트웨어학과', start: '2026-03' },
  { school: '선린인터넷고등학교', major: '소프트웨어과', start: '2023-03', end: '2026-02' },
];
