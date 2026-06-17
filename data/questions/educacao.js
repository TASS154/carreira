export const educacao = [
  {
    id: 'edu-1', area: 'educacao', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de explicar coisas para outras pessoas e ver quando elas entendem?',
    tracos: { didatica: 1, paciencia: 0.7 },
  },
  {
    id: 'edu-2', area: 'educacao', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se interessa por história, literatura, filosofia ou ciências humanas?',
    tracos: { curiosidade: 0.8, comunicacao: 0.4 },
  },
  {
    id: 'edu-3', area: 'educacao', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Um colega não entende a matéria e o professor não tem tempo de explicar de novo. O que você faz?',
    opcoes: [
      { texto: 'Digo que também não entendi e deixo quieto', scores: { educacao: 0.2, empatia: 0.2 } },
      { texto: 'Explico de um jeito diferente, com paciência', scores: { educacao: 0.95, didatica: 0.9, empatia: 0.7 } },
      { texto: 'Empresto minha resposta para ele copiar', scores: { educacao: 0.3, etica: -0.3 } },
      { texto: 'Marco um horário depois da aula para estudar junto', scores: { educacao: 0.9, paciencia: 0.8, organizacao: 0.5 } },
    ],
  },
  {
    id: 'edu-4', area: 'educacao', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de ler, pesquisar e aprender sobre diferentes culturas e épocas?',
    tracos: { curiosidade: 1 },
  },
  {
    id: 'edu-5', area: 'educacao', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Você precisa dar uma apresentação e a turma está desatenta e conversando. Como reage?',
    opcoes: [
      { texto: 'Leio os slides rapidamente e termino logo', scores: { educacao: 0.3, comunicacao: 0.2 } },
      { texto: 'Fico nervoso(a) e travo', scores: { educacao: 0.2, pressao: -0.4 } },
      { texto: 'Faço uma pergunta, uso exemplo curioso ou mudo a dinâmica', scores: { educacao: 0.95, didatica: 0.9, criatividade: 0.7 } },
      { texto: 'Peço silêncio de forma autoritária', scores: { educacao: 0.5, lideranca: 0.4 } },
    ],
  },
  {
    id: 'edu-6', area: 'educacao', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você teria paciência para repetir explicações várias vezes sem se irritar?',
    tracos: { paciencia: 1, empatia: 0.6 },
  },
  {
    id: 'edu-7', area: 'educacao', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Um aluno cola na prova e você percebe. O que faz?',
    opcoes: [
      { texto: 'Finjo que não vi — não quero ser chato(a)', scores: { educacao: 0.3, etica: 0.2 } },
      { texto: 'Converso com ele depois, em particular, sobre honestidade', scores: { educacao: 0.85, empatia: 0.7, etica: 0.7 } },
      { texto: 'Avisei o professor na hora', scores: { educacao: 0.7, etica: 0.8, responsabilidade: 0.6 } },
      { texto: 'Culpo o sistema — provas não medem aprendizado', scores: { educacao: 0.5, justica_social: 0.4 } },
    ],
  },
  {
    id: 'edu-8', area: 'educacao', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você gosta de organizar informações de forma clara (resumos, mapas mentais, apostilas)?',
    tracos: { organizacao: 0.7, didatica: 0.8 },
  },
  {
    id: 'edu-9', area: 'educacao', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Um aluno é desrespeitoso com você repetidamente. Como lida?',
    opcoes: [
      { texto: 'Respondo na mesma moeda', scores: { educacao: 0.2, etica: 0.2 } },
      { texto: 'Ignoro completamente', scores: { educacao: 0.4, lideranca: 0.2 } },
      { texto: 'Converso em particular, entendo o motivo e estabeleço limites', scores: { educacao: 0.95, empatia: 0.8, lideranca: 0.7 } },
      { texto: 'Peço para sair da sala e nunca mais ajudo', scores: { educacao: 0.3, paciencia: -0.3 } },
    ],
  },
  {
    id: 'edu-10', area: 'educacao', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Você precisa adaptar uma aula complexa para alunos com níveis muito diferentes. Como faz?',
    opcoes: [
      { texto: 'Ensino só para quem acompanha — os outros que se esforcem', scores: { educacao: 0.3, empatia: 0.2 } },
      { texto: 'Simplifico tudo ao máximo para o nível mais baixo', scores: { educacao: 0.6, didatica: 0.5 } },
      { texto: 'Preparo atividades em níveis, uso exemplos variados e circulo pela sala', scores: { educacao: 1.0, didatica: 0.95, estrategia: 0.8 } },
      { texto: 'Desisto de adaptar — ensino do meu jeito', scores: { educacao: 0.2, paciencia: -0.2 } },
    ],
  },
];
