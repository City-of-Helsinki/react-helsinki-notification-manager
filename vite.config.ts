import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['lib'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.tsx'),
      name: 'ReactHelsinkiNotificationManager',
      fileName: 'react-helsinki-notification-manager',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'hds-react', 'i18next', 'react-i18next'],
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'hds-react': 'HdsReact',
          i18next: 'i18next',
          'react-i18next': 'ReactI18next',
        },
        // Properly handle external dependencies
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './lib/tests/setup.ts',
  },
} as UserConfig);
