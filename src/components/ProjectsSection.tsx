import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';

const projects = [
  {
    name: 'NY0510/NM-TS',
    url: 'https://github.com/NY0510/NM-TS',
    desc: 'Discord.js + Lavalink',
    detail: 'Discord.js와 Lavalink를 기반으로 개발된 디스코드 음악 봇입니다.',
    tags: ['TypeScript', 'Discord.js'],
  },
  {
    name: 'NY0510/slunchv2',
    url: 'https://github.com/NY0510/slunchv2',
    desc: '급식, 시간표 및 학사일정',
    detail: '전국 초·중·고 급식, 시간표, 학사일정을 제공하는 React Native 기반 네이티브 앱입니다',
    tags: ['TypeScript', 'React Native'],
  },
  {
    name: 'NY0510/blog',
    url: 'https://github.com/NY0510/blog',
    desc: '개인 개발 블로그',
    detail: '정적 사이트 생성기인 Hugo를 기반으로 개발된 개인 블로그입니다.',
    tags: ['Hugo'],
  },
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
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-lg text-nowrap items-center gap-x-2">
                  {project.name}
                  <SquareArrowOutUpRight size={16} />
                </a>
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
