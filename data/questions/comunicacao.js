export const comunicacao = [
  {
    id: 'com-1', area: 'comunicacao', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de criar coisas visuais (posts, apresentações, vídeos, artes)?',
    tracos: { criatividade: 1, estetica: 0.8 },
  },
  {
    id: 'com-2', area: 'comunicacao', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se sente à vontade para se expressar em público ou nas redes sociais?',
    tracos: { comunicacao: 1, inovacao: 0.4 },
  },
  {
    id: 'com-3', area: 'comunicacao', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Um projeto criativo precisa ficar pronto amanhã, mas você não está satisfeito(a) com o resultado. O que faz?',
    opcoes: [
      { texto: 'Entrego mesmo insatisfeito(a) — prazo é prazo', scores: { comunicacao: 0.5, pressao: 0.4 } },
      { texto: 'Peço mais tempo explicando o que falta melhorar', scores: { comunicacao: 0.7, qualidade: 0.7 } },
      { texto: 'Simplifico o projeto e entrego a melhor versão possível no tempo', scores: { comunicacao: 0.9, estrategia: 0.7, pressao: 0.6 } },
      { texto: 'Trabalho a noite toda para deixar perfeito', scores: { comunicacao: 0.8, criatividade: 0.8, rotina_intensa: 0.7 } },
    ],
  },
  {
    id: 'com-4', area: 'comunicacao', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de entender o que faz as pessoas clicarem, comprarem ou se engajarem?',
    tracos: { curiosidade: 0.7, inovacao: 0.6 },
  },
  {
    id: 'com-5', area: 'comunicacao', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Uma campanha que você criou não teve o resultado esperado. Como reage?',
    opcoes: [
      { texto: 'Desisto de criar — não tenho talento', scores: { comunicacao: 0.1, resiliencia: -0.5 } },
      { texto: 'Analiso métricas, peço feedback e testo nova abordagem', scores: { comunicacao: 0.95, analise: 0.7, persistencia: 0.8 } },
      { texto: 'Culpo o público por não entender', scores: { comunicacao: 0.2, autoconhecimento: -0.3 } },
      { texto: 'Copio o que funcionou para outras marcas', scores: { comunicacao: 0.5, criatividade: 0.2 } },
    ],
  },
  {
    id: 'com-6', area: 'comunicacao', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você gosta de trabalhar com ideias novas e tendências?',
    tracos: { inovacao: 1, criatividade: 0.6 },
  },
  {
    id: 'com-7', area: 'comunicacao', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'O cliente quer uma peça que você acha feia ou que vai contra seus valores. O que faz?',
    opcoes: [
      { texto: 'Faço exatamente o que pediram — cliente manda', scores: { comunicacao: 0.4, etica: 0.2 } },
      { texto: 'Recuso o projeto completamente', scores: { comunicacao: 0.5, etica: 0.7 } },
      { texto: 'Apresento alternativas melhores e negocio uma solução', scores: { comunicacao: 0.95, criatividade: 0.8 } },
      { texto: 'Faço o pedido mas sem me envolver emocionalmente', scores: { comunicacao: 0.6, etica: 0.4 } },
    ],
  },
  {
    id: 'com-8', area: 'comunicacao', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você se interessa por ferramentas de design, edição de vídeo ou produção de conteúdo?',
    tracos: { rotina_digital: 0.6, estetica: 0.7 },
  },
  {
    id: 'com-9', area: 'comunicacao', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você precisa comunicar uma notícia ruim para muitas pessoas (rede social, escola, empresa). Como faz?',
    opcoes: [
      { texto: 'Evito dar detalhes para não criar pânico', scores: { comunicacao: 0.3, etica: 0.2 } },
      { texto: 'Sou direto(a) e frio(a) — só os fatos importam', scores: { comunicacao: 0.5, empatia: 0.2 } },
      { texto: 'Escrevo com clareza, empatia e indico próximos passos', scores: { comunicacao: 0.95, empatia: 0.8 } },
      { texto: 'Peço para outra pessoa fazer — não quero essa responsabilidade', scores: { comunicacao: 0.2, lideranca: -0.3 } },
    ],
  },
  {
    id: 'com-10', area: 'comunicacao', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Você precisa criar conteúdo original toda semana e está sem inspiração há dias. O que faz?',
    opcoes: [
      { texto: 'Publico qualquer coisa só para cumprir prazo', scores: { comunicacao: 0.3, qualidade: -0.3 } },
      { texto: 'Paro de publicar até a inspiração voltar', scores: { comunicacao: 0.4, pressao: -0.2 } },
      { texto: 'Pesquiso referências, faço brainstorm e testo formatos novos', scores: { comunicacao: 0.95, criatividade: 0.9, persistencia: 0.8 } },
      { texto: 'Repito conteúdo antigo com pequenas mudanças', scores: { comunicacao: 0.5, inovacao: 0.2 } },
    ],
  },
];
