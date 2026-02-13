
import { GoogleGenAI } from "@google/genai";

export const getAVInsight = async (topic: string): Promise<string> => {
  // Fallbacks ricos e variados para caso de falha na rede
  const fallbacks: Record<string, string[]> = {
    "Liderança": [
      "A altitude da montanha revela o que a agitação do vale tenta esconder.",
      "Governo não é cargo, é a frequência da sua subida ao monte.",
      "Líderes de vale sobrevivem; arquitetos de montanha governam."
    ],
    "Finanças": [
      "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
      "O ouro serve ao propósito, ou o propósito se torna escravo do ouro.",
      "Abundância no vale exige clareza de gestão na montanha."
    ],
    "Inovação": [
      "Inovação sem revelação é apenas pressa tecnológica.",
      "O novo não vem do futuro, vem da altitude da visão.",
      "Tecnologia é a ferramenta; a revelação é o sistema operacional."
    ],
    "Propósito": [
      "Você não cria seu propósito, você o descobre na solitude.",
      "A execução no vale é proporcional à entrega na montanha.",
      "Propósito é o mapa que a altitude desenha no seu espírito."
    ]
  };

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Adicionamos um timestamp ou valor aleatório para garantir que a IA não cacheie a mesma resposta
    const seed = Math.random().toString(36).substring(7);

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `CONTEXTO: AV Kingdom Network (Arquitetura de Governo: Montanha/Visão e Vale/Execução).
      TAREFA: Gere um insight inédito, curto e impactante sobre "${topic}".
      REGRAS:
      1. Use tom profético, minimalista e soberano.
      2. Máximo 100 caracteres.
      3. Use a lógica: Para governar no vale (ação), é preciso subir a montanha (revelação).
      4. Varie o vocabulário. Não comece sempre do mesmo jeito.
      5. Seed de aleatoriedade: ${seed}.
      6. Idioma: Português Brasileiro.`,
      config: {
        temperature: 1.0, // Aumentamos a criatividade
        topP: 0.95,
      }
    });
    
    const text = response.text;
    if (!text) throw new Error("Empty response");
    
    return text.trim().replace(/^"|"$/g, '');
  } catch (error) {
    console.error("Erro Gemini Insight:", error);
    const list = fallbacks[topic] || ["O governo exige o equilíbrio entre a altitude da visão e a profundidade da entrega."];
    return list[Math.floor(Math.random() * list.length)];
  }
};
