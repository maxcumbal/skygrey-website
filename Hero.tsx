import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, Play, X } from 'lucide-react';
import skygreyLogo from 'figma:asset/4eda433d1ab2050a70aad841928854c62232ace9.png';

export function Hero() {
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showModal, setShowModal] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(logoRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out' });
      gsap.fromTo(taglineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' });
      gsap.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  useEffect(() => {
    const timer = setTimeout(() => setBgLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black z-0" />

        {/* Hintergrund Video — &background=1 erzwingt stumm in Bunny.net */}
        <div
          className="absolute inset-0 w-full h-full z-1 transition-opacity duration-1000"
          style={{ opacity: bgLoaded ? 1 : 0 }}
        >
          <iframe
            src="https://iframe.mediadelivery.net/embed/608059/d958a07a-1fe3-48b5-8762-ed955d836878?autoplay=true&loop=true&muted=true&preload=true&responsive=true&controls=false&background=1"
            style={{
              border: 'none',
              pointerEvents: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '177.78vh',
              height: '56.25vw',
              minWidth: '100%',
              minHeight: '100%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#000000',
            }}
            allow="autoplay"
            allowFullScreen={false}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
          <div ref={logoRef} className="text-center mb-8">
            <img src={skygreyLogo} alt="SKYGREY Studios" className="h-48 md:h-64 lg:h-80 mx-auto object-contain mb-6" />
            <button
              ref={buttonRef}
              onClick={() => setShowModal(true)}
              className="group relative inline-flex items-center gap-3 px-6 py-3 overflow-hidden transition-all duration-500"
            >
              <div className="absolute inset-0 border-2 transition-all duration-500 group-hover:scale-105" style={{ borderColor: 'var(--gold)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" style={{ backgroundColor: 'var(--gold)' }} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-500" style={{ backgroundColor: 'var(--gold)' }} />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-90" style={{ backgroundColor: 'var(--gold)' }}>
                <Play size={14} className="text-black fill-black translate-x-0.5" />
              </div>
              <span className="relative z-10 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold transition-all duration-500 group-hover:tracking-[0.4em] group-hover:scale-105" style={{ color: 'var(--gold)' }}>
                Showreel ansehen
              </span>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 transition-all duration-500 group-hover:w-5 group-hover:h-5" style={{ borderColor: 'var(--gold)' }} />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 transition-all duration-500 group-hover:w-5 group-hover:h-5" style={{ borderColor: 'var(--gold)' }} />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 transition-all duration-500 group-hover:w-5 group-hover:h-5" style={{ borderColor: 'var(--gold)' }} />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 transition-all duration-500 group-hover:w-5 group-hover:h-5" style={{ borderColor: 'var(--gold)' }} />
            </button>
          </div>

          <div ref={taglineRef} className="text-center mb-8" />

          <button onClick={scrollToProjects} className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer">
            <ChevronDown size={40} className="text-white/60" />
          </button>
        </div>
      </section>

      {/* Modal — MIT TON, kleineres zentriertes Video */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
          >
            <X size={24} className="text-white" />
          </button>
          <div style={{ position: 'relative', width: '80vw', maxWidth: '1000px', aspectRatio: '16 / 9', backgroundColor: '#000000', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              src="https://iframe.mediadelivery.net/embed/608059/d958a07a-1fe3-48b5-8762-ed955d836878?autoplay=true&loop=false&muted=false&preload=true&responsive=true"
              style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000000' }}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}