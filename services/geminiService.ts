
import { GoogleGenAI } from "@google/genai";

export const getAVInsight = async (topic: string): Promise<string> => {
  // Inicializa a IA usando a chave de ambiente injetada pela Vercel/GitHub
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  // Respostas de reserva (Fallback) caso a API esteja fora do ar
  const fallbacks: Record<string, string> = {
    "Liderança": "A altitude da montanha revela o que a agitação do vale tenta esconder.",
    "Finanças": "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
    "Inovação": "Inovação sem revelação é apenas pressa tecnológica; o Reino inova pelo alinhamento.",
    "Propósito": "Você não cria seu propósito, você o descobre na subida e o manifesta na descida.",
    "Escalabilidade": "Só escala o que tem raízes profundas no solo da obediência estratégica.",
    "Legado": "O legado não é o que você deixa para as pessoas, mas o que você deixa nelas."
  };

  if (!process.env.API_KEY) {
    return fallbacks[topic] || "Subimos para ouvir. Descemos para agir.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Aja como o Oráculo Estratégico da AV Kingdom Network. 
      Com base na filosofia "Ascend for Vision, Venture for Execution", 
      gere um insight de governo profundo, soberano e altamente prático (máximo 120 caracteres) sobre: ${topic}. 
      Linguagem: Português BR. Tom: Minimalista, Profético e Autoritativo. 
      Não use emojis. Não use hashtags. Não use introduções como "Aqui está".`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    
    // Retorna o texto limpo da resposta do Gemini
    return response.text?.trim().replace(/^"|"$/g, '') || fallbacks[topic] || "O governo exige o equilíbrio entre a visão e a entrega.";
  } catch (error) {
    console.error("Erro Gemini:", error);
    return fallbacks[topic] || "O governo exige o equilíbrio entre a altitude da visão e a profundidade da entrega.";
  }
};
