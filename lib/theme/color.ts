// lib/theme/colors.ts
export const ancientColors = {
  // Colori base
  background: {
    light: '#FAF0DB', // parchment-100
    DEFAULT: '#F5E6C8', // cream
    dark: '#E6D2A5',   // parchment-200
    darker: '#CBB893', // parchment-300
  },
  border: {
    light: '#EFD095',  // parchment-300
    DEFAULT: '#8B5A2B', // amber-700
    dark: '#6B4423',   // parchment-800
    darker: '#4F351C', // parchment-900
  },
  text: {
    light: '#FDF8ED',  // parchment-50
    DEFAULT: '#4F351C', // parchment-900
    dark: '#3B2F2F',   // ancient.brown
    muted: '#8B5A2B',  // amber-700
  },
  accent: {
    gold: '#C9A227',
    burgundy: '#8B1E1E',
    olive: '#5C3B8B',
    brown: '#3B2F2F',
  },
  // Semi delle carte (per effetti)
  suits: {
    spade: '#2C3E50',
    club: '#27AE60',
    heart: '#C0392B',
    diamond: '#E67E22',
  }
};

// Classi Tailwind predefinite per uso comune
export const cardStyles = {
  container: 'bg-parchment-100 border-8 border-amber-800 shadow-2xl',
  innerBorder: 'border-2 border-amber-700/30 rounded-lg',
  texture: 'bg-gradient-to-br from-parchment-100/50 to-parchment-300/30',
  text: {
    title: 'text-lg font-bold text-parchment-900 font-serif',
    subtitle: 'text-xs text-amber-700',
    label: 'text-amber-800 font-semibold',
    value: 'text-xs text-parchment-900',
  },
  button: {
    primary: 'bg-amber-700 text-parchment-100 border-2 border-amber-900 hover:bg-amber-800',
    secondary: 'bg-amber-900/80 text-amber-300 border border-amber-700 hover:bg-amber-950',
  }
};