import React from 'react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { projects } from '@/data/content';
import Badge from '@/components/Badge';

export default function ProjectsSection() {
  return (
    <section className="break-keep wrap-break-word">
      <h3 className="text-2xl font-normal mb-2">프로젝트</h3>
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div className="space-y-2" key={idx}>
            <div>
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
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, i) => (
                <Badge key={i}>{tag}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}