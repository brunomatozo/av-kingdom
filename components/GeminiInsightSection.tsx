
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
    
    // Pequeno delay para garantir o reset visual antes de começar a digitar
    setTimeout(() => {
      typingTimerRef.current = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          if (typingTimerRef.current) clearInterval(typingTimerRef.current);
        }
      }, 30);
    }, 50);
  }, []);

  const fetchInsight = useCallback(async (newTopic?: string) => {
    setLoading(true);
    const targetTopic = newTopic || topic;
    setDisplayedText(""); 
    
    try {
      const res = await getAVInsight(targetTopic);
      typeText(res);
    } catch (err) {
      const safetyPhrases = [
        "O silêncio do monte precede o decreto no vale.",
        "A visão é a única bússola que não falha na altitude.",
        "Governar é manifestar o invisível com precisão.",
        "A arquitetura do Reino é construída com revelação."
      ];
      const randomSafety = safetyPhrases[Math.floor(Math.random() * safetyPhrases.length)];
      typeText(randomSafety);
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

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#C6A74A]/10 rounded-full border border-[#C6A74A]/20 mb-12">
          <Sparkles size={16} className="text-[#C6A74A]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C6A74A] font-black">Revelação em Tempo Real</span>
        </div>

        <div className="min-h-[260px] flex flex-col items-center justify-center">
          {loading && !displayedText ? (
            <div className="flex flex-col items-center gap-6 animate-in fade-in duration-700">
              <div className="relative">
                <RefreshCw className="animate-spin text-[#C6A74A]" size={48} />
                <div className="absolute inset-0 blur-2xl bg-[#C6A74A]/20 animate-pulse" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Consultando a Montanha...</span>
            </div>
          ) : (
            <div className="space-y-12 w-full animate-in fade-in duration-500">
              <div className="relative inline-block w-full max-w-5xl">
                <p className="text-3xl md:text-5xl lg:text-6xl font-serif text-white italic leading-[1.4] mx-auto min-h-[1.5em] px-8 overflow-visible flex items-center justify-center flex-wrap">
                  <span className="text-[#C6A74A] opacity-40 mr-2 not-italic">"</span>
                  <span>{displayedText}</span>
                  <span className="text-[#C6A74A] opacity-40 ml-1 not-italic">"</span>
                  <span className="inline-block w-1.5 h-10 md:h-14 bg-[#C6A74A] ml-4 animate-pulse align-middle" />
                </p>
              </div>
              
              <button 
                onClick={() => fetchInsight()}
                disabled={loading}
                className="group relative flex items-center gap-4 mx-auto px-10 py-4 border border-[#C6A74A]/30 text-[#C6A74A] text-[10px] uppercase tracking-[0.4em] font-black hover:bg-[#C6A74A] hover:text-[#0B1C2D] transition-all disabled:opacity-20 shadow-lg hover:shadow-[#C6A74A]/20"
              >
                <Zap size={14} className={loading ? "animate-bounce" : "group-hover:rotate-12 transition-transform"} />
                {loading ? "Processando..." : "Gerar Nova Visão"}
              </button>
            </div>
          )}
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-3 md:gap-5">
          {topics.map((t) => (
            <button
              key={t}
              disabled={loading}
              onClick={() => handleTopicChange(t)}
              className={`px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-black border transition-all duration-500 relative overflow-hidden group ${
                topic === t 
                ? 'bg-[#C6A74A] text-[#0B1C2D] border-[#C6A74A] shadow-[0_0_30px_rgba(198,167,74,0.4)] scale-105' 
                : 'border-white/10 text-white/40 hover:text-white hover:border-[#C6A74A]/50'
              }`}
            >
              <span className="relative z-10">{t}</span>
              {topic === t && (
                <span className="absolute inset-0 bg-white/20 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeminiInsightSection;
