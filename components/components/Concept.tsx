
import React from 'react';
import { COLORS } from '../constants';

const Concept: React.FC = () => {
  return (
    <section className="py-24 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[#C6A74A] text-sm uppercase tracking-[0.2em]">O Significado Fundador</span>
              <h3 className="text-4xl md:text-5xl font-serif text-white">A Dinâmica do Reino</h3>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-[#C6A74A]/30 flex items-center justify-center text-2xl font-bold text-[#C6A74A]">Λ</div>
                <div className="space-y-2">
                  <h4 className="text-white text-xl font-semibold">Montanha (Ascend)</h4>
                  <p className="text-[#BFC3C9] leading-relaxed">Representa a subida para a Altitude. O lugar da revelação, do alinhamento e da visão clara. Sem o monte, a liderança é cega.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-[#4B5340]/50 flex items-center justify-center text-2xl font-bold text-[#4B5340]">V</div>
                <div className="space-y-2">
                  <h4 className="text-white text-xl font-semibold">Vale (Venture)</h4>
                  <p className="text-[#BFC3C9] leading-relaxed">Representa a descida para a execução. O lugar do caos, do impacto real e do legado. Sem o vale, a revelação é estéril.</p>
                </div>
              </div>
            </div>

            <p className="text-lg italic text-[#C6A74A]/80 border-l-2 border-[#C6A74A] pl-6 py-2">
              "Revelação sem descida vira isolamento. Descida sem revelação vira ativismo vazio."
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-[#0B1C2D] border border-white/10 p-12 flex items-center justify-center overflow-hidden">
               {/* Visual representation aligned with the intersection logo */}
               <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M40 40 L100 160 L160 40" fill="none" stroke={COLORS.mutedAccent} strokeWidth="3" />
                  <path d="M40 160 L100 40 L160 160" fill="none" stroke={COLORS.accent} strokeWidth="3" />
                  
                  <circle cx="100" cy="40" r="4" fill={COLORS.accent} />
                  <text x="110" y="45" fill={COLORS.accent} fontSize="10" fontWeight="bold">REVELAÇÃO</text>
                  
                  <circle cx="100" cy="160" r="4" fill={COLORS.mutedAccent} />
                  <text x="110" y="165" fill={COLORS.mutedAccent} fontSize="10" fontWeight="bold">EXECUÇÃO</text>
                  
                  <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="5,5" opacity="0.1" />
               </svg>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C6A74A] opacity-10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;
