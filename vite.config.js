import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
  plugins: [
    laravel(['resources/js/app.tsx', 'resources/css/app.css']),
    react(),
    flowbiteReact()
  ]
});