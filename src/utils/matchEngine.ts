// Text preprocessing + similarity matching for the FAQ chatbot.
// Pipeline: lowercase -> remove punctuation -> tokenize -> remove stop words -> stem lightly.

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'to', 'of', 'in', 'on', 'at', 'by', 'for', 'with', 'about', 'as',
  'and', 'or', 'but', 'not', 'no', 'if', 'then', 'else', 'when', 'how',
  'what', 'why', 'who', 'where', 'which', 'do', 'does', 'did', 'can',
  'could', 'should', 'would', 'will', 'shall', 'may', 'might', 'must',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'my', 'your',
  'this', 'that', 'these', 'those', 'there', 'here', 'so', 'than', 'too',
  'very', 'just', 'from', 'into', 'out', 'up', 'down', 'over', 'under',
]);

// Very light stemming — strips common suffixes so "running" matches "run".
function stem(word: string): string {
  return word
    .replace(/(ing|edly|ingly)$/, '')
    .replace(/(ed|ly|ies)$/, (m) => (m === 'ies' ? 'y' : ''))
    .replace(/(es|s)$/, (w) => (w.length > 3 ? '' : w));
}

// Preprocess raw text into a clean list of meaningful tokens.
export function preprocess(text: string): string[] {
  const lower = text.toLowerCase();
  const noPunct = lower.replace(/[^\w\s]/g, ' ');
  const tokens = noPunct.split(/\s+/).filter(Boolean);
  return tokens
    .filter((t) => !STOP_WORDS.has(t))
    .map((t) => stem(t))
    .filter((t) => t.length > 1);
}

// Jaccard similarity between two token sets: |A ∩ B| / |A ∪ B|.
function jaccardSimilarity(setA: string[], setB: string[]): number {
  const a = new Set(setA);
  const b = new Set(setB);
  let intersection = 0;
  for (const t of a) if (b.has(t)) intersection++;
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// Overlap coefficient: |A ∩ B| / min(|A|, |B|) — rewards partial keyword matches.
function overlapSimilarity(setA: string[], setB: string[]): number {
  const a = new Set(setA);
  const b = new Set(setB);
  let intersection = 0;
  for (const t of a) if (b.has(t)) intersection++;
  const minSize = Math.min(a.size, b.size);
  return minSize === 0 ? 0 : intersection / minSize;
}

export interface MatchResult {
  bestIndex: number;
  bestScore: number;
}

// Score every FAQ question against the user query and return the best match.
// We combine question-level Jaccard similarity with keyword overlap to reward
// both full-question phrasing and keyword-driven queries.
export function findBestMatch(
  query: string,
  faqQuestions: string[],
  faqKeywords: string[][]
): MatchResult {
  const queryTokens = preprocess(query);
  if (queryTokens.length === 0) return { bestIndex: -1, bestScore: 0 };

  let bestIndex = -1;
  let bestScore = 0;

  for (let i = 0; i < faqQuestions.length; i++) {
    const qTokens = preprocess(faqQuestions[i]);
    const kTokens = preprocess(faqKeywords[i].join(' '));

    const questionScore = jaccardSimilarity(queryTokens, qTokens);
    const keywordScore = overlapSimilarity(queryTokens, kTokens);

    // Weighted blend: question phrasing matters most, keywords are a boost.
    const combined = questionScore * 0.6 + keywordScore * 0.4;

    if (combined > bestScore) {
      bestScore = combined;
      bestIndex = i;
    }
  }

  return { bestIndex, bestScore };
}

// Minimum score threshold. Below this we treat the query as unknown rather
// than returning a weakly-related answer.
export const MATCH_THRESHOLD = 0.12;
