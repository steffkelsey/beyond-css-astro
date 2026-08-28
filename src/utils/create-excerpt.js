function extractTextFromAst(node) {
  if (!node) return '';
  if (node.text) return node.text;
  if (Array.isArray(node.children)) {
    return node.children.map(extractTextFromAst).join('');
  }
  return '';
}

export const createExcerpt = (astBody, maxLength = 300) => {
  const fullText = extractTextFromAst(astBody);
  if (fullText.length <= maxLength) return fullText;
  return fullText.slice(0, maxLength).trim();
};
