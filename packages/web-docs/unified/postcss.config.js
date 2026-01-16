import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default {
  plugins: [
    tailwindcss({
      config: resolve(__dirname, './tailwind.config.js'),
    }),
    autoprefixer,
  ],
};



