
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { getAVInsight } from '../services/geminiService';
import { Sparkles, RefreshCw, Zap } from 'lucide-react';

const GeminiInsightSection: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [topic, setTopic] = useState<string>("Liderança");
  const [loading, setLoading] = useState<boolean>(true);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const topics = ["Liderança", "Finanças", "Inovação", "Gestão", "Legado", "Propósito"];

  const typeText = useCallback((text: string) => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setDisplayedText("");
    let i = 0;
    typingTimerRef.current = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      }
    }, 25);
  }, []);

  const fetchInsight = useCallback(async (newTopic?: string) => {
    setLoading(true);
    const targetTopic = newTopic || topic;
    
    // Pequeno delay visual para o usuário sentir a "busca"
    setDisplayedText(""); 
    
    try {
      const res = await getAVInsight(targetTopic);
      typeText(res);
    } catch (err) {
      // Se até o serviço falhar (o que não deve ocorrer pelo try/catch interno dele), 
      // usamos uma variação rápida aqui também.
      const emergency = "A clareza precede o governo.";
      typeText(emergency);
    } finally {
      setLoading(false);
    }
  }, [topic, typeText]);

  useEffect(() => {
    fetchInsight();
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, []);

  const handleTopicChange = (t: string) => {
    if (loading) return;
    setTopic(t);
    fetchInsight(t);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-[#111111] to-[#0B1C2D] border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C6A74A]/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#C6A74A]/10 rounded-full border border-[#C6A74A]/20 mb-12 animate-pulse">
          <Sparkles size={16} className="text-[#C6A74A]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C6A74A] font-black">Revelação em Tempo Real</span>
        </div>

        <div className="min-h-[200px] flex flex-col items-center justify-center">
          {loading && !displayedText ? (
            <div className="flex flex-col items-center gap-6 animate-in fade-in duration-500">
              <RefreshCw className="animate-spin text-[#C6A74A]" size={48} />
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Acessando a Montanha...</span>
            </div>
          ) : (
            <div className="space-y-10 w-full animate-in zoom-in-95 duration-500">
              <p className="text-3xl md:text-5xl font-serif text-white italic leading-[1.3] max-w-4xl mx-auto min-h-[1.5em]">
                {displayedText ? `"${displayedText}"` : ""}
                <span className="inline-block w-1 h-8 bg-[#C6A74A] ml-2 animate-pulse align-middle" />
              </p>
              
              <button 
                onClick={() => fetchInsight()}
                disabled={loading}
                className="group flex items-center gap-3 mx-auto px-6 py-3 border border-[#C6A74A]/30 text-[#C6A74A] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C6A74A] hover:text-[#0B1C2D] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <Zap size={14} className={loading ? "animate-bounce" : ""} />
                {loading ? "Processando..." : "Gerar Nova Visão"}
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {topics.map((t) => (
            <button
              key={t}
              disabled={loading}
              onClick={() => handleTopicChange(t)}
              className={`px-6 py-2 text-[10px] uppercase tracking-[0.3em] font-bold border transition-all duration-500 ${
                topic === t 
                ? 'bg-[#C6A74A] text-[#0B1C2D] border-[#C6A74A] shadow-[0_0_20px_rgba(198,167,74,0.3)]' 
                : 'border-white/10 text-white/40 hover:text-white hover:border-[#C6A74A]/50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeminiInsightSection;
