# Descubra Sua Carreira

Questionário de orientação vocacional para estudantes do **2º ano do ensino médio**, com avaliação por **Google Gemini**.

## Deploy na Vercel

1. Faça push deste repositório para o GitHub
2. Importe o projeto na [Vercel](https://vercel.com)
3. Em **Settings → Environment Variables**, adicione:

| Variável | Valor | Obrigatório |
|----------|-------|-------------|
| `GEMINI_API_KEY` | Sua chave em [Google AI Studio](https://aistudio.google.com/apikey) | Sim |
| `GEMINI_MODEL` | `gemini-2.5-flash` (padrão) ou `gemini-3.5-flash` | Não |

4. Faça o deploy

### Modelos — o que usar e o que evitar

| Modelo | Status |
|--------|--------|
| `gemini-2.5-flash` | ✅ Estável (padrão) |
| `gemini-3.5-flash` | ✅ Recomendado (mais recente) |
| `gemini-3.1-flash-lite` | ✅ Alternativa econômica |
| `gemini-2.0-flash` | ❌ Descontinuado (jun/2026) |
| `gemini-1.5-*` | ❌ Descontinuado |

A API bloqueia modelos descontinuados automaticamente.

## Desenvolvimento local

```bash
cp .env.example .env.local
# Edite .env.local com sua GEMINI_API_KEY

npm install
npx vercel dev
```

O comando `vercel dev` sobe o frontend **e** a rota `/api/evaluate` com as variáveis do `.env.local`.

> `npx serve` ou `python -m http.server` **não** executam a API — use `vercel dev`.

## Como funciona

1. O estudante responde 100 perguntas em 10 áreas
2. O frontend envia as respostas para `POST /api/evaluate`
3. O servidor calcula scores locais e monta um prompt para o Gemini
4. O Gemini retorna as **3 carreiras** com % e justificativas personalizadas
5. Se a IA falhar, o sistema usa o cálculo local como fallback

## Estrutura

```
api/evaluate.js     → Serverless function (Vercel)
lib/gemini.js       → Cliente Gemini + validação de modelo
lib/evaluator.js    → Motor de pontuação local
lib/prompt.js       → Montagem do prompt para IA
data/               → Perguntas e carreiras
js/app.js           → Interface do questionário
```

## Variáveis de ambiente

Copie `.env.example` para `.env.local` (local) ou configure na Vercel:

```env
GEMINI_API_KEY=sua_chave_aqui
GEMINI_MODEL=gemini-2.5-flash
```
