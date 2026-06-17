import { GoogleGenerativeAI } from '@google/generative-ai';
import { CAREERS } from '../data/careers.js';

const DEPRECATED_MODELS = [
  'gemini-2.0-flash',
  'gemini-2.0-flash-001',
  'gemini-2.0-flash-lite',
  'gemini-2.0-flash-lite-001',
  'gemini-1.0-pro',
  'gemini-1.5-pro',
  'gemini-1.5-flash',
];

const DEFAULT_MODEL = 'gemini-2.5-flash';

export function getGeminiConfig() {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY não configurada nas variáveis de ambiente.');
  }

  if (DEPRECATED_MODELS.some((m) => model.startsWith(m))) {
    throw new Error(
      `Modelo "${model}" está descontinuado. Use gemini-2.5-flash ou gemini-3.5-flash.`,
    );
  }

  return { apiKey, model };
}

function extractJson(text) {
  const trimmed = text.trim();
  const fenceMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fenceMatch ? fenceMatch[1].trim() : trimmed;
  return JSON.parse(raw);
}

export async function evaluateWithGemini(prompt) {
  const { apiKey, model } = getGeminiConfig();
  const genAI = new GoogleGenerativeAI(apiKey);

  const geminiModel = genAI.getGenerativeModel({
    model,
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 2048,
      responseMimeType: 'application/json',
    },
  });

  const result = await geminiModel.generateContent(prompt);
  const text = result.response.text();

  if (!text) {
    throw new Error('Gemini retornou resposta vazia.');
  }

  return extractJson(text);
}

export function mergeGeminiResult(geminiJson, localResult) {
  const careerMap = Object.fromEntries(CAREERS.map((c) => [c.id, c]));

  const top3 = geminiJson.top3
    .map((item) => {
      const career = careerMap[item.id];
      if (!career) return null;

      return {
        ...career,
        compatibilidade: Math.min(100, Math.max(50, Math.round(item.compatibilidade))),
        justificativa: item.justificativa,
      };
    })
    .filter(Boolean);

  if (top3.length < 3) {
    throw new Error('Gemini retornou menos de 3 carreiras válidas.');
  }

  return {
    top3: top3.slice(0, 3),
    areas: localResult.areas,
    traits: localResult.traits,
    resumoPerfil: geminiJson.resumo_perfil || null,
    totalQuestions: localResult.totalQuestions,
    answered: localResult.answered,
    source: 'gemini',
    model: process.env.GEMINI_MODEL || DEFAULT_MODEL,
  };
}
