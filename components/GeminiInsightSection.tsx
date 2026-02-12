
import React, { useState, useEffect } from 'react';
import { getAVInsight } from '../services/geminiService';
import { Sparkles, RefreshCw } from 'lucide-react';

const GeminiInsightSection: React.FC = () => {
  const [insight, setInsight] = useState<string>("Buscando visão estratégica...");
  const [topic, setTopic] = useState<string>("Liderança");
  const [loading, setLoading] = useState<boolean>(true);

  const topics = ["Finanças", "Inovação", "Gestão de Pessoas", "Legado", "Propósito", "Escalabilidade"];

  const fetchInsight = async (newTopic?: string) => {
    setLoading(true);
    const t = newTopic || topic;
    const res = await getAVInsight(t);
    setInsight(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0B1C2D]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6A74A]/10 rounded-full border border-[#C6A74A]/20 mb-8">
          <Sparkles size={14} className="text-[#C6A74A]" />
          <span className="text-[10px] uppercase tracking-widest text-[#C6A74A] font-bold">IA-Powered AV Insights</span>
        </div>

        <div className="space-y-12">
          <div className="min-h-[160px] flex items-center justify-center">
            {loading ? (
              <RefreshCw className="animate-spin text-[#C6A74A]" />
            ) : (
              <p className="text-2xl md:text-3xl font-serif text-white italic leading-relaxed">
                "{insight}"
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => { setTopic(t); fetchInsight(t); }}
                className={`px-4 py-1 text-[10px] uppercase tracking-widest border transition-all ${
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
