import React from 'react';
import { projects } from '@/data/content';
import Badge from '@/components/Badge';

export default function ProjectsSection() {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-medium">프로젝트</h3>
      <div className="space-y-5">
        {projects.map((project, idx) => (
          <article className="space-y-1.5" key={idx}>
            <div>
              <div className="flex flex-col items-start gap-y-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-1">
                <div className="flex flex-col items-start gap-y-1 sm:flex-row sm:items-center sm:gap-x-1.5">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">
                      {project.name}
                    </a>
                  ) : (
                    <span className="font-medium">{project.name}</span>
                  )}
                  <div className="hidden flex-wrap gap-1 sm:flex">
                    {project.tags.map((tag, i) => (
                      <Badge key={i}>{tag}</Badge>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">{project.desc}</span>
              </div>
              <p className="mt-1 text-base leading-6 text-muted-foreground">{project.detail}</p>
              <div className="mt-1.5 flex flex-wrap gap-1 sm:hidden">
                {project.tags.map((tag, i) => (
                  <Badge key={i}>{tag}</Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
