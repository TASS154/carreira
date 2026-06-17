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

const CATEGORY_LABELS = {
  rotina: 'Rotina',
  pressao: 'Pressão',
  aprendizado: 'Aprendizado',
  problema: 'Problema do dia a dia',
  ambiente: 'Ambiente de trabalho',
  etica: 'Ética',
  tecnico: 'Interesse técnico',
  dilema: 'Dilema complexo',
  pressao_avancada: 'Situação avançada',
  decisao: 'Tomada de decisão',
  lideranca: 'Liderança',
  procedimentos: 'Procedimentos',
};

function getAreaName(areaId) {
  return AREAS.find((a) => a.id === areaId)?.nome || areaId;
}

function formatAnswer(q, answer) {
  if (q.tipo === 'escala') {
    return SCALE_LABELS[answer - 1];
  }
  const opt = q.opcoes?.[answer];
  return opt?.texto || `Opção ${answer + 1}`;
}

export function buildOrderedAnswerList(answers) {
  return ALL_QUESTIONS
    .filter((q) => answers[q.id] !== undefined && answers[q.id] !== null)
    .map((q, index) => {
      const areaName = getAreaName(q.area);
      const tipo = q.tipo === 'escala' ? 'Escala' : 'Situação';
      const categoria = CATEGORY_LABELS[q.categoria] || q.categoria;

      return {
        numero: index + 1,
        id: q.id,
        area: areaName,
        tipo,
        categoria,
        nivel: q.nivel,
        pergunta: q.texto,
        resposta: formatAnswer(q, answers[q.id]),
      };
    });
}

export function buildAnswerSummary(answers) {
  const byArea = {};

  buildOrderedAnswerList(answers).forEach((entry) => {
    const areaId = ALL_QUESTIONS.find((q) => q.id === entry.id)?.area;
    if (!areaId) return;

    if (!byArea[areaId]) {
      byArea[areaId] = { escalas: [], situacoes: [] };
    }

    const item = {
      pergunta: entry.pergunta,
      resposta: entry.resposta,
      nivel: entry.nivel,
      categoria: entry.categoria,
    };

    if (entry.tipo === 'Escala') {
      byArea[areaId].escalas.push(item);
    } else {
      byArea[areaId].situacoes.push(item);
    }
  });

  return byArea;
}

function formatOrderedAnswersText(answers) {
  return buildOrderedAnswerList(answers)
    .map((entry) => (
      `${entry.numero}. [${entry.area} | ${entry.tipo} | ${entry.categoria}]\n`
      + `   Pergunta: ${entry.pergunta}\n`
      + `   Resposta: ${entry.resposta}`
    ))
    .join('\n\n');
}

export function buildGeminiPrompt(answers, localResult, rankedCareers) {
  const orderedAnswers = formatOrderedAnswersText(answers);
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

Analise TODAS as respostas do questionário abaixo e sugira as 3 carreiras mais compatíveis com o perfil do estudante.

## Perfil calculado (referência algorítmica)
- Áreas de maior afinidade: ${areasAffinity}
- Pontos fortes identificados: ${traitsText}
- Carreiras candidatas (por score algorítmico):
${careersList}

## Respostas do estudante (${Object.keys(answers).length} perguntas, em ordem do questionário)

Cada entrada contém apenas a resposta escolhida pelo estudante.
Para escalas, a resposta está em linguagem natural (ex.: "Concordo totalmente"), sem números.

${orderedAnswers}

## Instruções
1. Escolha exatamente 3 carreiras da lista de IDs disponíveis: ${careerIds}
2. Use os IDs exatos das carreiras (campo "id")
3. Atribua compatibilidade de 50 a 100 (número inteiro) — a 1ª deve ser a maior
4. Para CADA carreira no top3, escreva uma justificativa personalizada em português (3-5 frases) que:
   - Cite pelo menos 2 respostas concretas do estudante (paráfrase ou referência à pergunta/situação)
   - Explique por que essa carreira combina com o perfil observado nas respostas
   - Mencione situações do dia a dia dessa profissão que se alinham ao que o estudante demonstrou
5. Tom acolhedor, direto, adequado para adolescentes de 15-17 anos
6. Não invente carreiras fora da lista
7. Não mencione scores numéricos ou algoritmos na justificativa — fale diretamente com o estudante

Responda APENAS com JSON válido neste formato:
{
  "top3": [
    {
      "id": "id-da-carreira",
      "compatibilidade": 92,
      "justificativa": "Texto personalizado citando respostas específicas..."
    }
  ],
  "resumo_perfil": "Uma frase resumindo o perfil do estudante com base nas respostas"
}`;
}
