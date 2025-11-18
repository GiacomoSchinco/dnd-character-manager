import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
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
      },
      "cupcake",
    ],
  },
};
