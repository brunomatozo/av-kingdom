
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
  
  /**
   * CAMINHO MAIS FÁCIL:
   * 1. Crie sua Planilha Google.
   * 2. Vá em https://sheetdb.io/ e cole o link da sua planilha lá.
   * 3. Eles vão te dar uma "API URL". Cole ela abaixo:
   */
  const API_URL = "https://sheetdb.io/api/v1/eu9o7yopa185t"; 
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
    const data = Object.fromEntries(formData.entries());
    
    // Adiciona data e hora local
    data.data_inscricao = new Date().toLocaleString('pt-BR');

    try {
      if (API_URL === https://sheetdb.io/api/v1/eu9o7yopa185t") {
        // Modo demonstração se não houver URL
        console.log("Simulando envio de dados:", data);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitted(true);
      } else {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data: [data] }) // Formato padrão do SheetDB
        });

        if (response.ok) {
          setIsSubmitted(true);
        } else {
          throw new Error("Falha ao registrar na planilha.");
        }
      }
    } catch (err) {
      console.error("Erro na conexão:", err);
      setError("Não conseguimos conectar à planilha. Verifique a URL ou tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full bg-[#111111] border border-white/10 p-3 text-white focus:border-[#C6A74A] outline-none transition-all placeholder:text-white/20 disabled:opacity-50";
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
            <h2 className="text-3xl font-serif text-white italic leading-tight">Inscrição Enviada</h2>
            <p className="text-[#BFC3C9]/70 leading-relaxed text-sm">
              Seus dados foram registrados com sucesso. Junte-se à nossa comunidade para os próximos passos.
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
              Entrar no WhatsApp
            </a>
            <button 
              onClick={onClose}
              className="w-full py-3 text-white/40 hover:text-white text-[10px] uppercase tracking-widest transition-colors"
            >
              Fechar Janela
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B1C2D]/90 backdrop-blur-md overflow-y-auto flex justify-center items-start p-4 sm:p-6">
      <div className="max-w-3xl w-full bg-[#0B1C2D] border border-white/10 relative my-4 sm:my-10 shadow-2xl flex flex-col">
        <div className="bg-[#0B1C2D] border-b border-white/10 p-6 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-serif text-white">Inscrição AV Kingdom</h2>
            <p className="text-[10px] uppercase tracking-widest text-[#C6A74A]">Maturidade em Visão e Execução</p>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <X size={24} />
          </button>
        </div>

        {error && (
          <div className="m-6 p-4 bg-red-500/10 border border-red-500/50 text-red-200 text-sm flex items-center gap-3">
            <AlertCircle size={18} />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-12">
          
          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Dados Pessoais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>Nome Completo *</label>
                <input required name="nome" type="text" placeholder="Sua resposta" className={inputClasses} disabled={isLoading} />
              </div>
              <div>
                <label className={labelClasses}>E-mail *</label>
                <input required name="email" type="email" placeholder="Seu e-mail" className={inputClasses} disabled={isLoading} />
              </div>
              <div className="md:col-span-2">
                <label className={labelClasses}>Telefone / WhatsApp (com DDD) *</label>
                <input required name="whatsapp" type="tel" placeholder="Ex: (11) 99999-9999" className={inputClasses} disabled={isLoading} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Perfil & Atuação</h3>
            
            <div className="space-y-4">
              <label className={labelClasses}>Atualmente, você se identifica como:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                {["Empreendedor(a)", "CLT", "PJ / Autônomo", "Líder / Gestor", "Estudante", "Outro"].map(opt => (
                  <label key={opt} className="flex items-center gap-3 p-3 bg-[#111111] border border-white/5 cursor-pointer hover:border-[#C6A74A]/30 transition-all">
                    <input type="radio" name="perfil" value={opt} className="accent-[#C6A74A]" required disabled={isLoading} />
                    <span className="text-white/70">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className={sectionTitleClasses}>Propósito</h3>
            <div>
              <label className={labelClasses}>O que te motivou a entrar nesta mentoria?</label>
              <textarea name="motivacao" placeholder="Sua resposta" rows={3} className={inputClasses} disabled={isLoading}></textarea>
            </div>
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-5 bg-[#C6A74A] text-[#0B1C2D] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Processando...
                </>
              ) : (
                "Confirmar Inscrição"
              )}
            </button>
            {API_URL === "https://sheetdb.io/api/v1/eu9o7yopa185t" && (
              <p className="mt-4 text-[10px] text-center text-white/30 uppercase tracking-widest">
                Modo de Demonstração (Sem URL de API)
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;
