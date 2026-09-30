import { Award, BadgeCheck, Download, GraduationCap, Mail } from 'lucide-react';
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile, projects, experience, education, certifications, skills } from '@/data/profile';

function SectionTitle({ index, title, children }) {
  return (
    <Reveal className="mb-10">
      <p className="font-mono text-sm text-accent">{index}</p>
      <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {children && <p className="mt-3 max-w-2xl text-textMuted leading-relaxed">{children}</p>}
    </Reveal>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle index="01." title="Proyectos">
          Lo que he construido en la universidad, en mi práctica y por mi cuenta. Casi todo cruza tecnología y salud.
        </SectionTitle>
        <div className="grid lg:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className="lg:col-span-2">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experiencia" className="py-24 px-4 sm:px-6 bg-surface/60 border-y border-line">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10">
        <SectionTitle index="02." title="Experiencia">
          Más de seis años en salud, desde urgencias hasta unidades críticas. Ahí aprendí a trabajar bajo presión y a escuchar a quien usa el sistema.
        </SectionTitle>
        <ol className="relative border-l border-line ml-2">
          {experience.map((e, i) => (
            <Reveal key={e.org + e.period} delay={i * 0.04} className={i < experience.length - 1 ? 'pb-9' : ''}>
              <li className="pl-7 relative">
                <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-bold text-lg">
                    {e.role} <span className="text-accent">· {e.org}</span>
                  </h3>
                  <span className="font-mono text-xs text-textMuted">{e.period}</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-textMuted text-sm leading-relaxed">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="formacion" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle index="03." title="Formación y certificados" />
        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((ed, i) => (
            <Reveal key={ed.title} delay={i * 0.05}>
              <div className="h-full bg-surface border border-line rounded-xl p-6 flex gap-4">
                <GraduationCap className="text-accent shrink-0 mt-0.5" size={22} />
                <div>
                  <h3 className="font-bold leading-snug">{ed.title}</h3>
                  <p className="text-sm text-textMuted mt-1">{ed.org}</p>
                  <p className="text-xs font-mono text-textMuted mt-2">
                    {ed.period} · <span className="text-accent">{ed.detail}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <Reveal>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <BadgeCheck className="text-accent" size={20} /> Cursos y certificaciones
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-textMuted">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Award className="text-accent" size={20} /> Reconocimientos
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-textMuted">
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span><b className="text-textMain">1er lugar</b>, Hackatón Duoc UC sede Valparaíso 2026, con Felicy</span>
              </li>
              <li className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>4º lugar, Summit Festival de Innovación y Futuro (UC – Duoc UC) 2023</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 sm:px-6 bg-surface/60 border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionTitle index="04." title="Tecnologías">
          Lo que he usado en proyectos reales. Inglés B2 hablado y escrito.
        </SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.04}>
              <h3 className="font-mono text-sm text-accent mb-3">{s.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="text-sm px-3 py-1.5 rounded-md border border-line bg-background">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className="py-28 px-4 sm:px-6 text-center relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
      <Reveal className="relative max-w-2xl mx-auto">
        <p className="font-mono text-sm text-accent">05.</p>
        <h2 className="mt-1 text-4xl sm:text-5xl font-bold tracking-tight">Conversemos</h2>
        <p className="mt-5 text-lg text-textMuted leading-relaxed">
          Busco mi primer rol como desarrollador, en salud digital o en cualquier equipo donde pueda aportar. Si tienes una vacante o un proyecto, escríbeme.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-accent text-onAccent font-semibold hover:opacity-90 transition-opacity">
            <Mail size={18} /> {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-line font-semibold hover:border-accent hover:text-accent transition-colors">
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>
        <div className="mt-5 flex justify-center gap-6 text-sm text-textMuted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={profile.cv} download className="inline-flex items-center gap-2 hover:text-accent">
            <Download size={16} /> Descargar CV
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-xs font-mono text-textMuted border-t border-line">
      © {new Date().getFullYear()} {profile.name} · Desarrollador Full Stack & TENS · Valparaíso, Chile
    </footer>
  );
}
