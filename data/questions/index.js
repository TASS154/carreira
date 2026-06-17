import { tecnologia } from './tecnologia.js';
import { administracao } from './administracao.js';
import { saude } from './saude.js';
import { financas } from './financas.js';
import { comunicacao } from './comunicacao.js';
import { direito } from './direito.js';
import { engenharia } from './engenharia.js';
import { educacao } from './educacao.js';
import { psicologia } from './psicologia.js';
import { ciencias } from './ciencias.js';

export const ALL_QUESTIONS = [
  ...tecnologia,
  ...administracao,
  ...saude,
  ...financas,
  ...comunicacao,
  ...direito,
  ...engenharia,
  ...educacao,
  ...psicologia,
  ...ciencias,
];

export function getQuestionsByArea(areaId) {
  return ALL_QUESTIONS.filter((q) => q.area === areaId);
}

export function getQuestionCount() {
  return ALL_QUESTIONS.length;
}
