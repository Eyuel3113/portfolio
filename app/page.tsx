import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen text-foreground antialiased selection:bg-primary/30 selection:text-white">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}
