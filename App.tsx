
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
    <div className="min-h-screen selection:bg-[#C6A74A] selection:text-[#0B1C2D]">
      <Navbar onJoinClick={openModal} />
      <main>
        <Hero onStartClick={openModal} />
        <Concept />
        <Manifesto />
        <Ecosystem />
        <GeminiInsightSection />
        
        {/* Call to Action Section */}
        <section className="py-32 px-6 text-center bg-[#111111]">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Pronto para governar os dois reinos?</h2>
            <p className="text-lg text-[#BFC3C9]/70">
              Junte-se a uma rede de líderes comprometidos com a visão clara e a execução impecável.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={openModal}
                className="w-full sm:w-auto px-12 py-5 bg-[#C6A74A] text-[#0B1C2D] font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300"
              >
                Candidatar-se à Rede
              </button>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-12 py-5 border border-[#C6A74A] text-[#C6A74A] font-bold uppercase tracking-widest hover:bg-[#C6A74A] hover:text-[#0B1C2D] transition-all"
              >
                Comunidade WhatsApp
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
