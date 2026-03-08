/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  safelist: ['text-stroke', 'text-fill'],
  theme: {
    extend: {
      // --- SINCRONIZACIÓN DE COLORES (CORREGIDA PARA RGB) ---
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        panel: 'rgb(var(--color-panel-bg) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-navbar': 'rgb(var(--color-text-navbar) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',

        // Agregamos grid-line que la usamos en el Layout
        'grid-line': 'rgb(var(--color-grid-line) / <alpha-value>)',
      },

      // --- SINCRONIZACIÓN DE FUENTES ---
      fontFamily: {
        sans: ['var(--font-main)', 'sans-serif'],
      },

      // --- SINCRONIZACIÓN DE ESCALA TIPOGRÁFICA ---
      fontSize: {
        xxs: 'var(--font-size-xxs)',
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        h3: 'var(--font-size-h3)',
        h2: 'var(--font-size-h2)',
        h1: 'var(--font-size-h1)',
      },

      // --- SINCRONIZACIÓN DE RADIOS Y EFECTOS ---
      borderRadius: {
        small: 'var(--radius-small)',
        medium: 'var(--radius-medium)',
        large: 'var(--radius-large)',
        pill: 'var(--radius-pill)',
      },
      blur: {
        base: 'var(--blur-base)',
        xl: 'var(--blur-xl)',
      },
      boxShadow: {
        base: 'var(--shadow-base)',
        'inset-light': 'var(--shadow-inset-light)',
        'inset-dark': 'var(--shadow-inset-dark)',
      },
    },
  },
  plugins: [
    // --- PLUGIN PARA TIPOGRAFÍA DUAL ---
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px rgb(var(--color-text-secondary))',
          color: 'transparent',
        },
        '.text-stroke-sm': {
          '-webkit-text-stroke': '0.5px rgb(var(--color-text-primary))',
          color: 'transparent',
        },
        '.text-fill': {
          '-webkit-text-stroke': '0px',
          color: 'rgb(var(--color-text-primary))',
        },
      });
    },
  ],
};
