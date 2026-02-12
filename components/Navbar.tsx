
import React from 'react';
import { LogoAV } from '../constants';

interface NavbarProps {
  onJoinClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1C2D]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoAV className="h-10" />
          <span className="text-white font-bold tracking-[0.2em] text-sm uppercase hidden sm:block">
            AV Kingdom Network
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a 
            href="#vision" 
            onClick={(e) => handleScroll(e, 'vision')}
            className="text-xs uppercase tracking-widest hover:text-[#C6A74A] transition-colors"
          >
            Visão
          </a>
          <a 
            href="#manifesto" 
            onClick={(e) => handleScroll(e, 'manifesto')}
            className="text-xs uppercase tracking-widest hover:text-[#C6A74A] transition-colors"
          >
            Manifesto
          </a>
          <a 
            href="#ecosystem" 
            onClick={(e) => handleScroll(e, 'ecosystem')}
            className="text-xs uppercase tracking-widest hover:text-[#C6A74A] transition-colors"
          >
            Ecossistema
          </a>
          <div className="flex items-center gap-4">
            <button 
              onClick={onJoinClick}
              className="px-8 py-2 border border-[#C6A74A] text-[#C6A74A] text-xs uppercase tracking-widest hover:bg-[#C6A74A] hover:text-[#0B1C2D] transition-all"
            >
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
