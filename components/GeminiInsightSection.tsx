
import React, { useState, useEffect, useCallback } from 'react';
import { getAVInsight } from '../services/geminiService';
import { Sparkles, RefreshCw } from 'lucide-react';

const GeminiInsightSection: React.FC = () => {
  const [insight, setInsight] = useState<string>("Buscando visão estratégica...");
  const [topic, setTopic] = useState<string>("Liderança");
  const [loading, setLoading] = useState<boolean>(true);

  const topics = ["Finanças", "Inovação", "Gestão de Pessoas", "Legado", "Propósito", "Escalabilidade"];

  const fetchInsight = useCallback(async (newTopic?: string) => {
    setLoading(true);
    const t = newTopic || topic;
    try {
      // Definimos um timeout de segurança para não travar a UI
      const res = await Promise.race([
        getAVInsight(t),
        new Promise<string>((_, reject) => setTimeout(() => reject(new Error('Timeout')), 8000))
      ]);
      setInsight(res);
    } catch (err) {
      console.warn("Falha ao obter insight via Gemini, usando fallback local.", err);
      // Fallback manual caso o serviço falhe completamente
      const fallbacks: Record<string, string> = {
        "Finanças": "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
        "Inovação": "Inovação sem revelação é apenas pressa tecnológica.",
        "Gestão de Pessoas": "Liderar é servir a visão através do desenvolvimento do próximo.",
        "Legado": "O legado não é o que você deixa, mas quem você transforma.",
        "Propósito": "Sua subida à montanha define a clareza da sua execução no vale.",
        "Escalabilidade": "Só escala o que tem raízes profundas na verdade.",
        "Liderança": "A altitude revela o que a agitação do vale oculta."
      };
      setInsight(fallbacks[t] || "O governo exige visão estratégica e execução precisa.");
    } finally {
      setLoading(false);
    }
  }, [topic]);

  useEffect(() => {
    fetchInsight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0B1C2D] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6A74A]/10 rounded-full border border-[#C6A74A]/20 mb-8">
          <Sparkles size={14} className="text-[#C6A74A]" />
          <span className="text-[10px] uppercase tracking-widest text-[#C6A74A] font-bold">IA-Powered AV Insights</span>
        </div>

        <div className="space-y-12">
          <div className="min-h-[160px] flex items-center justify-center relative">
            {loading ? (
              <div className="flex flex-col items-center gap-4">
                <RefreshCw className="animate-spin text-[#C6A74A]" size={32} />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Processando Visão...</span>
              </div>
            ) : (
              <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed animate-in fade-in duration-700">
                "{insight}"
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((t) => (
              <button
                key={t}
                disabled={loading}
                onClick={() => { setTopic(t); fetchInsight(t); }}
                className={`px-4 py-1 text-[10px] uppercase tracking-widest border transition-all disabled:opacity-50 ${
                  topic === t ? 'bg-[#C6A74A] text-[#0B1C2D] border-[#C6A74A]' : 'border-white/10 text-white/40 hover:text-white hover:border-white/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiInsightSection;
