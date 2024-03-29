import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import compress from 'vite-plugin-compress';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [compress(), vue()],
});
