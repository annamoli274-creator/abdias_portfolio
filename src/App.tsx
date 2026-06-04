import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className="relative w-full h-full bg-dark text-white font-sans overflow-x-hidden">
      <header className="fixed top-0 w-full p-6 z-50 mix-blend-difference text-white">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="font-bold text-xl tracking-tighter">AA.</div>
          <MobileNav
            links={[
              { href: "#about", label: "Profil" },
              { href: "#experience", label: "Expérience" },
              { href: "#projects", label: "Projets" },
              { href: "#skills", label: "Compétences" },
              { href: "#contact", label: "Contact" },
            ]}
          />
          <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
            <li><a href="#about" className="hover:text-primary transition-colors">Profil</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors">Expérience</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projets</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors">Compétences</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
