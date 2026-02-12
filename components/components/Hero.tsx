
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
    <section id="vision" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden scroll-mt-20">
      {/* Background Atmosférico */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0B1C2D] -z-20" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,#1a2a3a_0%,#0B1C2D_70%)] -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[#C6A74A]/5 blur-[180px] rounded-full -z-10 animate-pulse" />
      
      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Logo AV - Escala Ultra Dominante para impacto imediato */}
        <div className="flex justify-center transform hover:scale-105 transition-transform duration-1000 ease-out">
          <div className="relative">
             <LogoAVMinimal className="h-72 md:h-[450px] drop-shadow-[0_0_80px_rgba(198,167,74,0.3)] animate-fade-in" />
             <div className="absolute inset-0 bg-[#C6A74A] blur-[120px] opacity-10 animate-pulse -z-10" />
          </div>
        </div>
        
        <div className="space-y-10">
          <h2 className="text-[#C6A74A] text-[11px] md:text-[13px] uppercase tracking-[1.3em] font-bold opacity-70 animate-tracking-in pl-[1.3em]">
            The Mountain & The Valley Architecture
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.95] tracking-tighter">
            Ascend for <span className="text-[#C6A74A]">Vision</span>.<br />
            <span className="italic font-light opacity-80">Venture for Execution.</span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-[#BFC3C9]/60 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
          A arquitetura de liderança definitiva para quem governa através da revelação e constrói com precisão estratégica.
        </p>

        <div className="pt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
          <button 
            onClick={onStartClick}
            className="group relative w-full sm:w-auto px-20 py-8 overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(198,167,74,0.3)]"
          >
            <div className="absolute inset-0 bg-[#C6A74A] transition-transform duration-500 group-hover:scale-110" />
            <span className="relative text-[#0B1C2D] font-black uppercase tracking-[0.4em] text-[13px]">
              Iniciar Jornada
            </span>
          </button>
          
          <a 
            href="#ecosystem" 
            onClick={handleScrollToEcosystem}
            className="group w-full sm:w-auto px-20 py-8 border border-white/10 text-white/80 font-medium uppercase tracking-[0.4em] text-[12px] hover:bg-white/5 transition-all backdrop-blur-sm"
          >
            Ecossistema
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-[#C6A74A] mt-1" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.6em] text-white font-bold">Descubra</span>
        <div className="w-[1px] h-28 bg-gradient-to-b from-[#C6A74A] via-[#C6A74A]/50 to-transparent animate-shimmer" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tracking-in {
          from { letter-spacing: 0.5em; opacity: 0; }
          to { letter-spacing: 1.3em; opacity: 0.7; }
        }
        .animate-shimmer { animation: shimmer 4s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 2.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-tracking-in { animation: tracking-in 3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
