export const ciencias = [
  {
    id: 'cie-1', area: 'ciencias', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de fazer experimentos e testar hipóteses na prática?',
    tracos: { metodo: 1, curiosidade: 0.7 },
  },
  {
    id: 'cie-2', area: 'ciencias', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se interessa por biologia, química ou fenômenos da natureza?',
    tracos: { natureza: 1, curiosidade: 0.6 },
  },
  {
    id: 'cie-3', area: 'ciencias', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Um experimento no laboratório dá resultado inesperado que contradiz sua hipótese. O que faz?',
    opcoes: [
      { texto: 'Ajusto o resultado para bater com o esperado', scores: { ciencias: 0.1, etica: -0.8 } },
      { texto: 'Repito o experimento com rigor e documento tudo', scores: { ciencias: 0.95, metodo: 0.9, etica: 0.8 } },
      { texto: 'Descarto como erro e sigo em frente', scores: { ciencias: 0.3, metodo: -0.3 } },
      { texto: 'Fico animado(a) — resultados inesperados podem ser descobertas', scores: { ciencias: 0.9, curiosidade: 0.9, persistencia: 0.7 } },
    ],
  },
  {
    id: 'cie-4', area: 'ciencias', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de ler sobre descobertas científicas e inovações?',
    tracos: { curiosidade: 1 },
  },
  {
    id: 'cie-5', area: 'ciencias', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Você precisa analisar muitos dados de um experimento e encontrar um padrão. Como age?',
    opcoes: [
      { texto: 'Desisto — são números demais', scores: { ciencias: 0.1, persistencia: -0.4 } },
      { texto: 'Organizo em tabelas, gráficos e busco correlações', scores: { ciencias: 0.95, analise: 0.9, metodo: 0.8 } },
      { texto: 'Escolho o resultado que mais me agrada', scores: { ciencias: 0.05, etica: -0.6 } },
      { texto: 'Peço ajuda e aprendo o método com quem sabe', scores: { ciencias: 0.8, autonomia: 0.5 } },
    ],
  },
  {
    id: 'cie-6', area: 'ciencias', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você teria paciência para trabalhos de pesquisa que levam meses ou anos?',
    tracos: { persistencia: 1, metodo: 0.6 },
  },
  {
    id: 'cie-7', area: 'ciencias', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Você descobre que pode simplificar dados para publicar mais rápido, omitindo resultados negativos. O que faz?',
    opcoes: [
      { texto: 'Publico só os positivos — é assim que a ciência funciona', scores: { ciencias: 0.2, etica: -0.6 } },
      { texto: 'Incluo todos os dados, mesmo os que não favorecem minha hipótese', scores: { ciencias: 0.95, etica: 0.9, metodo: 0.9 } },
      { texto: 'Deixo os negativos em nota de rodapé pequena', scores: { ciencias: 0.4, etica: 0.2 } },
      { texto: 'Consulto meu orientador antes de decidir', scores: { ciencias: 0.8, responsabilidade: 0.7 } },
    ],
  },
  {
    id: 'cie-8', area: 'ciencias', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você gosta de trabalhar com precisão em laboratório (medidas, protocolos, equipamentos)?',
    tracos: { precisao: 1, detalhismo: 0.7 },
  },
  {
    id: 'cie-9', area: 'ciencias', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Sua pesquisa pode ajudar muitas pessoas, mas exige testes em animais. Como você se posiciona?',
    opcoes: [
      { texto: 'Recuso qualquer pesquisa com animais', scores: { ciencias: 0.4, etica: 0.6 } },
      { texto: 'Aceito sem questionar — é necessário', scores: { ciencias: 0.5, etica: 0.3 } },
      { texto: 'Avalio alternativas, sigo protocolos éticos rigorosos se necessário', scores: { ciencias: 0.9, etica: 0.8, metodo: 0.7 } },
      { texto: 'Evito esse tipo de pesquisa e mudo de área', scores: { ciencias: 0.3, curiosidade: 0.2 } },
    ],
  },
  {
    id: 'cie-10', area: 'ciencias', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Após meses de pesquisa, seus resultados não confirmam a hipótese principal. O financiamento depende de resultados positivos. O que faz?',
    opcoes: [
      { texto: 'Manipulo os dados para manter o financiamento', scores: { ciencias: 0.05, etica: -1.0 } },
      { texto: 'Reporto os resultados reais e reformulo a pesquisa', scores: { ciencias: 1.0, etica: 0.95, persistencia: 0.8 } },
      { texto: 'Abandono a pesquisa em silêncio', scores: { ciencias: 0.3, persistencia: -0.3 } },
      { texto: 'Publico parcialmente e escondo o que não funcionou', scores: { ciencias: 0.2, etica: -0.5 } },
    ],
  },
];
