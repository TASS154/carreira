export const direito = [
  {
    id: 'dir-1', area: 'direito', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de debater ideias e defender um ponto de vista?',
    tracos: { argumentacao: 1, etica: 0.5 },
  },
  {
    id: 'dir-2', area: 'direito', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se importa com justiça e com o que é certo ou errado em situações do dia a dia?',
    tracos: { etica: 1, justica_social: 0.7 },
  },
  {
    id: 'dir-3', area: 'direito', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Você presencia uma injustiça na escola (bullying, trapaça, discriminação). O que faz?',
    opcoes: [
      { texto: 'Finjo que não vi — não quero me envolver', scores: { direito: 0.1, etica: -0.3 } },
      { texto: 'Converso com a vítima e oriento buscar ajuda', scores: { direito: 0.8, empatia: 0.8, etica: 0.7 } },
      { texto: 'Denuncio formalmente com evidências', scores: { direito: 0.95, etica: 0.9, responsabilidade: 0.8 } },
      { texto: 'Confronto o agressor diretamente na hora', scores: { direito: 0.6, pressao: 0.5, argumentacao: 0.5 } },
    ],
  },
  {
    id: 'dir-4', area: 'direito', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de ler textos longos e interpretar regras ou contratos?',
    tracos: { detalhismo: 0.8, analise: 0.6 },
  },
  {
    id: 'dir-5', area: 'direito', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Duas pessoas pedem sua ajuda em um conflito e cada uma conta uma versão diferente. Como procede?',
    opcoes: [
      { texto: 'Acredito em quem conheço melhor', scores: { direito: 0.2, etica: -0.3 } },
      { texto: 'Ouço os dois com calma, faço perguntas e busco evidências', scores: { direito: 0.95, analise: 0.8, escuta: 0.7 } },
      { texto: 'Digo que não posso ajudar — é complicado demais', scores: { direito: 0.3, pressao: -0.2 } },
      { texto: 'Sugiro que resolvam sozinhos', scores: { direito: 0.4 } },
    ],
  },
  {
    id: 'dir-6', area: 'direito', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você se sentiria confortável falando em público ou representando alguém?',
    tracos: { argumentacao: 0.7, comunicacao: 0.6 },
  },
  {
    id: 'dir-7', area: 'direito', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Você descobre que um amigo cometeu algo errado, mas ele pede para você não contar. O que faz?',
    opcoes: [
      { texto: 'Cubro meu amigo — lealdade vem primeiro', scores: { direito: 0.2, etica: -0.5 } },
      { texto: 'Confronto meu amigo e insisto que ele assuma', scores: { direito: 0.8, etica: 0.8, argumentacao: 0.6 } },
      { texto: 'Busco orientação de um adulto de confiança', scores: { direito: 0.85, etica: 0.7, responsabilidade: 0.7 } },
      { texto: 'Denuncio imediatamente sem conversar antes', scores: { direito: 0.7, etica: 0.6, empatia: 0.2 } },
    ],
  },
  {
    id: 'dir-8', area: 'direito', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você se interessa por como leis, políticas e o sistema de justiça funcionam?',
    tracos: { curiosidade: 0.7, analise: 0.5 },
  },
  {
    id: 'dir-9', area: 'direito', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você precisa defender alguém que você sabe que errou, mas tem direito à defesa. Como age?',
    opcoes: [
      { texto: 'Recuso — não defendo quem errou', scores: { direito: 0.4, etica: 0.5 } },
      { texto: 'Defendo com convicção total, ignorando os fatos', scores: { direito: 0.3, etica: -0.4 } },
      { texto: 'Defendo os direitos da pessoa dentro da lei, com ética', scores: { direito: 1.0, etica: 0.9, argumentacao: 0.9 } },
      { texto: 'Fico dividido(a) e não consigo atuar bem', scores: { direito: 0.3, pressao: -0.3 } },
    ],
  },
  {
    id: 'dir-10', area: 'direito', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Em um debate, você está perdendo argumentos e o público vai contra você. O que faz?',
    opcoes: [
      { texto: 'Desisto e saio — não aguento a pressão', scores: { direito: 0.2, pressao: -0.6 } },
      { texto: 'Mudo de posição para agradar o público', scores: { direito: 0.2, etica: -0.4 } },
      { texto: 'Reorganizo argumentos, uso evidências e mantenho a calma', scores: { direito: 0.95, argumentacao: 0.9, pressao: 0.8 } },
      { texto: 'Ataco o oponente pessoalmente para virar o jogo', scores: { direito: 0.3, etica: -0.5 } },
    ],
  },
];
