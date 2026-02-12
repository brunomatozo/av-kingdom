
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-32 bg-[#0B1C2D] relative overflow-hidden scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-16">
        <div className="space-y-4">
          <span className="text-[#C6A74A] text-xs uppercase tracking-[0.5em]">The Essence</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white italic">Manifesto AV</h2>
        </div>

        <div className="space-y-8 text-xl md:text-2xl font-light text-[#BFC3C9] leading-relaxed max-w-3xl mx-auto">
          <p>Nós não fomos chamados apenas para subir. Nem apenas para descer.</p>
          <p>Fomos chamados para entender o ritmo do Reino.</p>
          <p>Há momentos de <span className="text-white font-medium">altitude</span>. Há momentos de <span className="text-white font-medium">vale</span>.</p>
          <p>No monte recebemos visão. No vale executamos propósito.</p>
          <div className="w-12 h-px bg-[#C6A74A] mx-auto my-12" />
          <p className="text-white font-serif text-3xl italic">"Jesus subiu. Mas Ele desceu. E foi no vale que o milagre aconteceu."</p>
          <div className="w-12 h-px bg-[#C6A74A] mx-auto my-12" />
          <p>AV não é um nome. É um ciclo. É uma disciplina. É uma arquitetura de liderança.</p>
          <p className="text-[#C6A74A] font-medium tracking-[0.2em] uppercase text-base">Revelação que não gera ação é fuga. Ação sem revelação é ruído.</p>
        </div>

        <div className="pt-12">
           <h3 className="text-white font-bold tracking-[0.6em] text-2xl">ESTE É O NOSSO GOVERNO.</h3>
        </div>
      </div>
      
      {/* Background large AV watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02]">
        <span className="text-[40vw] font-bold text-white">AV</span>
      </div>
    </section>
  );
};

export default Manifesto;
