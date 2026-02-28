import { motion } from 'motion/react';
import ImmoScout24Logo from 'figma:asset/4397e3affbd6984e445cf5e346ca29639c42f393.png';
import innomoveLogo from 'figma:asset/0ffea7be12ecf81156e4ca1dc122596af9d26c84.png';
import ukbLogo from 'figma:asset/2a634529d13fabebbf3bd28d789aade616934261.png';
import dvagLogo from 'figma:asset/ba2af957198e6840dc5c77328c0214e4adaed84c.png';
import kardenaLogo from 'figma:asset/51dcb1158f0e4ff6ffe571b82092a950a340869e.png';
import eventsVibesLogo from 'figma:asset/39a706ef195b130474d250a8ed62928be79cc900.png';
import united4KenyaLogo from 'figma:asset/84a736513bb7943cf67a40316aaab4c145fe23a6.png';

interface Logo {
  name: string;
  src: string;
}

export function LogoMarquee() {
  // Beispiel-Logos von bekannten Unternehmen
  const logos: Logo[] = [
    { name: 'ImmobilienScout24', src: ImmoScout24Logo },
    { name: 'Innomove', src: innomoveLogo },
    { name: 'Universitätsklinikum Bonn', src: ukbLogo },
    { name: 'Deutsche Vermögensberatung', src: dvagLogo },
    { name: 'Kardena', src: kardenaLogo },
    { name: 'Events and Vibes', src: eventsVibesLogo },
    { name: 'United-4-Kenya', src: united4KenyaLogo },
  ];

  return (
    <div className="relative w-full py-8 overflow-hidden bg-black">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Infinite Marquee */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {logos.map((logo, index) => (
                <div
                  key={`${i}-${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name}
                    className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}