# Color Token System

This project uses the `jamie-tokens` package. The **primary** color ramp (lime/green) from jamie-tokens is used throughout the application, including all shadcn/ui components.

## How It Works

### Direct Token Integration
All colors are read directly from `jamie-tokens/tokens.json` in the Tailwind config:

```javascript
const tokens = require('jamie-tokens/tokens.json');

// Shadcn components use primary colors directly
primary: {
  DEFAULT: extractTokenValues(tokens.core.colors.primary)[500],  // #7acf13
  foreground: "#ffffff",
}
```

**No CSS variables or generation needed** - Colors are baked directly into Tailwind.

## Syncing Color Changes

```bash
npm update jamie-tokens  # Update package
npm run dev              # Restart - colors sync automatically
```

## Primary Color Usage

All shadcn components (buttons, inputs, etc.) automatically use the primary ramp:
- `primary-50` → background
- `primary-500` → buttons, primary elements  
- `primary-900` → text

Plus all other token colors: `teal`, `gray`, `red`, etc.

## Benefits

1. **Single Source**: All colors from `jamie-tokens`
2. **Auto-Sync**: Update package → restart → colors update
3. **No Build Step**: Direct token reading
4. **Consistent**: All components themed with primary ramp
