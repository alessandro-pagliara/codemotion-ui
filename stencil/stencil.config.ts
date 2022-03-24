import purgecss from '@fullhuman/postcss-purgecss';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
import tailwind, { tailwindHMR } from 'stencil-tailwind-plugin';
import tailwindcss from 'tailwindcss';
import { defaultExtractor } from 'tailwindcss/lib/lib/defaultExtractor';
import tailwindConf from './tailwind.config.js';

export const config: Config = {
  namespace: 'codemotion-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      // autoDefineCustomElements: true,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    tailwind({
      tailwindConf,
      tailwindCssPath: './src/styles/tailwind.scss',
      postcss: {
        plugins: [
          tailwindcss(),
          autoprefixer(),
          purgecss({
            content: ['./**/*.tsx'],
            safelist: [':root', ':host', ':shadow', '/deep/', '::part', '::theme'],
            defaultExtractor,
          }),
        ],
      },
    }),
    tailwindHMR(),
  ],
};
