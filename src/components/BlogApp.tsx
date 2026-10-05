import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ListaArticulos from './ListaArticulos';
import ProjectsSection from './ProjectsSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

export function BlogApp() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-cyan-500 selection:text-zinc-950">

      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1">
        <Hero />
        <ListaArticulos searchQuery={searchQuery} />
        <AboutSection />
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}

export default BlogApp;
