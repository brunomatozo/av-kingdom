
import { GoogleGenAI } from "@google/genai";

// Função segura para pegar a API Key sem travar o navegador
const getApiKey = () => {
  try {
    return (typeof process !== 'undefined' && process.env.API_KEY) ? process.env.API_KEY : '';
  } catch {
    return '';
  }
};

export const getAVInsight = async (topic: string): Promise<string> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.warn("API_KEY não configurada. Usando fallback.");
    return "A revelação sem execução torna-se isolamento; a execução sem visão torna-se ativismo vazio.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Aja como um mentor da AV Kingdom Network. 
      Com base na filosofia "Ascend for Vision, Venture for Execution" (A representa a montanha da visão/transfiguração e V representa o vale da execução), 
      gere um breve insight de liderança (máximo 2 sentenças) em Português sobre o seguinte tema: ${topic}. 
      O tom deve ser institucional, sofisticado e espiritual-estratégico.`,
    });
    return response.text || "Subimos para ouvir. Descemos para agir.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "O verdadeiro governo exige o equilíbrio entre a altitude da visão e a profundidade da entrega.";
  }
};
