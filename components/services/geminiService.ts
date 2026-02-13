
import { GoogleGenAI } from "@google/genai";

export const getAVInsight = async (topic: string): Promise<string> => {
  const fallbacks: Record<string, string> = {
    "Liderança": "A altitude da montanha revela o que a agitação do vale tenta esconder.",
    "Finanças": "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
    "Inovação": "Inovação sem revelação é apenas pressa tecnológica; o Reino inova pelo alinhamento.",
    "Propósito": "Você não cria seu propósito, você o descobre na subida e o manifesta na descida.",
    "Escalabilidade": "Só escala o que tem raízes profundas no solo da obediência estratégica.",
    "Legado": "O legado não é o que você deixa para as pessoas, mas o que você deixa nelas."
  };

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Aja como o Oráculo Estratégico da AV Kingdom Network. 
      Com base na filosofia "Ascend for Vision, Venture for Execution", 
      gere um insight de governo profundo e soberano (máximo 120 caracteres) sobre: ${topic}. 
      Linguagem: Português BR. Tom: Minimalista e Profético. 
      Não use emojis. Não use introduções. Não cite o tópico na resposta.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    
    const text = response.text;
    if (!text) throw new Error("Empty response");
    
    return text.trim().replace(/^"|"$/g, '');
  } catch (error) {
    console.error("Erro Crítico Gemini:", error);
    return fallbacks[topic] || "O governo exige o equilíbrio entre a altitude da visão e a profundidade da entrega.";
  }
};
