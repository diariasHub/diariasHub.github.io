'use client';
import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { profile } from '@/data/profile';

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-background/85 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-accent">&lt;</span>DiegoArias<span className="text-accent"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-textMuted hover:text-textMain transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 text-sm font-semibold px-3.5 py-2 rounded-md border border-accent text-accent hover:bg-accent hover:text-onAccent transition-colors"
          >
            <Download size={16} /> CV
          </a>
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 grid place-items-center rounded-md border border-line"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5 text-textMuted hover:text-textMain">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} download className="mt-2 inline-flex items-center justify-center gap-2 font-semibold px-4 py-2.5 rounded-md bg-accent text-onAccent">
            <Download size={16} /> Descargar CV
          </a>
        </div>
      )}
    </header>
  );
}
