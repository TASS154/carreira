import { AREAS } from '../data/areas.js';
import { ALL_QUESTIONS } from '../data/questions/index.js';
import { evaluateAnswers } from './evaluator.js';

const SCALE_LABELS = [
  'Discordo totalmente',
  'Discordo',
  'Neutro',
  'Concordo',
  'Concordo totalmente',
];

let currentIndex = 0;
let answers = {};
let questions = [];

const el = {
  intro: document.getElementById('intro'),
  quiz: document.getElementById('quiz'),
  results: document.getElementById('results'),
  startBtn: document.getElementById('start-btn'),
  progressBar: document.getElementById('progress-bar'),
  progressText: document.getElementById('progress-text'),
  areaBadge: document.getElementById('area-badge'),
  questionNumber: document.getElementById('question-number'),
  questionCategory: document.getElementById('question-category'),
  questionText: document.getElementById('question-text'),
  answerArea: document.getElementById('answer-area'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  resultsContent: document.getElementById('results-content'),
  restartBtn: document.getElementById('restart-btn'),
};

function init() {
  questions = [...ALL_QUESTIONS];
  el.startBtn.addEventListener('click', startQuiz);
  el.prevBtn.addEventListener('click', prevQuestion);
  el.nextBtn.addEventListener('click', nextQuestion);
  el.restartBtn.addEventListener('click', restart);
}

function startQuiz() {
  el.intro.classList.add('hidden');
  el.quiz.classList.remove('hidden');
  renderQuestion();
}

function getArea(areaId) {
  return AREAS.find((a) => a.id === areaId);
}

function categoryLabel(cat) {
  const labels = {
    rotina: 'Rotina & Conforto',
    pressao: 'Pressão',
    aprendizado: 'Aprendizado',
    problema: 'Situação do dia a dia',
    ambiente: 'Ambiente de trabalho',
    etica: 'Ética & Decisão',
    tecnico: 'Interesse técnico',
    dilema: 'Dilema complexo',
    pressao_avancada: 'Situação avançada',
    decisao: 'Tomada de decisão',
    lideranca: 'Liderança',
    procedimentos: 'Procedimentos',
  };
  return labels[cat] || cat;
}

function renderQuestion() {
  const q = questions[currentIndex];
  const area = getArea(q.area);
  const pct = Math.round(((currentIndex) / questions.length) * 100);

  el.progressBar.style.width = `${pct}%`;
  el.progressText.textContent = `Pergunta ${currentIndex + 1} de ${questions.length}`;
  el.areaBadge.innerHTML = `${area.icone} ${area.nome}`;
  el.questionNumber.textContent = `Nível ${q.nivel}/4`;
  el.questionCategory.textContent = categoryLabel(q.categoria);
  el.questionText.textContent = q.texto;

  el.answerArea.innerHTML = '';

  if (q.tipo === 'escala') {
  renderScale(q);
  } else {
    renderSituacao(q);
  }

  el.prevBtn.disabled = currentIndex === 0;
  el.nextBtn.textContent = currentIndex === questions.length - 1 ? 'Ver resultados' : 'Próxima';
  el.nextBtn.disabled = answers[q.id] === undefined;
}

function renderScale(q) {
  const container = document.createElement('div');
  container.className = 'scale-container';

  const labels = document.createElement('div');
  labels.className = 'scale-labels';
  labels.innerHTML = '<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>';
  container.appendChild(labels);

  const buttons = document.createElement('div');
  buttons.className = 'scale-buttons';

  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'scale-btn' + (answers[q.id] === i ? ' selected' : '');
    btn.textContent = i;
    btn.title = SCALE_LABELS[i - 1];
    btn.addEventListener('click', () => {
      answers[q.id] = i;
      renderQuestion();
    });
    buttons.appendChild(btn);
  }

  container.appendChild(buttons);

  const hint = document.createElement('p');
  hint.className = 'scale-hint';
  hint.textContent = answers[q.id]
    ? SCALE_LABELS[answers[q.id] - 1]
    : 'Selecione de 1 (discordo totalmente) a 5 (concordo totalmente)';
  container.appendChild(hint);

  el.answerArea.appendChild(container);
}

function renderSituacao(q) {
  const container = document.createElement('div');
  container.className = 'situacao-container';

  q.opcoes.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'situacao-btn' + (answers[q.id] === idx ? ' selected' : '');
    btn.textContent = opt.texto;
    btn.addEventListener('click', () => {
      answers[q.id] = idx;
      renderQuestion();
    });
    container.appendChild(btn);
  });

  el.answerArea.appendChild(container);
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (answers[questions[currentIndex].id] === undefined) return;

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showResults();
  }
}

async function fetchEvaluation() {
  try {
    const response = await fetch('/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    });

    if (!response.ok) {
      throw new Error(`API retornou ${response.status}`);
    }

    return await response.json();
  } catch {
    return evaluateAnswers(answers);
  }
}

function renderResults(result) {
  const sourceLabel = result.source === 'gemini'
    ? `Análise por IA (${result.model || 'Gemini'})`
    : 'Análise local';

  const aviso = result.aviso
    ? `<p class="result-aviso">${result.aviso}</p>`
    : '';

  const resumo = result.resumoPerfil
    ? `<p class="result-resumo">${result.resumoPerfil}</p>`
    : '';

  el.resultsContent.innerHTML = `
    <div class="results-meta">
      <span class="source-badge">${sourceLabel}</span>
      ${aviso}
      ${resumo}
    </div>
    <div class="results-summary">
      <p>Com base em <strong>${result.answered}</strong> respostas, analisamos seu perfil em
      <strong>${result.areas.length}</strong> áreas profissionais.</p>
      <div class="top-areas">
        ${result.areas.map((a) => `
          <span class="area-chip">${a.icone} ${a.nome}</span>
        `).join('')}
      </div>
    </div>

    <div class="career-cards">
      ${result.top3.map((c, i) => `
        <article class="career-card rank-${i + 1}">
          <div class="career-rank">#${i + 1}</div>
          <div class="career-compat">
            <span class="compat-value">${c.compatibilidade}%</span>
            <span class="compat-label">compatível</span>
          </div>
          <h3>${c.nome}</h3>
          <p class="career-desc">${c.descricao}</p>
          <p class="career-just">${c.justificativa}</p>
        </article>
      `).join('')}
    </div>

    <div class="traits-section">
      <h3>Seus pontos fortes identificados</h3>
      <div class="traits-list">
        ${result.traits.map((t) => `<span class="trait-chip">${t}</span>`).join('')}
      </div>
    </div>

    <p class="disclaimer">
      Este resultado é uma orientação baseada nas suas respostas, não uma decisão definitiva.
      Explore estágios, conversas com profissionais e atividades práticas antes de escolher sua carreira.
    </p>
  `;
}

async function showResults() {
  el.quiz.classList.add('hidden');
  el.results.classList.remove('hidden');

  el.resultsContent.innerHTML = `
    <div class="loading-state">
      <div class="spinner"></div>
      <p>Analisando suas respostas com IA...</p>
      <p class="loading-hint">Isso pode levar alguns segundos.</p>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const result = await fetchEvaluation();
  renderResults(result);
}

function restart() {
  currentIndex = 0;
  answers = {};
  el.results.classList.add('hidden');
  el.intro.classList.remove('hidden');
}

init();
