// src/config/tech-icon-map.ts
import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMysql,
  IconBrandGit,
  IconBrandFigma,
  IconDatabase,
  IconLockPassword,
  IconBrandAstro,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandBootstrap,
  IconBrandVite,
  IconBrandGithub,
  IconTerminal2,
  IconBrandSass,
  IconBrandGitlab,
  IconBrandPython,
  IconBrandTrello,
  IconFileTypeSql,
  IconBrandFramerMotion,
  IconBrain,
  IconCloud,
  IconPalette,
  IconCode,
  IconUsers,
  IconSeo,
} from '@tabler/icons-react';

// IMPORTAMOS LOS ICONOS CUSTOM
import IconDotNet from '@/components/icons/IconDotNet';
import IconCSharp from '@/components/icons/IconCSharp';

export const DefaultIcon = IconTerminal2;

export const techIconMap: Record<string, any> = {
  // --- LENGUAJES & FRAMEWORKS ---
  react: IconBrandReact,
  astro: IconBrandAstro,
  typescript: IconBrandTypescript,
  ts: IconBrandTypescript,
  javascript: IconBrandJavascript,
  '.net': IconDotNet,
  'c#': IconCSharp,
  python: IconBrandPython,

  // --Pseudolenguajes --
  html: IconBrandHtml5,
  sass: IconBrandSass,
  css: IconBrandCss3,

  //Librerias
  tailwind: IconBrandTailwind,
  bootstrap: IconBrandBootstrap,
  'framer motion': IconBrandFramerMotion,

  // --- HERRAMIENTAS & PLATAFORMAS ---
  mysql: IconBrandMysql,
  sql: IconFileTypeSql,
  git: IconBrandGit,
  github: IconBrandGithub,
  gitlab: IconBrandGitlab,
  docker: IconBrandDocker,
  vite: IconBrandVite,
  figma: IconBrandFigma,
  trello: IconBrandTrello,
  seo: IconSeo,

  // --- CONCEPTOS ---
  'entity framework': IconDatabase,
  jwt: IconLockPassword,

  // --- CATEGORÍAS DE CERTIFICACIONES ---
  ia: IconBrain,
  cloud: IconCloud,
  design: IconPalette,
  development: IconCode,
  'soft skills': IconUsers,
};
