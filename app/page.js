import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { Projects, Experience, Education, Skills, Contact, Footer } from '@/components/Sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
