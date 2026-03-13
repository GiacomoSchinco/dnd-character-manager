// tailwind.config.js
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colori base carta antica
        parchment: {
          50: '#fdf8ed',
          100: '#faf0db',
          200: '#f5e2b8',
          300: '#efd095',
          400: '#e5b55e',
          500: '#d99b3c',
          600: '#b87a2e',
          700: '#8b5a2b',
          800: '#6b4423',
          900: '#4f351c',
        },
        ancient: {
          gold: '#C9A227',
          burgundy: '#8B1E1E',
          brown: '#3B2F2F',
          cream: '#F5E6C8',
          olive: '#5C3B8B',
        },
      },
      fontFamily: {
        'serif': ['MedievalSharp', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        // Il tuo tema esistente
        cupcake_fantasy: {
          primary: "#8B1E1E",
          "primary-content": "#FFF3D6",
          secondary: "#C9A227",
          "secondary-content": "#1F1300",
          accent: "#5C3B8B",
          "accent-content": "#F5E6C8",
          neutral: "#3B2F2F",
          "neutral-content": "#EADBC8",
          "base-100": "#F5E6C8",
          "base-200": "#E6D2A5",
          "base-300": "#CBB893",
          "base-content": "#1F1F1F",
          info: "#3A6EA5",
          "info-content": "#E6F1FB",
          success: "#356A3A",
          "success-content": "#EAF7EA",
          warning: "#D98C1F",
          "warning-content": "#FFF7E6",
          error: "#A32626",
          "error-content": "#FDECEC",
        },
        // Nuovo tema "ancient" con i colori che ti piacciono
        ancient: {
          primary: "#8B5A2B",     // amber-700
          "primary-content": "#FDF8ED", // parchment-50
          secondary: "#C9A227",    // ancient.gold
          "secondary-content": "#4F351C", // parchment-900
          accent: "#B87A2E",       // parchment-600
          "accent-content": "#F5E6C8",
          neutral: "#3B2F2F",      // ancient.brown
          "neutral-content": "#F5E2B8", // parchment-200
          "base-100": "#FAF0DB",   // parchment-100
          "base-200": "#F5E2B8",   // parchment-200
          "base-300": "#EFD095",   // parchment-300
          "base-content": "#4F351C", // parchment-900
          info: "#3A6EA5",
          "info-content": "#FDF8ED",
          success: "#356A3A",
          "success-content": "#FDF8ED",
          warning: "#D98C1F",
          "warning-content": "#FDF8ED",
          error: "#8B1E1E",        // ancient.burgundy
          "error-content": "#FDF8ED",
        },
      },
      "cupcake", // tema default di DaisyUI
    ],
  },
};

export default config;