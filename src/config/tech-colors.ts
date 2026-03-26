// src/config/tech-colors.ts

export const defaultTechColor = '#a1a1aa'; // Zinc-400

export const techColorMap: Record<string, string> = {
  // --- FRONTEND ---
  react: '#61DAFB',
  astro: '#FF5D01',
  typescript: '#3178C6',
  ts: '#3178C6', // Alias alineado con icon-map
  javascript: '#cfc91f', // Ajustado al amarillo oficial JS (más legible)
  js: '#cfc91f', // Alias alineado con icon-map
  html: '#E34F26',
  css: '#1572B6',
  tailwind: '#06B6D4',
  sass: '#CC6699',
  vite: '#646CFF',

  // --- BACKEND ---
  // Usamos tus colores personalizados solicitados
  '.net': '#7246ff',
  'c#': '#9a4a92',

  python: '#3776AB',

  // --- BASES DE DATOS ---
  mysql: '#4479A1',
  sql: '#2ca10c',

  // --- HERRAMIENTAS & PLATAFORMAS ---
  git: '#F05032',
  github: '#82868b', // Gris acero (funciona en light/dark)
  gitlab: '#FC6D26', // Naranja oficial GitLab
  docker: '#2496ED',
  figma: '#F24E1E',
  seo: '#44b09a', // Mint — SEO/Rendimiento técnico

  // --- LIBRERÍAS & CONCEPTOS ---
  bootstrap: '#7952B3', // Violeta oficial Bootstrap
  'entity framework': '#8e7b57', // Usamos el violeta de .NET
  jwt: '#b1170f', // Pink/Purple distintivo para JWT
  trello: '#0052CC',
  'framer motion': '#d3c65d',

  // --- CATEGORÍAS DE CERTIFICACIONES ---
  ia: '#6366F1', // Indigo vibrante para IA
  cloud: '#0EA5E9', // Cyan cielo para Cloud
  design: '#EC4899', // Pink profesional para Design
  development: '#10B981', // Teal emerald para Development
  'soft skills': '#F59E0B', // Ámbar gold para Soft Skills
};
