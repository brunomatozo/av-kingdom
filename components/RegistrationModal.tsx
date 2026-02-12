
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const WHATSAPP_LINK = "https://chat.whatsapp.com/Is9XdCmQv3MJ47xulK9TZY";

  // Bloquear scroll do corpo quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false); // Reset state when reopening
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const inputClasses = "w-full bg-[#111111] border border-white/10 p-3 text-white focus:border-[#C6A74A] outline-none transition-all placeholder:text-white/20";
  const labelClasses = "block text-xs uppercase tracking-widest text-[#C6A74A] font-semibold mb-2";
  const sectionTitleClasses = "text-xl font-serif text-white mb-6 border-l-2 border-[#C6A74A] pl-4";

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0B1C2D]/95 backdrop-blur-lg">
        <div className="max-w-md w-full bg-[#111111] border border-[#C6A74A]/30 p-12 text-center space-y-8 relative shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
            <X size={24} />
          </button>
          
          <div className="flex justify-center">
            <div className="relative">
              <CheckCircle2 size={72} className="text-[#C6A74A]" />
              <div className="absolute inset-0 bg-[#C6A74A] blur-2xl opacity-20 rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-white italic leading-tight">Inscrição Enviada com Sucesso</h2>
            <p className="text-[#BFC3C9]/70 leading-relaxed text-sm">
              Sua jornada AV começou. Nossa equipe de governança entrará em contato em breve. Enquanto isso, junte-se aos outros líderes em nossa comunidade oficial.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-[#C6A74A] text-[#0B1C2D] font-bold uppercase tracking-[0.15em] hover:bg-white transition-all shadow-lg active:scale-95"
            >
              <MessageCircle size={20} />
              Junte-se à Comunidade
            </a>
            <button 
              onClick={onClose}
              className="w-full py-3 text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1C2D]/90 backdrop-blur-md overflow-y-auto flex justify-center items-start p-4 sm:p-6">
      <div className="max-w-3xl w-full bg-[#0B1C2D] border border-white/10 relative my-4 sm:my-10 shadow-2xl flex flex-col">
        {/* Header - Relativo para não seguir o scroll */}
        <div className="bg-[#0B1C2D] border-b border-white/10 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-serif text-white">Inscrição AV Kingdom</h2>
            <p className="text-[10px] uppercase tracking-widest text-[#C6A74A]">Maturidade em Visão e Execução</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-12">
          
          {/* Sessão 1: Identificação */}
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Dados Pessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Nome Completo *</label>
                <input required type="text" placeholder="Sua resposta" className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>E-mail *</label>
                <input required type="email" placeholder="Seu e-mail" className={inputClasses} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses}>Telefone / WhatsApp (com DDD) *</label>
                <input required type="tel" placeholder="Ex: (11) 99999-9999" className={inputClasses} />
              </div>
            </div>
          </div>

          {/* Sessão 2: Perfil Profissional */}
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Perfil & Atuação</h3>
            
            <div className="space-y-4">
              <label className={labelClasses}>Atualmente, você se identifica como:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {["Empreendedor(a) / Dono(a) de negócio", "Profissional CLT", "Profissional PJ / Autônomo", "Líder / Gestor", "Estudante", "Outro"].map(opt => (
                  <label key={opt} className="flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer hover:border-[#C6A74A]/30 transition-all">
                    <input type="radio" name="profile" value={opt} className="accent-[#C6A74A]" />
                    <span className="text-white/70">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className={labelClasses}>Você possui empresa própria?</label>
                <div className="flex gap-4">
                  {["Sim", "Não"].map(opt => (
                    <label key={opt} className="flex-1 flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer">
                      <input type="radio" name="hasCompany" value={opt} className="accent-[#C6A74A]" />
                      <span className="text-white/70">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClasses}>Nome da empresa (se houver)</label>
                <input type="text" placeholder="Sua resposta" className={inputClasses} />
              </div>
            </div>

            <div>
              <label className={labelClasses}>Ramo / segmento de atuação</label>
              <input type="text" placeholder="Ex: tecnologia, saúde, comércio..." className={inputClasses} />
            </div>

            <div className="space-y-4">
              <label className={labelClasses}>Há quanto tempo você atua nesse negócio ou carreira?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {["Menos de 1 ano", "1 a 3 anos", "3 a 5 anos", "Mais de 5 anos"].map(opt => (
                  <label key={opt} className="flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer">
                    <input type="radio" name="experience" value={opt} className="accent-[#C6A74A]" />
                    <span className="text-white/70">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sessão 3: Porte e Operação */}
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Estrutura Atual</h3>
            
            <div className="space-y-4">
              <label className={labelClasses}>Quantas pessoas trabalham na empresa?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {["Apenas eu", "2 a 5 pessoas", "6 a 10 pessoas", "11 a 30 pessoas", "Mais de 30 pessoas"].map(opt => (
                  <label key={opt} className="flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer">
                    <input type="radio" name="teamSize" value={opt} className="accent-[#C6A74A]" />
                    <span className="text-white/70">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className={labelClasses}>Como você definiria o porte do seu negócio?</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {["Em fase inicial", "Em crescimento", "Estável", "Em reestruturação", "Ainda não tenho empresa"].map(opt => (
                  <label key={opt} className="flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer">
                    <input type="radio" name="businessStage" value={opt} className="accent-[#C6A74A]" />
                    <span className="text-white/70">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sessão 4: Intencionalidade */}
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Propósito & Desafios</h3>
            
            <div>
              <label className={labelClasses}>O que te motivou a entrar nesta mentoria?</label>
              <textarea placeholder="Sua resposta" rows={3} className={inputClasses}></textarea>
            </div>

            <div>
              <label className={labelClasses}>Quais são suas principais expectativas?</label>
              <textarea placeholder="Ex: clareza, crescimento espiritual, liderança..." rows={3} className={inputClasses}></textarea>
            </div>

            <div>
              <label className={labelClasses}>Maiores desafios que você enfrenta hoje?</label>
              <textarea placeholder="Ex: financeiros, foco, tomada de decisão..." rows={3} className={inputClasses}></textarea>
            </div>

            <div>
              <label className={labelClasses}>Se pudesse resolver UM problema hoje, qual seria?</label>
              <textarea placeholder="Sua resposta" rows={2} className={inputClasses}></textarea>
            </div>
          </div>

          {/* Sessão 5: Compromisso */}
          <div className="space-y-6 bg-[#C6A74A]/5 p-6 border border-[#C6A74A]/10">
            <h3 className={sectionTitleClasses}>Alinhamento de Princípios</h3>
            <label className={labelClasses}>Você está disposto(a) a aplicar princípios bíblicos mesmo que exija mudanças?</label>
            <div className="space-y-3 text-sm">
              {["Sim", "Sim, e estou comprometido(a)", "Ainda estou em processo"].map(opt => (
                <label key={opt} className="flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer hover:border-[#C6A74A]">
                  <input type="radio" name="commitment" value={opt} className="accent-[#C6A74A]" />
                  <span className="text-white/70">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className="w-full py-5 bg-[#C6A74A] text-[#0B1C2D] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-[0.98]"
            >
              Confirmar Inscrição na Jornada
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
