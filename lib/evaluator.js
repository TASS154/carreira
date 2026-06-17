import { AREAS } from '../data/areas.js';
import { CAREERS } from '../data/careers.js';
import { ALL_QUESTIONS } from '../data/questions/index.js';

export const TRAIT_LABELS = {
  logica: 'raciocínio lógico',
  persistencia: 'persistência',
  autonomia: 'autonomia para aprender',
  detalhismo: 'atenção a detalhes',
  organizacao: 'organização',
  lideranca: 'liderança',
  empatia: 'empatia',
  comunicacao: 'comunicação',
  numeros: 'facilidade com números',
  analise: 'análise de dados',
  criatividade: 'criatividade',
  etica: 'senso ético',
  argumentacao: 'argumentação',
  curiosidade: 'curiosidade intelectual',
  responsabilidade: 'responsabilidade',
  pressao: 'lidar com pressão',
  didatica: 'didática',
  paciencia: 'paciência',
  escuta: 'escuta ativa',
  metodo: 'rigor metodológico',
  visao_sistemica: 'visão sistêmica',
  qualidade: 'preocupação com qualidade',
  estrategia: 'pensamento estratégico',
  decisao: 'tomada de decisão',
  risco: 'análise de risco',
  multitarefa: 'multitarefa',
  tolerancia_clinica: 'tolerância a ambientes clínicos',
  padroes: 'identificação de padrões',
  visao_futuro: 'visão de futuro',
  inovacao: 'inovação',
  estetica: 'senso estético',
  pratica: 'habilidade prática',
  campo: 'trabalho de campo',
  natureza: 'interesse pela natureza',
  cuidado: 'cuidado direto',
  procedimentos: 'seguir procedimentos',
  rotina_intensa: 'rotina intensa',
  rotina_digital: 'rotina digital',
  advocacy: 'defesa de causas',
  justica_social: 'justiça social',
  autoconhecimento: 'autoconhecimento',
  resiliencia: 'resiliência',
  lideranca_tecnica: 'liderança técnica',
  pessoas: 'trabalho com pessoas',
  precisao: 'precisão',
};

function normalizeScores(scores) {
  const values = Object.values(scores);
  const maxPos = Math.max(...values.filter((v) => v > 0), 1);
  const minNeg = Math.min(...values.filter((v) => v < 0), -1);

  const normalized = {};
  for (const [key, val] of Object.entries(scores)) {
    if (val >= 0) {
      normalized[key] = val / maxPos;
    } else {
      normalized[key] = val / Math.abs(minNeg);
    }
  }
  return normalized;
}

export function processAnswers(answers) {
  const areaScores = {};
  const traitScores = {};
  const situacaoHighlights = [];

  AREAS.forEach((a) => { areaScores[a.id] = 0; });

  ALL_QUESTIONS.forEach((q) => {
    const answer = answers[q.id];
    if (answer === undefined || answer === null) return;

    if (q.tipo === 'escala') {
      const weight = (answer - 1) / 4;
      areaScores[q.area] = (areaScores[q.area] || 0) + weight;

      if (q.tracos) {
        for (const [trait, mult] of Object.entries(q.tracos)) {
          traitScores[trait] = (traitScores[trait] || 0) + weight * mult;
        }
      }
    } else if (q.tipo === 'situacao') {
      const option = q.opcoes[answer];
      if (!option) return;

      for (const [key, val] of Object.entries(option.scores)) {
        if (AREAS.some((a) => a.id === key)) {
          areaScores[key] = (areaScores[key] || 0) + val;
        } else {
          traitScores[key] = (traitScores[key] || 0) + val;
        }
      }

      if (option.scores[q.area] >= 0.8) {
        situacaoHighlights.push({ area: q.area, texto: q.texto, resposta: option.texto });
      }
    }
  });

  return {
    areaScores: normalizeScores(areaScores),
    traitScores: normalizeScores(traitScores),
    situacaoHighlights,
  };
}

function scoreCareer(areaScores, traitScores, career) {
  let score = 0;
  let weightSum = 0;

  for (const [area, weight] of Object.entries(career.pesos)) {
    score += (areaScores[area] || 0) * weight;
    weightSum += weight;
  }

  const areaComponent = weightSum > 0 ? score / weightSum : 0;

  let traitMatch = 0;
  if (career.tracos.length > 0) {
    traitMatch = career.tracos.reduce((sum, t) => sum + (traitScores[t] || 0), 0) / career.tracos.length;
  }

  return Math.max(0, areaComponent * 0.65 + traitMatch * 0.35);
}

function getTopTraits(traitScores, n = 4) {
  return Object.entries(traitScores)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([t]) => TRAIT_LABELS[t] || t);
}

function getTopAreas(areaScores, n = 3) {
  return Object.entries(areaScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([id, score]) => ({
      ...AREAS.find((a) => a.id === id),
      score,
    }));
}

export function buildJustification(career, areaScores, traitScores, rank) {
  const topTraits = career.tracos
    .filter((t) => (traitScores[t] || 0) > 0.4)
    .map((t) => TRAIT_LABELS[t] || t);

  const mainArea = AREAS.find((a) => a.id === career.area);
  const areaPct = Math.round((areaScores[career.area] || 0) * 100);

  const traitText = topTraits.length > 0
    ? `Suas respostas mostram forte alinhamento com ${topTraits.slice(0, 3).join(', ')}`
    : 'Seu perfil apresenta equilíbrio entre diferentes competências';

  const areaText = areaPct >= 60
    ? `com destaque na área de ${mainArea.nome} (${areaPct}% de afinidade)`
    : `com interesse moderado em ${mainArea.nome}`;

  const rankPrefix = rank === 1
    ? 'Esta é sua carreira mais compatível.'
    : rank === 2
      ? 'Segunda opção muito alinhada ao seu perfil.'
      : 'Terceira alternativa sólida para explorar.';

  return `${rankPrefix} ${traitText}, ${areaText}. ${career.descricao}`;
}

function toPercentages(scores) {
  const max = Math.max(...scores.map((s) => s.raw), 0.01);
  return scores.map((s) => ({
    ...s,
    compatibilidade: Math.round((s.raw / max) * 100),
  }));
}

export function evaluateAnswers(answers) {
  const { areaScores, traitScores, situacaoHighlights } = processAnswers(answers);

  const careerScores = CAREERS.map((career) => ({
    career,
    raw: scoreCareer(areaScores, traitScores, career),
  })).sort((a, b) => b.raw - a.raw);

  const ranked = toPercentages(careerScores);
  const top3 = ranked.slice(0, 3).map((item, i) => ({
    ...item.career,
    compatibilidade: item.compatibilidade,
    justificativa: buildJustification(item.career, areaScores, traitScores, i + 1),
  }));

  return {
    top3,
    areas: getTopAreas(areaScores),
    traits: getTopTraits(traitScores),
    areaScores,
    traitScores,
    totalQuestions: ALL_QUESTIONS.length,
    answered: Object.keys(answers).length,
    highlights: situacaoHighlights.slice(0, 5),
    source: 'local',
  };
}

export function getRankedCareers(answers, limit = 8) {
  const { areaScores, traitScores } = processAnswers(answers);

  return CAREERS.map((career) => ({
    id: career.id,
    nome: career.nome,
    descricao: career.descricao,
    area: career.area,
    score: scoreCareer(areaScores, traitScores, career),
  }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
