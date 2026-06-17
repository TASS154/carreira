export const engenharia = [
  {
    id: 'eng-1', area: 'engenharia', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de entender como coisas físicas funcionam (máquinas, pontes, eletrônicos)?',
    tracos: { logica: 0.8, pratica: 0.7 },
  },
  {
    id: 'eng-2', area: 'engenharia', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se sente bem resolvendo problemas de física e matemática aplicados?',
    tracos: { logica: 1, numeros: 0.6 },
  },
  {
    id: 'eng-3', area: 'engenharia', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Um experimento de física na escola falha na frente da turma. O que você faz?',
    opcoes: [
      { texto: 'Fico envergonhado(a) e paro de participar', scores: { engenharia: 0.2, resiliencia: -0.4 } },
      { texto: 'Analiso o que deu errado e tento de novo', scores: { engenharia: 0.9, persistencia: 0.8, metodo: 0.7 } },
      { texto: 'Rio junto e deixo para lá', scores: { engenharia: 0.3 } },
      { texto: 'Explico para a turma o que aconteceu e o que aprendi', scores: { engenharia: 0.85, comunicacao: 0.6, autoconhecimento: 0.6 } },
    ],
  },
  {
    id: 'eng-4', area: 'engenharia', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de construir, montar ou consertar coisas com as mãos?',
    tracos: { pratica: 1, detalhismo: 0.5 },
  },
  {
    id: 'eng-5', area: 'engenharia', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Um projeto de engenharia está acima do orçamento. O que você propõe?',
    opcoes: [
      { texto: 'Peço mais dinheiro sem mudar o projeto', scores: { engenharia: 0.3, estrategia: 0.2 } },
      { texto: 'Redesenho partes do projeto mantendo segurança e função', scores: { engenharia: 0.95, visao_sistemica: 0.8, criatividade: 0.6 } },
      { texto: 'Uso materiais mais baratos mesmo com risco', scores: { engenharia: 0.4, etica: -0.4 } },
      { texto: 'Cancelo o projeto — não dá para fazer com menos', scores: { engenharia: 0.2, persistencia: -0.3 } },
    ],
  },
  {
    id: 'eng-6', area: 'engenharia', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você se interessaria por visitar obras, fábricas ou laboratórios?',
    tracos: { campo: 0.8, pratica: 0.6 },
  },
  {
    id: 'eng-7', area: 'engenharia', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Você percebe um erro de cálculo em um projeto que já foi aprovado. O que faz?',
    opcoes: [
      { texto: 'Fico quieto(a) — não fui eu quem fez', scores: { engenharia: 0.1, etica: -0.6 } },
      { texto: 'Alerto a equipe e proponho correção imediata', scores: { engenharia: 0.95, etica: 0.9, responsabilidade: 0.9 } },
      { texto: 'Espero ver se dá problema na prática', scores: { engenharia: 0.2, etica: -0.5 } },
      { texto: 'Documento o erro e envio por escrito formalmente', scores: { engenharia: 0.9, responsabilidade: 0.8, metodo: 0.7 } },
    ],
  },
  {
    id: 'eng-8', area: 'engenharia', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você gosta de pensar em segurança, eficiência e impacto de grandes projetos?',
    tracos: { visao_sistemica: 1, responsabilidade: 0.6 },
  },
  {
    id: 'eng-9', area: 'engenharia', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você deve escolher entre uma solução barata com impacto ambiental ou cara e sustentável. O que prioriza?',
    opcoes: [
      { texto: 'Sempre a mais barata — orçamento manda', scores: { engenharia: 0.3, etica: 0.2 } },
      { texto: 'A sustentável, mesmo custando mais', scores: { engenharia: 0.85, etica: 0.8, visao_futuro: 0.7 } },
      { texto: 'Busco um meio-termo técnico com análise de custo-benefício', scores: { engenharia: 0.95, analise: 0.8, visao_sistemica: 0.8 } },
      { texto: 'Deixo o cliente decidir sem minha opinião', scores: { engenharia: 0.4, lideranca: 0.2 } },
    ],
  },
  {
    id: 'eng-10', area: 'engenharia', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Uma estrutura que você ajudou a projetar apresenta rachaduras. Há pessoas usando o local. O que faz?',
    opcoes: [
      { texto: 'Espero um laudo oficial antes de fazer qualquer coisa', scores: { engenharia: 0.5, responsabilidade: 0.4 } },
      { texto: 'Evacuo o local imediatamente e aciono autoridades', scores: { engenharia: 0.95, responsabilidade: 1.0, pressao: 0.8 } },
      { texto: 'Fico paralisado(a) com medo da responsabilidade', scores: { engenharia: 0.2, pressao: -0.6 } },
      { texto: 'Reforço a estrutura rapidamente sem interromper o uso', scores: { engenharia: 0.4, etica: -0.3 } },
    ],
  },
];
