import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'standalone',
  globalStyle: 'src/global/global.css',
  plugins: [
    'rollup-plugin-node-polyfills',
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
