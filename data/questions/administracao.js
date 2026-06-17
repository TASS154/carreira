export const administracao = [
  {
    id: 'adm-1', area: 'administracao', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de organizar tarefas, listas e planejar coisas com antecedência?',
    tracos: { organizacao: 1, estrategia: 0.5 },
  },
  {
    id: 'adm-2', area: 'administracao', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se sente confortável lidando com várias pessoas e responsabilidades ao mesmo tempo?',
    tracos: { multitarefa: 1, pessoas: 0.6 },
  },
  {
    id: 'adm-3', area: 'administracao', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Dois colegas de equipe estão brigando e isso está atrasando o trabalho. O que você faz?',
    opcoes: [
      { texto: 'Fico longe — não quero me envolver', scores: { administracao: 0.2, lideranca: -0.3 } },
      { texto: 'Converso com cada um separadamente para entender o problema', scores: { administracao: 0.8, empatia: 0.7, lideranca: 0.6 } },
      { texto: 'Reúno os dois e mediamos a conversa com regras claras', scores: { administracao: 0.95, lideranca: 0.9, comunicacao: 0.7 } },
      { texto: 'Avisei o professor/chefe e deixo ele resolver', scores: { administracao: 0.5, lideranca: 0.2 } },
    ],
  },
  {
    id: 'adm-4', area: 'administracao', tipo: 'escala', nivel: 2, categoria: 'decisao',
    texto: 'Você gosta de tomar decisões que afetam outras pessoas?',
    tracos: { decisao: 1, lideranca: 0.6 },
  },
  {
    id: 'adm-5', area: 'administracao', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Um projeto está atrasado e o chefe quer resultados imediatos. Como você reage?',
    opcoes: [
      { texto: 'Fico sobrecarregado(a) e não sei por onde começar', scores: { administracao: 0.2, pressao: -0.5 } },
      { texto: 'Repriorizo tarefas e comunico o que é possível entregar', scores: { administracao: 0.9, organizacao: 0.8, comunicacao: 0.7 } },
      { texto: 'Peço mais prazo sem apresentar um plano', scores: { administracao: 0.4, decisao: 0.2 } },
      { texto: 'Mobilizo a equipe, divido o trabalho e acompanho de perto', scores: { administracao: 1.0, lideranca: 0.9, pressao: 0.7 } },
    ],
  },
  {
    id: 'adm-6', area: 'administracao', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você gosta de trabalhar com prazos e metas claras?',
    tracos: { organizacao: 0.8, pressao: 0.4 },
  },
  {
    id: 'adm-7', area: 'administracao', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Você percebe que alguém do time não está entregando bem, mas é alguém próximo. O que faz?',
    opcoes: [
      { texto: 'Cubro a pessoa e faço o trabalho dela em segredo', scores: { administracao: 0.3, etica: -0.3 } },
      { texto: 'Converso em particular, ofereço ajuda e cobro melhoria', scores: { administracao: 0.85, empatia: 0.7, lideranca: 0.7 } },
      { texto: 'Reporto ao líder sem avisar a pessoa', scores: { administracao: 0.5, etica: 0.3 } },
      { texto: 'Reorganizo as tarefas do time para compensar sem expor ninguém', scores: { administracao: 0.75, estrategia: 0.7 } },
    ],
  },
  {
    id: 'adm-8', area: 'administracao', tipo: 'escala', nivel: 3, categoria: 'lideranca',
    texto: 'Você gosta de liderar grupos em trabalhos escolares?',
    tracos: { lideranca: 1, comunicacao: 0.5 },
  },
  {
    id: 'adm-9', area: 'administracao', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você precisa escolher entre agradar a equipe ou cobrar mais desempenho. O que faz?',
    opcoes: [
      { texto: 'Priorizo o clima bom — desempenho vem depois', scores: { administracao: 0.5, empatia: 0.6, lideranca: 0.3 } },
      { texto: 'Cobro desempenho sem me importar com os sentimentos', scores: { administracao: 0.6, lideranca: 0.5, empatia: -0.3 } },
      { texto: 'Explico a importância da meta e negocio com o time', scores: { administracao: 0.95, lideranca: 0.9, comunicacao: 0.8 } },
      { texto: 'Evito decidir e deixo cada um fazer o que quiser', scores: { administracao: 0.2, lideranca: -0.5 } },
    ],
  },
  {
    id: 'adm-10', area: 'administracao', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Você recebe informações incompletas para tomar uma decisão importante. Como age?',
    opcoes: [
      { texto: 'Decido rápido com o que tenho — não dá para esperar', scores: { administracao: 0.5, decisao: 0.6, risco: 0.4 } },
      { texto: 'Adio a decisão até ter todas as informações', scores: { administracao: 0.6, detalhismo: 0.5 } },
      { texto: 'Busco as informações que faltam e consulto quem sabe mais', scores: { administracao: 0.95, estrategia: 0.8, decisao: 0.7 } },
      { texto: 'Paraliso — tenho medo de errar', scores: { administracao: 0.1, decisao: -0.6 } },
    ],
  },
];
