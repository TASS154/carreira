export const tecnologia = [
  {
    id: 'tec-1', area: 'tecnologia', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você gosta de passar tempo resolvendo problemas lógicos (quebra-cabeças, sistemas, jogos, lógica)?',
    tracos: { logica: 1, curiosidade: 0.5 },
  },
  {
    id: 'tec-2', area: 'tecnologia', tipo: 'escala', nivel: 1, categoria: 'rotina',
    texto: 'Você se sente confortável ficando horas tentando encontrar a causa de um erro até resolver?',
    tracos: { persistencia: 1, detalhismo: 0.5 },
  },
  {
    id: 'tec-3', area: 'tecnologia', tipo: 'situacao', nivel: 2, categoria: 'pressao',
    texto: 'Um sistema importante da escola para de funcionar no meio do dia de matrícula. Há pressão e várias pessoas reclamando. O que você faz?',
    opcoes: [
      { texto: 'Fico nervoso(a) e prefiro que outra pessoa resolva', scores: { tecnologia: 0.2, pressao: -0.5 } },
      { texto: 'Tento entender o problema com calma, mesmo com as pessoas reclamando', scores: { tecnologia: 0.8, persistencia: 0.7, pressao: 0.5 } },
      { texto: 'Comunico o que está acontecendo e busco ajuda enquanto investigo', scores: { tecnologia: 0.7, comunicacao: 0.6, pressao: 0.4 } },
      { texto: 'Gosto do desafio e me concentro totalmente até resolver', scores: { tecnologia: 1.0, persistencia: 1.0, pressao: 0.8 } },
    ],
  },
  {
    id: 'tec-4', area: 'tecnologia', tipo: 'escala', nivel: 2, categoria: 'aprendizado',
    texto: 'Você gosta de aprender coisas novas sozinho (vídeos, documentação, testes) sem alguém te ensinando diretamente?',
    tracos: { autonomia: 1, curiosidade: 0.6 },
  },
  {
    id: 'tec-5', area: 'tecnologia', tipo: 'situacao', nivel: 2, categoria: 'problema',
    texto: 'Você descobre que algo que funcionava ontem parou de funcionar após uma atualização. Você não sabe onde está o erro. Como age?',
    opcoes: [
      { texto: 'Desisto e peço para alguém mais experiente fazer', scores: { tecnologia: 0.1, autonomia: -0.3 } },
      { texto: 'Pesquiso na internet e testo hipóteses uma por uma', scores: { tecnologia: 0.9, autonomia: 0.8, persistencia: 0.7 } },
      { texto: 'Volto à versão anterior e deixo para depois', scores: { tecnologia: 0.4, pressao: -0.2 } },
      { texto: 'Analiso o que mudou e isolo o problema passo a passo', scores: { tecnologia: 1.0, logica: 0.9, detalhismo: 0.8 } },
    ],
  },
  {
    id: 'tec-6', area: 'tecnologia', tipo: 'escala', nivel: 3, categoria: 'ambiente',
    texto: 'Você se sente bem trabalhando em frente ao computador por longos períodos?',
    tracos: { rotina_digital: 1 },
  },
  {
    id: 'tec-7', area: 'tecnologia', tipo: 'situacao', nivel: 3, categoria: 'etica',
    texto: 'Seu time quer lançar uma funcionalidade rápida, mas você percebe que isso pode causar problemas no futuro. O que faz?',
    opcoes: [
      { texto: 'Concordo com o lançamento rápido — prazo é prioridade', scores: { tecnologia: 0.3, pressao: 0.3 } },
      { texto: 'Explico os riscos e proponho uma solução intermediária', scores: { tecnologia: 0.8, qualidade: 0.8, comunicacao: 0.6 } },
      { texto: 'Insisto em fazer do jeito certo, mesmo que demore mais', scores: { tecnologia: 0.9, qualidade: 1.0, visao_sistemica: 0.7 } },
      { texto: 'Deixo os outros decidirem — não quero conflito', scores: { tecnologia: 0.2, lideranca: -0.3 } },
    ],
  },
  {
    id: 'tec-8', area: 'tecnologia', tipo: 'escala', nivel: 3, categoria: 'tecnico',
    texto: 'Você se interessa por como aplicativos, jogos ou sites funcionam "por dentro"?',
    tracos: { curiosidade: 1, visao_sistemica: 0.7 },
  },
  {
    id: 'tec-9', area: 'tecnologia', tipo: 'situacao', nivel: 4, categoria: 'dilema',
    texto: 'Você precisa escolher entre fazer algo simples e rápido ou algo mais complexo que resolve melhor o problema a longo prazo. O que escolhe?',
    opcoes: [
      { texto: 'Sempre o mais rápido — o importante é entregar', scores: { tecnologia: 0.3, pressao: 0.4 } },
      { texto: 'Depende do contexto — avalio prazo vs. impacto', scores: { tecnologia: 0.8, visao_sistemica: 0.8, decisao: 0.6 } },
      { texto: 'Prefiro a solução robusta, mesmo que leve mais tempo', scores: { tecnologia: 0.95, qualidade: 0.9, visao_sistemica: 0.9 } },
      { texto: 'Fico indeciso(a) e acabo não fazendo nada', scores: { tecnologia: 0.1, decisao: -0.5 } },
    ],
  },
  {
    id: 'tec-10', area: 'tecnologia', tipo: 'situacao', nivel: 4, categoria: 'pressao_avancada',
    texto: 'Você está travado(a) em um problema há horas e não encontra solução. O prazo está perto. O que você faz?',
    opcoes: [
      { texto: 'Entro em pânico e não consigo mais pensar com clareza', scores: { tecnologia: 0.1, pressao: -0.8 } },
      { texto: 'Peço ajuda, explico o que já tentei e continuo junto', scores: { tecnologia: 0.7, comunicacao: 0.6, persistencia: 0.5 } },
      { texto: 'Faço uma pausa, respiro e volto com outra abordagem', scores: { tecnologia: 0.85, persistencia: 0.8, autoconhecimento: 0.6 } },
      { texto: 'Testo soluções alternativas mesmo sem certeza — não posso parar', scores: { tecnologia: 0.9, persistencia: 1.0, pressao: 0.7 } },
    ],
  },
];
