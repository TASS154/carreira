export const psicologia = [
  {
    id: 'psi-1', area: 'psicologia', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de ouvir as pessoas e entender o que elas sentem?',
    tracos: { escuta: 1, empatia: 0.8 },
  },
  {
    id: 'psi-2', area: 'psicologia', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se interessa por entender comportamento humano e emoções?',
    tracos: { autoconhecimento: 0.8, curiosidade: 0.6 },
  },
  {
    id: 'psi-3', area: 'psicologia', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Um amigo(a) desaba em choro e pede para conversar no meio da sua prova importante. O que faz?',
    opcoes: [
      { texto: 'Digo que não posso agora e saio', scores: { psicologia: 0.3, empatia: 0.2 } },
      { texto: 'Cancelo tudo e fico o tempo que precisar', scores: { psicologia: 0.45, empatia: 0.9, escuta: 0.8 } },
      { texto: 'Ouço por alguns minutos, acolho e combinamos um horário depois', scores: { psicologia: 0.9, empatia: 0.85, estrategia: 0.6 } },
      { texto: 'Fico desconfortável e mudo de assunto', scores: { psicologia: 0.2, escuta: -0.3 } },
    ],
  },
  {
    id: 'psi-4', area: 'psicologia', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você consegue manter a calma quando alguém está muito emocional ao seu lado?',
    tracos: { resiliencia: 0.8, escuta: 0.6 },
  },
  {
    id: 'psi-5', area: 'psicologia', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Um colega conta que está em depressão, mas pede segredo. O que você faz?',
    opcoes: [
      { texto: 'Prometo segredo absoluto e não conto a ninguém', scores: { psicologia: 0.4, etica: 0.3 } },
      { texto: 'Oriento buscar ajuda profissional e aviso um adulto de confiança', scores: { psicologia: 0.95, responsabilidade: 0.9, etica: 0.8 } },
      { texto: 'Dou conselhos baseados na minha experiência', scores: { psicologia: 0.5, escuta: 0.4 } },
      { texto: 'Fico com medo e me afasto da pessoa', scores: { psicologia: 0.2, empatia: 0.1 } },
    ],
  },
  {
    id: 'psi-6', area: 'psicologia', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você se sentiria realizado(a) ajudando pessoas a superar dificuldades emocionais?',
    tracos: { empatia: 1, cuidado: 0.7 },
  },
  {
    id: 'psi-7', area: 'psicologia', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Alguém te conta um problema sério, mas você percebe que está absorvendo demais a dor do outro. Como age?',
    opcoes: [
      { texto: 'Continuo absorvendo — é meu dever ajudar', scores: { psicologia: 0.5, resiliencia: 0.3 } },
      { texto: 'Me afasto completamente da pessoa', scores: { psicologia: 0.3, empatia: 0.2 } },
      { texto: 'Estabeleço limites, acolho e indico ajuda profissional', scores: { psicologia: 0.95, autoconhecimento: 0.9, etica: 0.8 } },
      { texto: 'Mudo de assunto para proteger minha saúde mental', scores: { psicologia: 0.6, autoconhecimento: 0.5 } },
    ],
  },
  {
    id: 'psi-8', area: 'psicologia', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você se interessa por temas como saúde mental, desenvolvimento humano e relações?',
    tracos: { curiosidade: 0.8, autoconhecimento: 0.6 },
  },
  {
    id: 'psi-9', area: 'psicologia', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Uma família em situação difícil precisa de ajuda, mas recusa apoio por orgulho. O que faz?',
    opcoes: [
      { texto: 'Respeito e não insisto', scores: { psicologia: 0.5, empatia: 0.4 } },
      { texto: 'Forço a ajuda mesmo contra a vontade', scores: { psicologia: 0.4, etica: 0.3 } },
      { texto: 'Busco formas discretas de apoio e construo confiança aos poucos', scores: { psicologia: 0.95, advocacy: 0.9, estrategia: 0.7 } },
      { texto: 'Desisto — se não querem ajuda, não posso fazer nada', scores: { psicologia: 0.3, persistencia: -0.2 } },
    ],
  },
  {
    id: 'psi-10', area: 'psicologia', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Você atende várias pessoas com problemas graves na mesma semana e começa a se sentir esgotado(a). O que faz?',
    opcoes: [
      { texto: 'Continuo atendendo — parar seria egoísmo', scores: { psicologia: 0.5, resiliencia: 0.4 } },
      { texto: 'Paro de ajudar qualquer pessoa por um tempo', scores: { psicologia: 0.4, autoconhecimento: 0.4 } },
      { texto: 'Busco supervisão, faço autocuidado e reorganizo minha carga', scores: { psicologia: 0.95, autoconhecimento: 0.9, metodo: 0.7 } },
      { texto: 'Ignoro o esgotamento e sigo no automático', scores: { psicologia: 0.3, resiliencia: -0.3 } },
    ],
  },
];
