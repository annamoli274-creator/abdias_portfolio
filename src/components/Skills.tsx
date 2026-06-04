import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Expo'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'API REST'],
  },
  {
    title: 'Base de données',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Outils',
    skills: ['Git', 'GitHub', 'Vercel', 'Railway', 'Postman', 'Figma'],
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      itemsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 md:px-20 bg-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 flex items-center">
          <span className="text-primary mr-4">04.</span> Compétences Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <div
              key={i}
              ref={el => itemsRef.current[i] = el}
              className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-xl hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-white border-b border-slate-700 pb-2">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <span key={j} className="text-sm bg-slate-900 text-gray-300 px-3 py-1.5 rounded-md shadow-sm border border-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
