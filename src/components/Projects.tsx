import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Gestion de Services de Réparation',
    description: "Application complète avec tableau de bord administrateur. Gestion des utilisateurs, demandes et suivi des interventions.",
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Site Web de Restaurant',
    description: "Site vitrine moderne et responsive pour un restaurant. Présentation des menus et optimisation UX.",
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Site Web de Bar Mobile',
    description: "Conception et développement mettant en avant les offres commerciales avec une interface adaptée aux mobiles.",
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600&h=400',
  },
  {
    title: 'Site Web de Bar Mobile',
    description: "Conception et développement d'un site web de vente de Mobilhome",
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: '#',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TbnrOYWvgtoUHvtHscgItBgioi98T3xOijOzTZIpSr91ujCRUHjjG3kgy0aMcH9EQEUSa2QBG6cRQyCm5wC_1OWh4RYyLlRXQtMZOvIUtA&s=10',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 md:px-20 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <span className="text-primary mr-4"></span> Projets Réalisés
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el ?? null}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)]"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-700 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-400 mt-8">Certains projets réalisés sont soumis à des accords de confidentialité (NDA) et peuvent être présentés sur demande lors d'un entretien.</p>
      </div>
    </section>
  );
};

export default Projects;
