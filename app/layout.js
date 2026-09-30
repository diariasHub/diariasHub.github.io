import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Diego Arias Zavando · Desarrollador Full Stack',
  description:
    'Portafolio de Diego Arias Zavando: desarrollador full stack junior, estudiante de Ingeniería en Informática en Duoc UC y Técnico en Enfermería. Proyectos en salud digital, React, Spring Boot y AWS.',
  openGraph: {
    title: 'Diego Arias Zavando · Desarrollador Full Stack',
    description: 'Proyectos en salud digital, React, Spring Boot y AWS.',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
