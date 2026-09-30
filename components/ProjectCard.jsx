import { ArrowUpRight, Lock, PlayCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

const linkIcon = { github: GithubIcon, video: PlayCircle, demo: ArrowUpRight };

export default function ProjectCard({ project }) {
  const { title, context, period, description, bullets = [], tags = [], links = [], note, featured } = project;

  return (
    <article
      className={`group h-full flex flex-col bg-surface border border-line rounded-xl p-6 sm:p-7 shadow-sm hover:border-accent/60 transition-colors ${
        featured ? 'lg:p-8' : ''
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <span className="text-accent">{context}</span>
        <span className="text-textMuted">{period}</span>
      </div>

      <h3 className={`mt-3 font-bold tracking-tight ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{title}</h3>
      <p className="mt-3 text-textMuted leading-relaxed">{description}</p>

      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5">
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
              {t}
            </li>
          ))}
        </ul>

        {(links.length > 0 || note) && (
          <div className="mt-5 pt-4 border-t border-line flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {links.map((l) => {
              const Icon = linkIcon[l.type] || ArrowUpRight;
              return (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold hover:text-accent transition-colors">
                  <Icon size={16} /> {l.label}
                </a>
              );
            })}
            {note && (
              <span className="inline-flex items-center gap-1.5 text-textMuted">
                <Lock size={14} /> {note}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
