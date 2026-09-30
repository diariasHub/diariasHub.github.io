'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '@/data/profile';

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay) =>
    reduce ? {} : { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay } };

  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Latido de fondo */}
      <svg className="absolute inset-x-0 top-1/2 w-full h-40 -translate-y-1/2 text-accent/15 pointer-events-none" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="ecg-line"
          d="M0 80 H380 L410 80 L425 40 L440 120 L458 20 L476 140 L492 80 H700 L720 80 L732 60 L744 96 L756 80 H1200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.p {...fade(0)} className="font-mono text-accent mb-4">Hola, mi nombre es</motion.p>
          <motion.h1 {...fade(0.08)} className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
            {profile.shortName}
          </motion.h1>
          <motion.h2 {...fade(0.16)} className="mt-4 text-2xl sm:text-4xl font-bold text-textMuted leading-tight">
            {profile.tagline}
          </motion.h2>
          <motion.p {...fade(0.24)} className="mt-6 max-w-xl text-lg text-textMuted leading-relaxed">
            <span className="text-textMain font-semibold">{profile.role}.</span> {profile.intro}
          </motion.p>

          <motion.div {...fade(0.32)} className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-onAccent font-semibold hover:opacity-90 transition-opacity">
              Ver proyectos <ArrowDown size={18} />
            </a>
            <a href={profile.cv} download className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-line font-semibold hover:border-accent hover:text-accent transition-colors">
              <Download size={18} /> Descargar CV
            </a>
          </motion.div>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-textMuted">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <GithubIcon size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <LinkedinIcon size={18} /> LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={18} /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={18} /> {profile.location}
            </span>
          </motion.div>
        </div>

        <motion.div {...fade(0.3)} className="grid gap-3 max-w-md w-full mx-auto lg:mx-0">
          <figure className="relative rounded-2xl overflow-hidden border border-line shadow-sm bg-surface">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              width={960}
              height={843}
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="w-full h-auto aspect-[8/7] object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 text-xs font-mono px-2.5 py-1 rounded-md bg-background/85 backdrop-blur text-textMain border border-line">
              Con mi compañero de equipo 🐾
            </figcaption>
          </figure>
          <ul className="grid gap-3">
            {profile.highlights.map((h) => (
              <li key={h.label} className="bg-surface border border-line rounded-xl px-5 py-3.5 flex items-baseline gap-4 shadow-sm">
                <span className="text-xl font-bold text-accent whitespace-nowrap">{h.value}</span>
                <span className="text-sm text-textMuted leading-snug">{h.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
