
import React from 'react';
import { LogoAVMinimal } from '../constants';

interface HeroProps {
  onStartClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  const handleScrollToConcept = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('concept-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32 overflow-hidden scroll-mt-20">
      {/* Luz Atmosférica de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[#C6A74A]/5 blur-[200px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        {/* LOGO DOMINANTE - Side by Side */}
        <div className="flex justify-center transform transition-transform duration-1000 ease-out">
          <div className="relative group">
             <LogoAVMinimal className="h-48 md:h-[300px] lg:h-[380px] drop-shadow-[0_0_80px_rgba(198,167,74,0.15)] animate-fade-in" />
             <div className="absolute inset-0 bg-[#C6A74A] blur-[120px] opacity-5 animate-pulse -z-10" />
          </div>
        </div>
        
        <div className="space-y-6 md:space-y-10">
          <h2 className="text-[#C6A74A] text-[10px] md:text-[13px] uppercase tracking-[1em] md:tracking-[1.3em] font-black opacity-80 animate-tracking-in pl-[1em] md:pl-[1.3em]">
            The Mountain & The Valley Architecture
          </h2>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight">
            Ascend for <span className="text-[#C6A74A]">Vision</span>.<br />
            Venture for <span className="text-[#C6A74A]">Execution</span>.
          </h1>
        </div>

        <p className="text-base md:text-2xl text-[#BFC3C9]/70 max-w-3xl mx-auto font-light leading-relaxed tracking-wide px-4">
          A arquitetura de liderança definitiva para quem governa através da revelação e constrói com precisão estratégica.
        </p>

        <div className="pt-8 md:pt-12 flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
          <button 
            onClick={onStartClick}
            className="group relative w-full sm:w-auto px-12 md:px-20 py-6 md:py-8 overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(198,167,74,0.3)]"
          >
            <div className="absolute inset-0 bg-[#C6A74A] transition-transform duration-500 group-hover:scale-110" />
            <span className="relative text-[#0B1C2D] font-black uppercase tracking-[0.4em] text-[12px] md:text-[13px]">
              Iniciar Jornada
            </span>
          </button>
          
          <a 
            href="#ecosystem" 
            className="group w-full sm:w-auto px-12 md:px-20 py-6 md:py-8 border border-white/10 text-white font-medium uppercase tracking-[0.4em] text-[11px] md:text-[12px] hover:bg-white/5 transition-all backdrop-blur-md"
          >
            Ecossistema
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#C6A74A] mt-2" />
          </a>
        </div>
      </div>

      {/* Indicador de Scroll - Reposicionado e com maior Z-Index */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 cursor-pointer group" onClick={handleScrollToConcept}>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.8em] text-[#C6A74A] font-black opacity-100 group-hover:opacity-80 transition-opacity">
          Descubra
        </span>
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#C6A74A] via-[#C6A74A]/50 to-transparent animate-shimmer" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tracking-in {
          from { letter-spacing: 0.5em; opacity: 0; }
          to { letter-spacing: 1em; opacity: 0.8; }
        }
        @media (min-width: 768px) {
          @keyframes tracking-in {
            from { letter-spacing: 0.5em; opacity: 0; }
            to { letter-spacing: 1.3em; opacity: 0.8; }
          }
        }
        .animate-shimmer { animation: shimmer 4s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-tracking-in { animation: tracking-in 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
