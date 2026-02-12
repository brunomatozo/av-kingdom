
import { GoogleGenAI } from "@google/genai";

// Função para obter a API Key de forma segura
const getApiKey = () => {
  try {
    // Em produção (Vercel/Netlify), o process.env.API_KEY estará disponível
    return (typeof process !== 'undefined' && process.env.API_KEY) ? process.env.API_KEY : '';
  } catch {
    return '';
  }
};

export const getAVInsight = async (topic: string): Promise<string> => {
  const apiKey = getApiKey();
  
  // Se não houver chave, retorna frases pré-definidas da filosofia AV
  if (!apiKey || apiKey === 'YOUR_API_KEY_HERE') {
    const fallbacks: Record<string, string> = {
      "Liderança": "A altitude da montanha revela o que a agitação do vale tenta esconder.",
      "Finanças": "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
      "Inovação": "Inovação sem revelação é apenas pressa tecnológica; o Reino inova pelo alinhamento.",
      "Propósito": "Você não cria seu propósito, você o descobre na subida e o manifesta na descida.",
      "Escalabilidade": "Só escala o que tem raízes profundas no solo da obediência estratégica.",
      "Legado": "O legado não é o que você deixa para as pessoas, mas o que você deixa nelas."
    };
    return fallbacks[topic] || "Subimos para ouvir. Descemos para agir.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    // Usando explicitamente o modelo Gemini 3 conforme solicitado
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Aja como o oráculo institucional da AV Kingdom Network. 
      Com base na filosofia "Ascend for Vision, Venture for Execution" (A=Montanha/Revelação, V=Vale/Execução), 
      gere um insight de liderança poderoso e curto (máximo 150 caracteres) sobre: ${topic}. 
      Linguagem: Português BR. Tom: Sofisticado, Profético e Estratégico.`,
      config: {
        temperature: 0.8,
        topP: 0.95,
      }
    });
    
    return response.text?.trim() || "A visão sem execução é alucinação; a execução sem visão é escravidão.";
  } catch (error) {
    console.error("Erro na integração Gemini:", error);
    return "O verdadeiro governo exige o equilíbrio entre a altitude da visão e a profundidade da entrega.";
  }
};
