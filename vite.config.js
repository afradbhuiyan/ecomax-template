const path = require('path');
const mode = process.env.NODE_ENV;
import { defineConfig } from "vite";

export default defineConfig({
     base: mode === 'production' ? '/ecomax-template/': '/',
     server: {
          open: './index.html',
          port: 3000
     },

     build: {
          rollupOptions: {
               input: {
                    main: path.resolve(__dirname, 'index.html')
               }
          }
     }
});