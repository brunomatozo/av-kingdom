
import React from 'react';
import { LogoAV } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 bg-[#0B1C2D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <LogoAV className="h-10" />
              <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">AV Kingdom Network</span>
            </div>
            <p className="text-[#BFC3C9]/60 max-w-sm text-sm leading-relaxed">
              Uma rede global de governança estratégica e espiritual, focada na transformação real do vale através da visão recebida na montanha.
            </p>
          </div>

          <div className="space-y-6">
            <h5 className="text-white text-xs uppercase tracking-widest font-bold">Navegação</h5>
            <ul className="space-y-4 text-sm text-[#BFC3C9]/60">
              <li>
                <a 
                  href="#vision" 
                  onClick={(e) => handleScroll(e, 'vision')}
                  className="hover:text-[#C6A74A] transition-colors"
                >
                  A Nossa Visão
                </a>
              </li>
              <li>
                <a 
                  href="#manifesto" 
                  onClick={(e) => handleScroll(e, 'manifesto')}
                  className="hover:text-[#C6A74A] transition-colors"
                >
                  O Manifesto
                </a>
              </li>
              <li>
                <a 
                  href="#ecosystem" 
                  onClick={(e) => handleScroll(e, 'ecosystem')}
                  className="hover:text-[#C6A74A] transition-colors"
                >
                  Ecossistema
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-white text-xs uppercase tracking-widest font-bold">Contato</h5>
            <ul className="space-y-4 text-sm text-[#BFC3C9]/60">
              <li>Liderança & Governança</li>
              <li>network@avkingdom.net</li>
              <li>São Paulo | Global</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-widest text-[#BFC3C9]/30">
            © 2024 AV Kingdom Network. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[#BFC3C9]/30">
            <span className="hover:text-[#C6A74A] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#C6A74A] cursor-pointer transition-colors">Terms of Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
