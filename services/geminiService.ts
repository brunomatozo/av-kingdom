
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAVInsight = async (topic: string): Promise<string> => {
  try {
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
    return "A revelação sem execução torna-se isolamento; a execução sem visão torna-se ativismo vazio.";
  }
};
