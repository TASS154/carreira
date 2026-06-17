export const financas = [
  {
    id: 'fin-1', area: 'financas', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de lidar com números e cálculos?',
    tracos: { numeros: 1, analise: 0.5 },
  },
  {
    id: 'fin-2', area: 'financas', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se sente confortável tomando decisões com base em dados e risco?',
    tracos: { risco: 0.8, decisao: 0.6 },
  },
  {
    id: 'fin-3', area: 'financas', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Uma empresa está perdendo dinheiro e você precisa identificar o motivo. O que faz?',
    opcoes: [
      { texto: 'Fico perdido(a) — números financeiros me confundem', scores: { financas: 0.1, numeros: -0.3 } },
      { texto: 'Organizo os gastos por categoria e busco onde está o vazamento', scores: { financas: 0.95, analise: 0.9, organizacao: 0.7 } },
      { texto: 'Peço para alguém de finanças resolver', scores: { financas: 0.2, autonomia: -0.2 } },
      { texto: 'Comparo com meses anteriores e identifico mudanças', scores: { financas: 0.85, padroes: 0.8, analise: 0.8 } },
    ],
  },
  {
    id: 'fin-4', area: 'financas', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de analisar gráficos, tabelas e padrões?',
    tracos: { padroes: 1, analise: 0.7 },
  },
  {
    id: 'fin-5', area: 'financas', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Você percebe um possível erro financeiro que pode prejudicar a empresa. O que faz?',
    opcoes: [
      { texto: 'Ignoro — não quero criar problema', scores: { financas: 0.1, etica: -0.5 } },
      { texto: 'Verifico os dados, documento e reporto imediatamente', scores: { financas: 0.95, etica: 0.9, responsabilidade: 0.9 } },
      { texto: 'Corrijo sozinho(a) sem avisar ninguém', scores: { financas: 0.45, etica: 0.3 } },
      { texto: 'Espero para ter certeza absoluta antes de falar', scores: { financas: 0.7, detalhismo: 0.6 } },
    ],
  },
  {
    id: 'fin-6', area: 'financas', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você gosta de planejar gastos e pensar no futuro financeiro?',
    tracos: { visao_futuro: 1, organizacao: 0.6 },
  },
  {
    id: 'fin-7', area: 'financas', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Um cliente quer uma decisão rápida de investimento, mas há risco envolvido. Como responde?',
    opcoes: [
      { texto: 'Indico o investimento para não perder o cliente', scores: { financas: 0.2, etica: -0.5 } },
      { texto: 'Explico os riscos claramente e deixo a decisão com ele', scores: { financas: 0.9, etica: 0.9, comunicacao: 0.7 } },
      { texto: 'Recuso dar qualquer orientação — é muita responsabilidade', scores: { financas: 0.4, risco: -0.3 } },
      { texto: 'Apresento cenários (otimista, realista, pessimista) com números', scores: { financas: 1.0, analise: 0.9, comunicacao: 0.8, risco: 0.8 } },
    ],
  },
  {
    id: 'fin-8', area: 'financas', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você gosta de trabalhos mais analíticos do que criativos?',
    tracos: { analise: 1 },
  },
  {
    id: 'fin-9', area: 'financas', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você precisa explicar uma decisão financeira complexa para alguém que não entende nada do assunto. Como faz?',
    opcoes: [
      { texto: 'Uso termos técnicos — se não entendeu, problema dele', scores: { financas: 0.3, comunicacao: -0.4 } },
      { texto: 'Desisto de explicar e mando um relatório', scores: { financas: 0.5, comunicacao: 0.2 } },
      { texto: 'Uso analogias do dia a dia e exemplos práticos', scores: { financas: 0.9, comunicacao: 0.9, didatica: 0.7 } },
      { texto: 'Faço um gráfico visual simples e resumo em 3 pontos', scores: { financas: 0.95, comunicacao: 0.85, criatividade: 0.4 } },
    ],
  },
  {
    id: 'fin-10', area: 'financas', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Você erra uma análise que causa prejuízo. O que você faz depois?',
    opcoes: [
      { texto: 'Culpo fatores externos e sigo em frente', scores: { financas: 0.2, responsabilidade: -0.5 } },
      { texto: 'Analiso o erro, documento lições e ajusto o processo', scores: { financas: 0.95, responsabilidade: 0.9, metodo: 0.8 } },
      { texto: 'Fico traumatizado(a) e evito decisões financeiras', scores: { financas: 0.3, resiliencia: -0.4 } },
      { texto: 'Comunico o erro imediatamente e proponho correção', scores: { financas: 0.9, etica: 0.9, comunicacao: 0.7 } },
    ],
  },
];
