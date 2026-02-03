
import { GoogleGenAI, Type } from "@google/genai";
import { CaseStage, StageFeedback, ClinicalCase, Message } from "../types";

const SYSTEM_INSTRUCTION = `Você é um tutor médico especialista em Oftalmologia conduzindo uma discussão de caso clínico "cego".
Sua tarefa é avaliar o raciocínio do aluno e decidir quando a discussão de uma etapa foi produtiva o suficiente para avançar.

Regras estritas:
1. NUNCA revele o diagnóstico final ("finalDiagnosis") antes da última etapa de discussão.
2. NUNCA mencione o nome real do caso clínico se o aluno não tiver chegado à conclusão correta.
3. Use apenas as informações clínicas fornecidas na etapa atual e nas anteriores.
4. Feedback Educativo: reforce acertos, corrija erros respeitosamente, aponte Red Flags e sugira exames.
5. Se o aluno pedir a resposta, oriente o raciocínio com perguntas (Socratic Method).
6. CONTROLE DE FLUXO: Defina "isReadyForNext" como true somente quando o aluno atingir o objetivo pedagógico da etapa atual ou demonstrar um raciocínio maduro sobre os dados apresentados.
7. Responda obrigatoriamente no formato JSON fornecido.

Retorno esperado:
- feedback: Texto didático para o aluno.
- score: Pontuação de 0 a 3 (0: insuficiente, 1: incompleto, 2: bom, 3: excelente).
- justification: Justificativa da pontuação (1-2 frases).
- redFlags: Lista de sinais de alerta relevantes.
- isReadyForNext: Booleano. Defina como true para autorizar o avanço automático para a próxima etapa clínica.`;

export async function getFeedback(
  clinicalCase: ClinicalCase,
  currentStageIndex: number,
  studentAnswer: string,
  history: Message[]
): Promise<StageFeedback> {
  // Conforme as regras de sistema, utilizamos process.env.API_KEY.
  // Caso o usuário prefira GEMINI_API_KEY, garantimos a compatibilidade.
  const apiKey = process.env.API_KEY;
  const ai = new GoogleGenAI({ apiKey: apiKey || '' });
  
  const currentStage = clinicalCase.stages[currentStageIndex];
  const releasedInfo = clinicalCase.stages
    .slice(0, currentStageIndex + 1)
    .map(s => `${s.name}: ${s.content}`)
    .join('\n\n');

  const prompt = `
DISCUSSÃO ATUAL: Etapa ${currentStageIndex + 1}
INFORMAÇÕES DISPONÍVEIS:
${releasedInfo}

OBJETIVO DESTA ETAPA: ${currentStage.goal}

RESPOSTA DO ALUNO: "${studentAnswer}"

HISTÓRICO DA DISCUSSÃO ATUAL:
${history.filter(m => m.role !== 'system').map(m => `${m.role}: ${m.content}`).join('\n')}

Avalie a resposta e retorne o JSON com feedback e score. Se o aluno cumpriu o objetivo "${currentStage.goal}", defina isReadyForNext como true.
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            feedback: { type: Type.STRING },
            score: { type: Type.NUMBER },
            justification: { type: Type.STRING },
            redFlags: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            isReadyForNext: { type: Type.BOOLEAN }
          },
          required: ["feedback", "score", "justification", "redFlags", "isReadyForNext"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as StageFeedback;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      feedback: "Desculpe, tive um erro ao processar sua resposta. Tente novamente.",
      score: 0,
      justification: "Erro técnico na API.",
      redFlags: [],
      isReadyForNext: false
    };
  }
}

