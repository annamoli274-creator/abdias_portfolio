import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      itemsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        },
      }
    );
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="min-h-screen py-20 px-6 md:px-20 bg-dark relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <span className="text-primary mr-4"></span> Expérience Professionnelle
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

          {/* Experience Item */}
          <div
            ref={el => itemsRef.current[0] = el}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 text-slate-300 group-[.is-active]:text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-primary/50 transition-colors backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">Développeur Full Stack Freelance</h3>
                <span className="text-sm font-medium text-primary mt-1 md:mt-0">2024 - Aujourd'hui</span>
              </div>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 mt-4">
                <li>Réalisation de plusieurs sites web professionnels.</li>
                <li>Développement d'applications web et mobiles sur mesure.</li>
                <li>Création de tableaux de bord d'administration.</li>
                <li>Déploiement de projets sur Vercel et Railway.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
