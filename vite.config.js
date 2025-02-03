import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // This allows to access/import any folder from src with @/
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});