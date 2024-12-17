export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB", // Azul moderno
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#64748B", // Gris neutro
          light: "#94A3B8",
          dark: "#475569",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        mono: ["Menlo", "Courier New", "monospace"],
      },
      boxShadow: {
        "custom-light": "0 2px 4px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
