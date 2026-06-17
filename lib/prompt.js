import { AREAS } from '../data/areas.js';
import { ALL_QUESTIONS } from '../data/questions/index.js';
import { TRAIT_LABELS } from './evaluator.js';

const SCALE_LABELS = [
  'Discordo totalmente',
  'Discordo',
  'Neutro',
  'Concordo',
  'Concordo totalmente',
];

function getAreaName(areaId) {
  return AREAS.find((a) => a.id === areaId)?.nome || areaId;
}

function formatAnswer(q, answer) {
  if (q.tipo === 'escala') {
    return `${SCALE_LABELS[answer - 1]} (${answer}/5)`;
  }
  const opt = q.opcoes?.[answer];
  return opt?.texto || `Opção ${answer + 1}`;
}

export function buildAnswerSummary(answers) {
  const byArea = {};

  ALL_QUESTIONS.forEach((q) => {
    const answer = answers[q.id];
    if (answer === undefined || answer === null) return;

    if (!byArea[q.area]) {
      byArea[q.area] = { escalas: [], situacoes: [] };
    }

    const entry = {
      pergunta: q.texto,
      resposta: formatAnswer(q, answer),
      nivel: q.nivel,
      categoria: q.categoria,
    };

    if (q.tipo === 'escala') {
      byArea[q.area].escalas.push(entry);
    } else {
      byArea[q.area].situacoes.push(entry);
    }
  });

  return byArea;
}

export function buildGeminiPrompt(answers, localResult, rankedCareers) {
  const summary = buildAnswerSummary(answers);

  const areasText = Object.entries(summary)
    .map(([areaId, data]) => {
      const areaName = getAreaName(areaId);
      const escalas = data.escalas
        .map((e) => `  - [Escala] ${e.pergunta}\n    → ${e.resposta}`)
        .join('\n');
      const situacoes = data.situacoes
        .map((s) => `  - [Situação] ${s.pergunta}\n    → ${s.resposta}`)
        .join('\n');
      return `### ${areaName}\n${escalas}\n${situacoes}`;
    })
    .join('\n\n');

  const traitsText = localResult.traits.join(', ');

  const areasAffinity = Object.entries(localResult.areaScores)
    .sort((a, b) => b[1] - a[1])
    .map(([id, score]) => `${getAreaName(id)}: ${Math.round(score * 100)}%`)
    .join(', ');

  const careersList = rankedCareers
    .map((c, i) => `${i + 1}. id="${c.id}" | ${c.nome} | score=${c.score.toFixed(2)}`)
    .join('\n');

  const careerIds = rankedCareers.map((c) => c.id).join(', ');

  return `Você é uma orientadora vocacional especializada em estudantes do 2º ano do ensino médio no Brasil.

Analise as respostas do questionário de carreira abaixo e sugira as 3 carreiras mais compatíveis.

## Perfil calculado (referência)
- Áreas de maior afinidade: ${areasAffinity}
- Pontos fortes: ${traitsText}
- Carreiras candidatas (por score algorítmico): 
${careersList}

## Respostas completas por área
${areasText}

## Instruções
1. Escolha exatamente 3 carreiras da lista de IDs disponíveis: ${careerIds}
2. Use os IDs exatos das carreiras (campo "id")
3. Atribua compatibilidade de 50 a 100 (número inteiro) — a 1ª deve ser a maior
4. Escreva justificativas personalizadas em português (2-4 frases), citando padrões específicos das respostas do estudante
5. Tom acolhedor, direto, adequado para adolescentes de 15-17 anos
6. Não invente carreiras fora da lista

Responda APENAS com JSON válido neste formato:
{
  "top3": [
    {
      "id": "id-da-carreira",
      "compatibilidade": 92,
      "justificativa": "Texto personalizado..."
    }
  ],
  "resumo_perfil": "Uma frase resumindo o perfil do estudante"
}`;
}
