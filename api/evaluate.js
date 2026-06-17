import { evaluateAnswers, getRankedCareers } from '../lib/evaluator.js';
import { buildGeminiPrompt } from '../lib/prompt.js';
import { evaluateWithGemini, mergeGeminiResult } from '../lib/gemini.js';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' });
  }

  try {
    const { answers } = req.body || {};

    if (!answers || typeof answers !== 'object' || Object.keys(answers).length === 0) {
      return res.status(400).json({ error: 'Corpo inválido: envie { "answers": { ... } }' });
    }

    const localResult = evaluateAnswers(answers);
    const rankedCareers = getRankedCareers(answers, 10);

    try {
      const prompt = buildGeminiPrompt(answers, localResult, rankedCareers);
      const geminiJson = await evaluateWithGemini(prompt);
      const result = mergeGeminiResult(geminiJson, localResult);

      return res.status(200).json(result);
    } catch (geminiError) {
      console.error('Gemini error, usando fallback local:', geminiError.message);

      return res.status(200).json({
        ...localResult,
        source: 'local',
        aviso: 'Análise por IA indisponível. Resultado calculado localmente.',
        geminiError: geminiError.message,
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Erro interno ao processar avaliação.' });
  }
}
