# Figma Color Tokens with Tailwind CSS

A Vite-powered project that demonstrates the integration of Figma design tokens with Tailwind CSS. This project uses the `jamie-tokens` package to automatically sync design system tokens from Figma into your Tailwind configuration.

## Features

- 🎨 **Design Token Integration**: Automatically imports color, spacing, typography, and other design tokens from the `jamie-tokens` package
- ⚡ **Vite**: Fast development server with Hot Module Replacement (HMR)
- 🎯 **Tailwind CSS**: Utility-first CSS framework with custom token extensions
- 📝 **Typography Plugin**: Enhanced typography support with `@tailwindcss/typography`

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Create a production build:

```bash
npm build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
figma-color-tokens/
├── src/
│   ├── main.js          # Main JavaScript entry point
│   └── style.css        # Global styles and Tailwind imports
├── index.html           # HTML template with token examples
├── tailwind.config.js   # Tailwind configuration with token integration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Token Integration

The project uses the `jamie-tokens` package which contains design tokens exported from Figma. These tokens are automatically integrated into Tailwind CSS through the configuration file.

### Supported Token Categories

The following token categories are imported and available in your Tailwind classes:

- **Colors**: Custom color palette from Figma
- **Spacing**: Spacing scale for margins, padding, gaps, etc.
- **Typography**: Font families, sizes, weights, and line heights
- **Border Radius**: Corner radius values

### How It Works

The `tailwind.config.js` file includes a helper function that extracts `$value` properties from the token JSON structure and maps them to Tailwind's theme configuration:

```javascript
const tokens = require('jamie-tokens/tokens.json');

function extractTokenValues(tokenObj) {
  // Extracts $value from token structure
  // Returns flat object for Tailwind
}

module.exports = {
  theme: {
    extend: {
      colors: extractTokenValues(tokens.core.colors),
      spacing: extractTokenValues(tokens.core.spacing),
      // ... other tokens
    }
  }
}
```

### Using Tokens in Your HTML

Once integrated, you can use your Figma tokens as standard Tailwind classes:

```html
<!-- Using custom colors from Figma -->
<div class="text-white bg-blue-500">
  <h1 class="text-green-600">Hello!</h1>
</div>

<!-- Using custom spacing -->
<div class="p-4 mt-8">
  Content with token-based spacing
</div>
```

## Updating Design Tokens

To update the design tokens from Figma:

1. Update the `jamie-tokens` package to the latest version
2. Rebuild your project

```bash
npm update jamie-tokens
npm run build
```

## Technologies Used

- **Vite** (6.3.5): Build tool and dev server
- **Tailwind CSS** (3.4.18): Utility-first CSS framework
- **PostCSS** (8.5.3): CSS transformation
- **Autoprefixer** (10.4.21): Automatic vendor prefixing
- **@tailwindcss/typography** (0.5.16): Typography plugin

## License

ISC

## Contributing

Feel free to submit issues or pull requests for improvements.
