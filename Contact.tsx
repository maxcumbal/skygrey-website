import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.fromTo(
        infoRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission
    toast.success('Nachricht erfolgreich gesendet! Wir melden uns bald bei Ihnen.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="container mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="text-5xl md:text-7xl tracking-wider mb-20 text-center"
          style={{ color: 'var(--gold)' }}
        >
          KONTAKT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef}>
            <h3 className="text-3xl text-white mb-8">Lassen Sie uns sprechen</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/70 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/70 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white/70 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg border-2 flex items-center justify-center gap-2 transition-all hover:bg-gold/10"
                style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
              >
                <span>Nachricht senden</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-12">
            <div>
              <h3 className="text-3xl text-white mb-8">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(201, 169, 97, 0.1)' }}
                  >
                    <Mail size={20} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">E-Mail</p>
                    <p className="text-white">info@skygreystudios.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(201, 169, 97, 0.1)' }}
                  >
                    <Phone size={20} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Telefon</p>
                    <p className="text-white">+49 176 805 733 42</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'rgba(201, 169, 97, 0.1)' }}
                  >
                    <MapPin size={20} style={{ color: 'var(--gold)' }} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm mb-1">Adresse</p>
                    <p className="text-white">
                      Kreuzritterstraße 18<br />
                      53227 Bonn, Deutschland
                    </p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Business Hours */}
            <div className="p-6 rounded-lg border border-white/10 bg-white/5">
              <h4 className="text-xl text-white mb-4">Geschäftszeiten</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex justify-between">
                  <span>Montag - Freitag</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto max-w-7xl mt-20 pt-10 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2026 SKYGREY Studios. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 items-center">
            <Link to="/datenschutz" className="hover:text-gold transition-colors">Datenschutz</Link>
            <Link to="/impressum" className="hover:text-gold transition-colors">Impressum</Link>
            <Link to="/agb" className="hover:text-gold transition-colors">AGB</Link>
          </div>
        </div>
        
        {/* Webdesign Credit */}
        <div className="mt-8 text-center">
          <a
            href="https://www.maxmediavision.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-gold transition-colors text-sm group"
          >
            <span>Webdesign by:</span>
            <span className="font-semibold text-white/60 group-hover:text-gold transition-colors">
              MAXMEDIA
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}