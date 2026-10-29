import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Code2, Database, Cpu } from 'lucide-react';

const FRONTEND_TECHS = [
  { name: 'HTML5', tag: 'Web Standard' },
  { name: 'CSS3', tag: 'Modern Styling' },
  { name: 'JavaScript', tag: 'ESNext' },
  { name: 'TypeScript', tag: 'Type-Safe' },
  { name: 'React', tag: 'Frontend Library' },
  { name: 'Astro', tag: 'Content Driven' },
  { name: 'Vue.js', tag: 'Reactive Framework' },
  { name: 'Tailwind CSS', tag: 'Utility Engine' },
];

const BACKEND_TECHS = [
  { name: 'Node.js', tag: 'Runtime Engine' },
  { name: 'Python', tag: 'Backend & Data' },
  { name: 'Go', tag: 'High Concurrency' },
  { name: 'PostgreSQL', tag: 'Relational DB' },
  { name: 'Redis', tag: 'Memory Caching' },
  { name: 'FastAPI', tag: 'High Speed APIs' },
  { name: 'Docker', tag: 'Containers' },
  { name: 'GraphQL', tag: 'Flexible Queries' },
];

const CLOUD_AI_TECHS = [
  { name: 'AWS', tag: 'Cloud Platform' },
  { name: 'Azure', tag: 'Enterprise Cloud' },
  { name: 'Google Cloud', tag: 'AI & Data Platform' },
  { name: 'GitHub Actions', tag: 'CI/CD Pipelines' },
  { name: 'Kubernetes', tag: 'Orchestration' },
  { name: 'Databricks', tag: 'Big Data' },
  { name: 'PyTorch', tag: 'Deep Learning' },
  { name: 'OpenAI', tag: 'LLM Integration' },
];

export const TechnologyMarquees: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#0B1326] border-b border-[#1E2D4A] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-[#00f0ff] mb-1">
          {t.techStack?.badge || 'Stack Tecnológico Integral'}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
          {t.techStack?.title || 'Tecnologías modernas para soluciones de alto impacto'}
        </h2>
        <p className="text-xs text-[#94A3B8] max-w-xl mx-auto mt-2">
          {t.techStack?.subtitle || 'Construimos arquitecturas modulares, escalables y seguras utilizando los estándares y herramientas más demandados por la industria.'}
        </p>
      </div>

      <div className="space-y-4">
        
        {/* Row 1: Frontend & Web Experience */}
        <div className="marquee-container relative flex overflow-hidden py-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-1.5 rounded-md bg-[#0C1527]/90 px-3 py-1 text-[11px] font-bold text-[#00f0ff] border border-[#2A3F66] backdrop-blur-md">
            <Code2 className="h-3.5 w-3.5" />
            <span>{t.techStack?.frontendBadge || 'Frontend & Web'}</span>
          </div>

          <div className="animate-marquee-left flex items-center gap-4">
            {[...FRONTEND_TECHS, ...FRONTEND_TECHS].map((tech, idx) => (
              <div
                key={`fe-${idx}`}
                className="flex items-center gap-2.5 rounded-lg border border-[#1E2D4A] bg-[#0C1527] px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] shadow-sm shrink-0 hover:border-[#00f0ff]/50 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-[#00f0ff]"></span>
                <span className="font-mono">{tech.name}</span>
                <span className="text-[10px] text-[#64748B] font-normal">/ {tech.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Backend, Data & APIs */}
        <div className="marquee-container relative flex overflow-hidden py-1">
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-1.5 rounded-md bg-[#0C1527]/90 px-3 py-1 text-[11px] font-bold text-[#38BDF8] border border-[#2A3F66] backdrop-blur-md">
            <Database className="h-3.5 w-3.5" />
            <span>{t.techStack?.backendBadge || 'Backend, Datos & APIs'}</span>
          </div>

          <div className="animate-marquee-right flex items-center gap-4">
            {[...BACKEND_TECHS, ...BACKEND_TECHS].map((tech, idx) => (
              <div
                key={`be-${idx}`}
                className="flex items-center gap-2.5 rounded-lg border border-[#1E2D4A] bg-[#111C35] px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] shadow-sm shrink-0 hover:border-[#38BDF8]/50 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-[#38BDF8]"></span>
                <span className="font-mono">{tech.name}</span>
                <span className="text-[10px] text-[#64748B] font-normal">/ {tech.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Cloud, Automation & AI */}
        <div className="marquee-container relative flex overflow-hidden py-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center gap-1.5 rounded-md bg-[#0C1527]/90 px-3 py-1 text-[11px] font-bold text-[#10B981] border border-[#2A3F66] backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5" />
            <span>{t.techStack?.cloudBadge || 'Cloud, DevOps & IA'}</span>
          </div>

          <div className="animate-marquee-left animate-marquee-slow flex items-center gap-4">
            {[...CLOUD_AI_TECHS, ...CLOUD_AI_TECHS].map((tech, idx) => (
              <div
                key={`ai-${idx}`}
                className="flex items-center gap-2.5 rounded-lg border border-[#1E2D4A] bg-[#0C1527] px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] shadow-sm shrink-0 hover:border-[#10B981]/50 transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-[#10B981]"></span>
                <span className="font-mono">{tech.name}</span>
                <span className="text-[10px] text-[#64748B] font-normal">/ {tech.tag}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
