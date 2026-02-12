
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
    <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden scroll-mt-20">
      {/* Luz Atmosférica de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-[#C6A74A]/5 blur-[200px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* LOGO DOMINANTE - Side by Side garantido */}
        <div className="flex justify-center transform hover:scale-105 transition-transform duration-1000 ease-out">
          <div className="relative group">
             <LogoAVMinimal className="h-64 md:h-[480px] drop-shadow-[0_0_100px_rgba(198,167,74,0.3)] animate-fade-in" />
             <div className="absolute inset-0 bg-[#C6A74A] blur-[150px] opacity-10 animate-pulse -z-10 group-hover:opacity-20 transition-opacity" />
          </div>
        </div>
        
        <div className="space-y-12">
          <h2 className="text-[#C6A74A] text-[12px] md:text-[14px] uppercase tracking-[1.5em] font-black opacity-80 animate-tracking-in pl-[1.5em]">
            The Mountain & The Valley Architecture
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif text-white leading-[0.85] tracking-tighter">
            Ascend for <span className="text-[#C6A74A]">Vision</span>.<br />
            <span className="italic font-light opacity-60">Venture for Execution.</span>
          </h1>
        </div>

        <p className="text-xl md:text-3xl text-[#BFC3C9]/50 max-w-4xl mx-auto font-light leading-relaxed tracking-tight">
          A arquitetura de liderança definitiva para quem governa através da revelação e constrói com precisão estratégica.
        </p>

        <div className="pt-20 flex flex-col sm:flex-row items-center justify-center gap-10">
          <button 
            onClick={onStartClick}
            className="group relative w-full sm:w-auto px-24 py-9 overflow-hidden transition-all duration-500 hover:shadow-[0_0_80px_rgba(198,167,74,0.4)]"
          >
            <div className="absolute inset-0 bg-[#C6A74A] transition-transform duration-500 group-hover:scale-110" />
            <span className="relative text-[#0B1C2D] font-black uppercase tracking-[0.5em] text-[14px]">
              Iniciar Jornada
            </span>
          </button>
          
          <a 
            href="#ecosystem" 
            onClick={handleScrollToEcosystem}
            className="group w-full sm:w-auto px-24 py-9 border border-white/10 text-white/80 font-medium uppercase tracking-[0.4em] text-[13px] hover:bg-white/5 transition-all backdrop-blur-md"
          >
            Ecossistema
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#C6A74A] mt-2" />
          </a>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-6">
        <span className="text-[11px] uppercase tracking-[0.8em] text-white font-black">Descubra</span>
        <div className="w-[1px] h-32 bg-gradient-to-b from-[#C6A74A] via-[#C6A74A]/50 to-transparent animate-shimmer" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tracking-in {
          from { letter-spacing: 0.5em; opacity: 0; }
          to { letter-spacing: 1.5em; opacity: 0.8; }
        }
        .animate-shimmer { animation: shimmer 4s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-tracking-in { animation: tracking-in 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
