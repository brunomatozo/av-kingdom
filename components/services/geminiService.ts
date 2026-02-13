
import { GoogleGenAI } from "@google/genai";

export const getAVInsight = async (topic: string): Promise<string> => {
  // Banco de dados de segurança completo para todos os tópicos (Garante dinamismo mesmo offline)
  const fallbacks: Record<string, string[]> = {
    "Liderança": [
      "A altitude da montanha revela o que a agitação do vale tenta esconder.",
      "Governo não é cargo, é a frequência da sua subida ao monte.",
      "Líderes de vale sobrevivem; arquitetos de montanha governam.",
      "Sua autoridade no vale é medida pela sua solitude no monte."
    ],
    "Finanças": [
      "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
      "O ouro serve ao propósito, ou o propósito se torna escravo do ouro.",
      "Abundância no vale exige clareza de gestão na montanha.",
      "Dinheiro sem visão é desperdício; visão sem dinheiro é apenas sonho."
    ],
    "Inovação": [
      "Inovação sem revelação é apenas pressa tecnológica.",
      "O novo não vem do futuro, vem da altitude da visão.",
      "Tecnologia é a ferramenta; a revelação é o sistema operacional.",
      "Não crie o que é novo, manifeste o que é eterno."
    ],
    "Gestão": [
      "Gerir é organizar no vale o que a montanha já estabeleceu.",
      "A ordem no caos começa com o silêncio na altitude.",
      "Sistemas servem a pessoas, pessoas servem à visão.",
      "Gestão eficiente é a prova de que a visão foi compreendida."
    ],
    "Legado": [
      "O legado não é o que você deixa, mas quem você transforma.",
      "Construa para gerações que você nunca conhecerá.",
      "Legado é a sombra da sua subida projetada no vale.",
      "O que é eterno não morre quando você desce do monte."
    ],
    "Propósito": [
      "Você não cria seu propósito, você o descobre na solitude.",
      "A execução no vale é proporcional à entrega na montanha.",
      "Propósito é o mapa que a altitude desenha no seu espírito.",
      "Quem conhece o 'porquê' no monte, suporta qualquer 'como' no vale."
    ]
  };

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const seed = Math.random().toString(36).substring(7);

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `CONTEXTO: AV Kingdom Network (Liderança Profética/Estratégica).
      TEMA: ${topic}.
      OBJETIVO: Gere uma frase de governo inédita e soberana.
      REGRAS:
      1. Use a metáfora da "Montanha" (Visão/Revelação) versus "Vale" (Execução/Materialização).
      2. Máximo 90 caracteres. Seja ultra-minimalista.
      3. Nunca comece com a mesma palavra. Use verbos de ação.
      4. Tom: Imperial, Espiritual e Executivo.
      5. Seed: ${seed}.
      IDOMA: Português BR.`,
      config: {
        temperature: 0.95,
        topP: 0.8,
      }
    });
    
    const text = response.text;
    if (!text || text.length < 5) throw new Error("Resposta inválida");
    
    return text.trim().replace(/^"|"$/g, '');
  } catch (error) {
    console.warn(`Usando fallback randômico para: ${topic}`);
    const list = fallbacks[topic] || ["O governo exige o equilíbrio entre visão e execução."];
    // Retorna uma frase aleatória da lista para nunca parecer estático
    return list[Math.floor(Math.random() * list.length)];
  }
};
