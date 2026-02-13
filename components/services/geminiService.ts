
import { GoogleGenAI } from "@google/genai";

// Banco de dados expandido e dinâmico para garantir que nunca pareça estático
const fallbacks: Record<string, string[]> = {
  "Liderança": [
    "A altitude da montanha revela o que a agitação do vale tenta esconder.",
    "Governo não é cargo, é a frequência da sua subida ao monte.",
    "Líderes de vale sobrevivem; arquitetos de montanha governam.",
    "Sua autoridade no vale é medida pela sua solitude no monte.",
    "A montanha cala o ruído para que o governo dite a ordem.",
    "Quem não suporta o silêncio da altitude não merece o comando do vale."
  ],
  "Finanças": [
    "Riqueza é recurso; governo é o que transforma recurso em legado eterno.",
    "O ouro serve ao propósito, ou o propósito se torna escravo do ouro.",
    "Abundância no vale exige clareza de gestão na montanha.",
    "Dinheiro sem visão é desperdício; visão sem dinheiro é apenas sonho.",
    "A economia do Reino flui da fonte da revelação para a foz da execução.",
    "Não gerencie moedas, governe sistemas de provisão."
  ],
  "Inovação": [
    "Inovação sem revelação é apenas pressa tecnológica.",
    "O novo não vem do futuro, vem da altitude da visão.",
    "Tecnologia é a ferramenta; a revelação é o sistema operacional.",
    "Não crie o que é novo, manifeste o que é eterno.",
    "A verdadeira disrupção nasce no monte e se materializa no vale.",
    "O futuro é apenas o presente visto de uma altitude maior."
  ],
  "Gestão": [
    "Gerir é organizar no vale o que a montanha já estabeleceu.",
    "A ordem no caos começa com o silêncio na altitude.",
    "Sistemas servem a pessoas, pessoas servem à visão.",
    "Gestão eficiente é a prova de que a visão foi compreendida.",
    "O governo do vale depende da arquitetura desenhada no monte.",
    "Administrar é técnica; governar é autoridade revelada."
  ],
  "Legado": [
    "O legado não é o que você deixa, mas quem você transforma.",
    "Construa para gerações que você nunca conhecerá.",
    "Legado é a sombra da sua subida projetada no vale.",
    "O que é eterno não morre quando você desce do monte.",
    "Sua descendência colherá no vale o que você plantou na montanha.",
    "O tempo é o juiz da profundidade da sua fundação."
  ],
  "Propósito": [
    "Você não cria seu propósito, você o descobre na solitude.",
    "A execução no vale é proporcional à entrega na montanha.",
    "Propósito é o mapa que a altitude desenha no seu espírito.",
    "Quem conhece o 'porquê' no monte, suporta qualquer 'como' no vale.",
    "Sua missão é o fôlego da montanha soprando vida no vale.",
    "Não busque o sucesso, persiga o alinhamento com a visão."
  ]
};

export const getAVInsight = async (topic: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Gerador de aleatoriedade para o prompt
    const randomAdjectives = ["imperial", "soberano", "minimalista", "cortante", "eterno", "estratégico"];
    const adjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
    const seed = Math.random().toString(36).substring(7);

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `[CONSTRUTOR DE VISÃO AV]
      TEMA: ${topic}.
      ESTILO: Frase de governo ${adjective}.
      REQUISITO: Use a dialética Montanha (Visão) vs Vale (Execução).
      LIMITE: 85 caracteres.
      REGRA DE OURO: Nunca repita clichês. Seja disruptivo e profundo.
      VARIAÇÃO: Use verbos de comando no imperativo ou afirmações absolutas.
      SEED: ${seed}.
      IDIOMA: Português BR.`,
      config: {
        temperature: 1.0, // Máxima criatividade
        topP: 0.9,
      }
    });
    
    const text = response.text;
    if (!text || text.length < 10) throw new Error("API noise");
    
    return text.trim().replace(/^"|"$/g, '');
  } catch (error) {
    console.warn(`[AV Service] Fallback dinâmico para ${topic}`);
    const list = fallbacks[topic] || fallbacks["Liderança"];
    // Escolhe uma frase aleatória da lista para nunca ser a mesma
    return list[Math.floor(Math.random() * list.length)];
  }
};
