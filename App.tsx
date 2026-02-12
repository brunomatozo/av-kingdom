
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Manifesto from './components/Manifesto';
import Ecosystem from './components/Ecosystem';
import GeminiInsightSection from './components/GeminiInsightSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const WHATSAPP_LINK = "https://chat.whatsapp.com/Is9XdCmQv3MJ47xulK9TZY";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen selection:bg-[#C6A74A] selection:text-[#0B1C2D] bg-[#0B1C2D] relative font-sans">
      {/* Texture Layer (Luxury Grain) - Camada de grão que dá o aspecto de site de luxo */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <Navbar onJoinClick={openModal} />
      <main>
        <Hero onStartClick={openModal} />
        <Concept />
        <Manifesto />
        <Ecosystem />
        <GeminiInsightSection />
        
        {/* Chamada Final de Impacto */}
        <section className="py-48 px-6 text-center bg-[#111111] relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#C6A74A]/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif text-white">Pronto para assumir o governo?</h2>
            <p className="text-lg text-[#BFC3C9]/50 max-w-2xl mx-auto leading-relaxed font-light">
              Junte-se a uma rede exclusiva de arquitetos de liderança que buscam a revelação na montanha para governar no vale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-20 py-7 bg-[#C6A74A] text-[#0B1C2D] font-bold uppercase tracking-[0.3em] text-[12px] hover:scale-105 transition-all duration-500 shadow-[0_0_60px_rgba(198,167,74,0.1)]"
              >
                Candidatar-se à Rede
              </button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-20 py-7 border border-[#C6A74A]/30 text-[#C6A74A] font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-[#C6A74A]/10 transition-all"
              >
                WhatsApp Oficial
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
