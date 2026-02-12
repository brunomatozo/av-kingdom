
import React from 'react';
import { Briefcase, Users, Hammer, TrendingUp, GraduationCap, Coins } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const brands = [
    { icon: <Coins size={28} />, name: "AV Capital", desc: "Gestão patrimonial e estruturação institucional sob princípios de governo." },
    { icon: <Briefcase size={28} />, name: "AV Venture Capital", desc: "Investimento em teses de transformação e builders de longo prazo." },
    { icon: <Users size={28} />, name: "AV Community", desc: "Networking de alto nível para líderes que buscam alinhamento estratégico." },
    { icon: <Hammer size={28} />, name: "AV Builder", desc: "Ecossistema de construção de soluções e empresas nativas do Reino." },
    { icon: <TrendingUp size={28} />, name: "AV Acceleration", desc: "Escalabilidade de negócios com propósito e fundações sólidas." },
    { icon: <GraduationCap size={28} />, name: "AV Institute", desc: "Base de conhecimento e formação para a nova arquitetura de liderança." },
  ];

  return (
    <section id="ecosystem" className="py-32 bg-[#111111] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <span className="text-[#C6A74A] text-sm uppercase tracking-[0.2em]">Escalabilidade</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Arquitetura do Ecossistema</h2>
          <p className="text-[#BFC3C9]/60 max-w-2xl mx-auto">Tudo nasce do mesmo símbolo. Um ecossistema completo para governar ambos os reinos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <div key={idx} className="group p-10 bg-[#0B1C2D] border border-white/5 hover:border-[#C6A74A]/40 transition-all duration-500 flex flex-col items-start gap-6">
              <div className="text-[#C6A74A] p-3 border border-[#C6A74A]/20 group-hover:bg-[#C6A74A] group-hover:text-[#0B1C2D] transition-all">
                {brand.icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-white group-hover:text-[#C6A74A] transition-colors">{brand.name}</h4>
                <p className="text-[#BFC3C9]/70 text-sm leading-relaxed">{brand.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
