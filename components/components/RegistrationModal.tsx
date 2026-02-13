
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Loader2, AlertCircle } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // URL DEFINITIVA CONFIGURADA
  const API_URL: string = "https://sheetdb.io/api/v1/0vkaq23do67my"; 
  const WHATSAPP_LINK = "https://chat.whatsapp.com/Is9XdCmQv3MJ47xulK9TZY";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setIsLoading(false);
      setError(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data: any = Object.fromEntries(formData.entries());
    
    // Adiciona data e hora local para a coluna 'data_inscricao'
    data.data_inscricao = new Date().toLocaleString('pt-BR');

    console.log("Iniciando envio para AV Kingdom Network...");

    try {
      // O SheetDB exige que os dados venham dentro de um array chamado "data"
      const payload = {
        data: [data]
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      // O SheetDB retorna created: 1 quando tem sucesso
      if (response.ok && (result.created === 1 || result.status === 201)) {
        setIsSubmitted(true);
      } else {
        const errorMsg = result.error || "A planilha não aceitou os dados. Verifique se os nomes das colunas na Linha 1 estão exatamente como: nome, email, whatsapp, perfil, motivacao, data_inscricao";
        throw new Error(errorMsg);
      }
    } catch (err: any) {
      console.error("Erro na conexão com a planilha:", err);
      setError(err.message || "Erro de conexão. Verifique sua internet ou a configuração da planilha.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full bg-[#111111] border border-white/10 p-4 text-white focus:border-[#C6A74A] outline-none transition-all placeholder:text-white/20 disabled:opacity-50 text-sm";
  const labelClasses = "block text-[10px] uppercase tracking-[0.2em] text-[#C6A74A] font-bold mb-3";
  const sectionTitleClasses = "text-xl font-serif text-white mb-8 border-l-2 border-[#C6A74A] pl-5";

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0B1C2D]/95 backdrop-blur-lg">
        <div className="max-w-md w-full bg-[#111111] border border-[#C6A74A]/30 p-12 text-center space-y-10 relative shadow-2xl">
          <button onClick={onClose} className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors">
            <X size={24} />
          </button>
          
          <div className="flex justify-center">
            <div className="relative">
              <CheckCircle2 size={80} className="text-[#C6A74A] animate-pulse" />
              <div className="absolute inset-0 bg-[#C6A74A] blur-3xl opacity-20 rounded-full" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-serif text-white italic">Candidatura Recebida</h2>
            <p className="text-[#BFC3C9]/60 leading-relaxed text-sm font-light">
              Seus dados foram registrados em nossa arquitetura de governo. Junte-se à comunidade oficial abaixo.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 w-full py-6 bg-[#C6A74A] text-[#0B1C2D] font-black uppercase tracking-[0.2em] text-xs hover:bg-white transition-all shadow-xl active:scale-95"
            >
              <MessageCircle size={18} />
              Acessar WhatsApp
            </a>
            <button 
              onClick={onClose}
              className="w-full py-3 text-white/30 hover:text-white text-[9px] uppercase tracking-[0.3em] transition-colors"
            >
              Voltar ao Site
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1C2D]/90 backdrop-blur-md overflow-y-auto flex justify-center items-start p-4 sm:p-8">
      <div className="max-w-3xl w-full bg-[#0B1C2D] border border-white/10 relative my-4 sm:my-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col">
        {/* Header do Modal */}
        <div className="bg-[#0B1C2D] border-b border-white/10 p-8 flex items-center justify-between sticky top-0 z-20">
          <div className="space-y-1">
            <h2 className="text-2xl font-serif text-white tracking-wide">Inscrição AV Kingdom</h2>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C6A74A] font-black">Architecture for Governance</p>
          </div>
          <button onClick={onClose} className="text-white/30 hover:text-white transition-colors p-3 hover:bg-white/5 rounded-full">
            <X size={24} />
          </button>
        </div>

        {/* Mensagem de Erro */}
        {error && (
          <div className="mx-8 mt-8 p-5 bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-start gap-4 animate-in fade-in slide-in-from-top-4">
            <AlertCircle size={20} className="flex-shrink-0 text-red-500" />
            <span className="leading-relaxed">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-8 sm:p-12 space-y-14">
          
          {/* Sessão 1: Identidade */}
          <div className="space-y-8">
            <h3 className={sectionTitleClasses}>01. Identidade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className={labelClasses}>Nome Completo</label>
                <input required name="nome" type="text" placeholder="Como devemos chamá-lo?" className={inputClasses} disabled={isLoading} />
              </div>
              <div className="space-y-2">
                <label className={labelClasses}>E-mail Corporativo/Pessoal</label>
                <input required name="email" type="email" placeholder="seu@email.com" className={inputClasses} disabled={isLoading} />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className={labelClasses}>WhatsApp (com DDD)</label>
                <input required name="whatsapp" type="tel" placeholder="Ex: 11 99999 9999" className={inputClasses} disabled={isLoading} />
              </div>
            </div>
          </div>

          {/* Sessão 2: Atuação */}
          <div className="space-y-8">
            <h3 className={sectionTitleClasses}>02. Esfera de Atuação</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Empreendedor(a)", "Executivo / Gestor", "Profissional Liberal", "Líder Ministerial", "Outro"].map(opt => (
                <label key={opt} className="flex items-center gap-4 p-4 bg-[#111111] border border-white/5 cursor-pointer hover:border-[#C6A74A]/40 transition-all group">
                  <input type="radio" name="perfil" value={opt} className="accent-[#C6A74A] w-4 h-4" required disabled={isLoading} />
                  <span className="text-white/60 group-hover:text-white text-sm transition-colors">{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sessão 3: Intencionalidade */}
          <div className="space-y-8">
            <h3 className={sectionTitleClasses}>03. Intencionalidade</h3>
            <div className="space-y-2">
              <label className={labelClasses}>O que motiva sua subida à montanha conosco?</label>
              <textarea 
                name="motivacao" 
                placeholder="Descreva brevemente sua expectativa de governo..." 
                rows={4} 
                className={`${inputClasses} resize-none`} 
                disabled={isLoading}
              ></textarea>
            </div>
          </div>

          {/* Botão de Ação */}
          <div className="pt-8">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-6 bg-[#C6A74A] text-[#0B1C2D] font-black uppercase tracking-[0.3em] text-sm hover:bg-white transition-all shadow-[0_20px_40px_rgba(198,167,74,0.1)] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processando Dados...
                </>
              ) : (
                "Confirmar Candidatura"
              )}
            </button>
            <p className="mt-6 text-[9px] text-center text-white/20 uppercase tracking-[0.4em] font-medium">
              Sua privacidade é regida por nossos termos de governança.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
