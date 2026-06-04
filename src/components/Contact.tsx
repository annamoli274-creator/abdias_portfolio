import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Icons using raw SVGs to avoid lucide-react export issues
const MapPin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Mail = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
);
const Phone = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const Github = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
);

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 md:px-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
          <span className="text-primary mr-4"></span> Get In Touch
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Je suis actuellement à la recherche de nouvelles opportunités. Mon inbox est toujours ouverte. Que vous ayez une question ou que vous vouliez juste dire bonjour, je ferai de mon mieux pour vous répondre !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Mes Coordonnées</h3>
            <div className="flex items-center space-x-4 text-gray-300">
              <MapPin className="text-primary w-6 h-6" />
              <span>Cotonou, Bénin</span>
            </div>
            <div className="flex flex-col space-y-4 mt-2">
              <div className="flex items-center space-x-4 text-gray-300">
                <Mail className="text-primary w-6 h-6 shrink-0" />
                <a href="mailto:regoprixson@icloud.com" className="hover:text-primary transition-colors">regoprixson@icloud.com</a>
              </div>
              <div className="flex items-center space-x-4 text-gray-300">
                <Phone className="text-primary w-6 h-6 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+2290192211334" className="hover:text-primary transition-colors">Appel: +229 01 92 21 13 34</a>
                  <a href="https://wa.me/2290159845535" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">WhatsApp: +229 01 59 84 55 35</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-gray-300 mt-2">
                <Github className="text-primary w-6 h-6 shrink-0" />
                <div className="flex flex-col">
                  <a href="https://github.com/AbdiasDWM" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub Principal (AbdiasDWM)</a>
                  <a href="https://github.com/Abdias-ag" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors mt-1">GitHub Secondaire (Abdias-ag)</a>
                  <a href="https://github.com/annamoli274-creator" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors mt-1">Troisieme compte GitHub  (annamoli274-creator)</a>
                </div>
                <a href="/cv.pdf" download className="mt-4 inline-block bg-primary hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition-colors">Télécharger CV</a>
              </div>
            </div>
          </div>


        </div>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-20">
        <p>Conçu et développé par Abdias Azifan</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
      </footer>
    </section>
  );
};

export default Contact;
