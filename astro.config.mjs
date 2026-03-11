// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // 1. Identidad oficial del dominio
  site: 'https://meloclaps.com',

  // 2. Modo estático para máxima velocidad en el Edge de Vercel
  output: 'static',

  // 3. SEO: Normalización de URLs para evitar contenido duplicado
  trailingSlash: 'always',

  integrations: [react(), tailwind(), sitemap()],

  // 5. Configuración de entorno de desarrollo
  server: {
    host: true,
    port: 4321,
  },

  // 6. Adaptador de despliegue con analíticas activas
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
