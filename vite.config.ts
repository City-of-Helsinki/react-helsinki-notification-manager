import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ['lib'],
      insertTypesEntry: true
    })
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
      external: [
        'react', 'react-dom', 'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
      },
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './lib/tests/setup.ts',
  }
} as UserConfig)
