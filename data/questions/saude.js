export const saude = [
  {
    id: 'sau-1', area: 'saude', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se interessa por ajudar pessoas diretamente em situações difíceis?',
    tracos: { empatia: 1, cuidado: 0.7 },
  },
  {
    id: 'sau-2', area: 'saude', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você consegue lidar bem com situações emocionalmente pesadas?',
    tracos: { resiliencia: 1, empatia: 0.5 },
  },
  {
    id: 'sau-3', area: 'saude', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Uma pessoa está com dor e ansiedade esperando atendimento. Você está atrasado(a). O que faz?',
    opcoes: [
      { texto: 'Fico desconfortável e evito contato visual', scores: { saude: 0.2, empatia: 0.2 } },
      { texto: 'Explico a demora com calma e mostro que estou cuidando', scores: { saude: 0.95, empatia: 0.9, comunicacao: 0.7 } },
      { texto: 'Peço para outra pessoa atender — não sei o que dizer', scores: { saude: 0.3, pressao: -0.3 } },
      { texto: 'Priorizo essa pessoa mesmo atrasando outros', scores: { saude: 0.85, cuidado: 0.9, empatia: 0.8 } },
    ],
  },
  {
    id: 'sau-4', area: 'saude', tipo: 'escala', nivel: 2, categoria: 'procedimentos',
    texto: 'Você gosta de seguir regras e procedimentos com precisão?',
    tracos: { precisao: 1, procedimentos: 0.8 },
  },
  {
    id: 'sau-5', area: 'saude', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Você suspeita de um problema sério em alguém, mas não tem certeza. O que faz?',
    opcoes: [
      { texto: 'Espero para ver se melhora sozinho', scores: { saude: 0.2, responsabilidade: -0.4 } },
      { texto: 'Informo um responsável e acompanho a situação', scores: { saude: 0.9, responsabilidade: 0.9, etica: 0.7 } },
      { texto: 'Fico ansioso(a) e não faço nada por medo de errar', scores: { saude: 0.3, pressao: -0.4 } },
      { texto: 'Pesquiso sintomas e oriento buscar ajuda profissional', scores: { saude: 0.8, curiosidade: 0.5, responsabilidade: 0.7 } },
    ],
  },
  {
    id: 'sau-6', area: 'saude', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você se sentiria confortável vendo sangue, ferimentos ou situações médicas reais?',
    tracos: { tolerancia_clinica: 1 },
  },
  {
    id: 'sau-7', area: 'saude', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Você erra uma decisão pequena que pode afetar outra pessoa. Como reage?',
    opcoes: [
      { texto: 'Escondo o erro para não me prejudicar', scores: { saude: 0.1, etica: -0.8 } },
      { texto: 'Reconheço, corrijo e aprendo com o erro', scores: { saude: 0.95, etica: 0.9, responsabilidade: 0.9 } },
      { texto: 'Fico muito culpado(a) e perco a confiança', scores: { saude: 0.25, autoconhecimento: 0.4 } },
      { texto: 'Minimizo — foi algo pequeno, não importa', scores: { saude: 0.3, responsabilidade: -0.3 } },
    ],
  },
  {
    id: 'sau-8', area: 'saude', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você gosta de estudar biologia e o funcionamento do corpo humano?',
    tracos: { curiosidade: 0.8, natureza: 0.6 },
  },
  {
    id: 'sau-9', area: 'saude', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você está muito cansado(a), mas ainda precisa atender pessoas que dependem de você. O que faz?',
    opcoes: [
      { texto: 'Cancelo tudo — minha saúde vem primeiro, sempre', scores: { saude: 0.4, autoconhecimento: 0.5 } },
      { texto: 'Continuo no automático, mesmo arriscando errar', scores: { saude: 0.5, pressao: 0.3, responsabilidade: 0.4 } },
      { texto: 'Peço ajuda, reorganizo e faço pausas estratégicas', scores: { saude: 0.9, estrategia: 0.7, responsabilidade: 0.8 } },
      { texto: 'Me supero — quem precisa de mim não pode esperar', scores: { saude: 0.85, resiliencia: 0.9, rotina_intensa: 0.8 } },
    ],
  },
  {
    id: 'sau-10', area: 'saude', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Um paciente não segue recomendações e piora. Como você lida com isso?',
    opcoes: [
      { texto: 'Fico frustrado(a) e perco a paciência', scores: { saude: 0.3, empatia: 0.2 } },
      { texto: 'Cobro de forma rígida sem tentar entender o motivo', scores: { saude: 0.5, comunicacao: 0.3 } },
      { texto: 'Investigo as barreiras e adapto a orientação com empatia', scores: { saude: 0.95, empatia: 0.9, comunicacao: 0.8 } },
      { texto: 'Me sinto impotente e penso em desistir da área', scores: { saude: 0.2, resiliencia: -0.5 } },
    ],
  },
];
