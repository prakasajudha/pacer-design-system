import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  plugins: [
    tailwindcss({
      config: resolve(__dirname, './tailwind.config.js'),
    }),
    autoprefixer,
  ],
};



