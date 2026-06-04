import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      textRef.current?.children || [],
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-20 px-6 md:px-20 bg-slate-900">
      <div className="max-w-4xl mx-auto" ref={textRef}>
        <h2 className="text-4xl font-bold mb-12 flex items-center"><span className="text-primary mr-4"></span> Profil & Formation</h2>

        <div className="text-lg text-gray-300 leading-relaxed space-y-6">
          <p>Développeur Full Stack passionné par la création d'applications web et mobiles modernes. Spécialisé dans React, Next.js, React Native et Expo, avec une expérience dans la conception d'interfaces performantes, de tableaux de bord d'administration et d'applications métiers.</p>
          <p>Capable de développer un projet complet, de la conception de l'interface utilisateur jusqu'à l'intégration du backend et des bases de données.</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-700/50">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-white">Formation D-CLIC</h3>
              <p className="text-primary text-sm mb-4">2024 – 2025</p>
              <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                <li>Développement d'applications web modernes</li>
                <li>Conception d'interfaces utilisateurs</li>
                <li>Développement frontend et backend</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-white">CAP - LTP Bopa</h3>
              <p className="text-primary text-sm mb-4">2023 – 2024</p>
              <p className="text-sm text-gray-400">Filière : Développement Web et Mobile (DWM)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
