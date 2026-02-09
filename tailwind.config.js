const tokens = require('jamie-tokens/tokens.json');

// Helper function to extract $value from tokens
function extractTokenValues(tokenObj) {
  if (!tokenObj) return {};
  
  const result = {};
  for (const [key, value] of Object.entries(tokenObj)) {
    if (typeof value === 'object') {
      if (value.$value) {
        result[key] = value.$value;
      } else {
        result[key] = extractTokenValues(value);
      }
    }
  }
  return result;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: extractTokenValues(tokens.core.colors),
      spacing: extractTokenValues(tokens.core.spacing),
      fontFamily: extractTokenValues(tokens.core.fontFamilies),
      borderRadius: extractTokenValues(tokens.core.borderRadius),
      fontSize: extractTokenValues(tokens.core.fontSizes),
      fontWeight: extractTokenValues(tokens.core.fontWeights),
      lineHeight: extractTokenValues(tokens.core.lineHeights),
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
