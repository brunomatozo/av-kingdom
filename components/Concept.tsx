
import React from 'react';
import { COLORS } from '../constants';

const Concept: React.FC = () => {
  return (
    <section className="py-32 bg-[#111111] border-y border-white/5 relative overflow-hidden">
      {/* Elemento Decorativo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C6A74A]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1 border border-[#C6A74A]/30 text-[#C6A74A] text-[10px] uppercase tracking-[0.4em] font-bold">
                Foundational Meaning
              </span>
              <h3 className="text-5xl md:text-6xl font-serif text-white leading-tight">A Dinâmica Sagrada do Governo</h3>
            </div>
            
            <div className="space-y-12">
              <div className="group flex gap-8 p-6 hover:bg-white/[0.02] transition-colors duration-500 rounded-lg border border-transparent hover:border-white/5">
                <div className="flex-shrink-0 w-16 h-16 border border-[#C6A74A]/30 flex items-center justify-center text-3xl font-light text-[#C6A74A] group-hover:bg-[#C6A74A] group-hover:text-[#0B1C2D] transition-all duration-500">Λ</div>
                <div className="space-y-3">
                  <h4 className="text-white text-2xl font-serif italic">Montanha (Ascend)</h4>
                  <p className="text-[#BFC3C9]/70 leading-relaxed font-light">O lugar da solitude e da altitude. Onde o ruído do mundo cede espaço à voz da revelação. Sem a montanha, a estratégia é apenas suposição humana.</p>
                </div>
              </div>

              <div className="group flex gap-8 p-6 hover:bg-white/[0.02] transition-colors duration-500 rounded-lg border border-transparent hover:border-white/5">
                <div className="flex-shrink-0 w-16 h-16 border border-[#4B5340]/50 flex items-center justify-center text-3xl font-light text-[#4B5340] group-hover:bg-[#4B5340] group-hover:text-white transition-all duration-500">V</div>
                <div className="space-y-3">
                  <h4 className="text-white text-2xl font-serif italic">Vale (Venture)</h4>
                  <p className="text-[#BFC3C9]/70 leading-relaxed font-light">O campo da materialização. Onde a visão encontra a resistência da realidade e se transforma em legado. Sem o vale, a revelação é fumaça.</p>
                </div>
              </div>
            </div>

            <div className="relative p-8 border-l border-[#C6A74A]/30">
              <p className="text-xl md:text-2xl italic text-[#C6A74A] font-serif leading-relaxed opacity-90">
                "Subimos para ouvir o que ninguém ouve. Descemos para construir o que ninguém viu."
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-square bg-[#0B1C2D] border border-white/10 p-8 sm:p-16 flex items-center justify-center overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-[#C6A74A]/20">
               {/* Visual Side-by-Side (A and V separated) */}
               <svg viewBox="0 0 240 200" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Λ - Montanha (A) - Lado Esquerdo */}
                  <g className="transition-transform duration-700 group-hover:-translate-y-2">
                    <path d="M20 160 L70 40 L120 160" fill="none" stroke={COLORS.accent} strokeWidth="3" filter="url(#glow)" />
                    <circle cx="70" cy="40" r="4" fill={COLORS.accent} />
                    <text x="35" y="30" fill={COLORS.accent} fontSize="9" fontWeight="bold" letterSpacing="1" className="font-serif italic">REVELAÇÃO</text>
                  </g>
                  
                  {/* V - Vale (V) - Lado Direito */}
                  <g className="transition-transform duration-700 group-hover:translate-y-2">
                    <path d="M120 40 L170 160 L220 40" fill="none" stroke={COLORS.mutedAccent} strokeWidth="3" />
                    <circle cx="170" cy="160" r="4" fill={COLORS.mutedAccent} />
                    <text x="135" y="185" fill={COLORS.mutedAccent} fontSize="9" fontWeight="bold" letterSpacing="1" className="font-serif italic">EXECUÇÃO</text>
                  </g>

                  {/* Linha de Horizonte / Equilíbrio */}
                  <line x1="10" y1="100" x2="230" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="6,6" opacity="0.1" />
               </svg>
            </div>
            {/* Sombras e Reflexos */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C6A74A]/5 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4B5340]/10 blur-3xl rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
