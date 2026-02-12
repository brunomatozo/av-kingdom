
import React from 'react';
import { LogoAVMinimal } from '../constants';

interface HeroProps {
  onStartClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  const handleScrollToEcosystem = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('ecosystem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C6A74A]/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="flex justify-center mb-4">
          <LogoAVMinimal className="h-24 md:h-32 opacity-80" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-[#C6A74A] text-sm md:text-base uppercase tracking-[0.4em] font-medium">
            The Mountain & The Valley Architecture
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight">
            Ascend for Vision.<br />
            <span className="text-[#C6A74A] italic">Venture for Execution.</span>
          </h1>
        </div>

        <p className="text-lg md:text-xl text-[#BFC3C9]/80 max-w-2xl mx-auto font-light leading-relaxed">
          Uma arquitetura espiritual-estratégica para líderes que sobem para buscar revelação e descem para construir legado.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStartClick}
            className="w-full sm:w-auto px-10 py-4 bg-[#C6A74A] text-[#0B1C2D] font-bold uppercase tracking-widest hover:bg-white transition-all shadow-2xl text-center"
          >
            Iniciar Jornada
          </button>
          <a 
            href="#ecosystem" 
            onClick={handleScrollToEcosystem}
            className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-medium uppercase tracking-widest hover:bg-white/5 transition-all text-center"
          >
            Conhecer Ecossistema
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-px h-12 bg-gradient-to-b from-[#C6A74A] to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
