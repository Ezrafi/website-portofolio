import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    root: 'client',
    publicDir: '../public',
    plugins: [react(), tailwindcss()],
    build: {
        outDir: '../dist',
        emptyOutDir: true,
    },
    server: {
        proxy: {
            '/api': 'http://localhost:3000',
            '/img': 'http://localhost:3000',
        },
    },
});
