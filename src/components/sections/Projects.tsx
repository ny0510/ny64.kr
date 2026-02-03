import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

const projects = [
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
  // {
  //   name: 'Arkia',
  //   // url: 'https://f.ny64.kr/temp/sunrinthon2025/Arkia.pdf',
  //   desc: '딸깍으로 골라 담는 나만의 LLM',
  //   detail: '복잡한 RAG 파이프라인 구축 과정을 자동화하여, 누구나 간편하게 맞춤형 파이프라인을 만들고 활용할 수 있도록 돕는 서비스입니다.',
  //   tags: ['RAG', 'LLM', 'FastAPI', 'React'],
  // },
];

export default function ProjectsSection() {
  return (
    <section className="break-keep break-words">
      <h3 className="text-2xl font-normal mb-2">프로젝트</h3>
      <div className="space-y-8">
        {projects.map((project, idx) => (
          <div className="space-y-2" key={idx}>
            <div className="space-y-1">
              <div className="flex justify-between items-center gap-y-2 gap-x-4">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-lg text-nowrap items-center gap-x-2">
                    {project.name}
                    <SquareArrowOutUpRight size={16} />
                  </a>
                ) : (
                  <span className="text-lg font-medium">{project.name}</span>
                )}
                <span className="text-sm text-muted-foreground text-nowrap">{project.desc}</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{project.detail}</p>
              </div>
            </div>
            <div className="flex gap-2 *:bg-muted *:px-2 *:py-0.5 *:rounded *:text-xs *:font-medium *:text-muted-foreground">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
