/**
 * @fileoverview Vite configuration file for a React project with Tailwind CSS support.
 * @author kenny
 * @description Sets up Vite plugins for React and Tailwind CSS integration.
 */
/*
* 
*
*/

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'



// This is a Vite configuration file that sets up a React project with Tailwind CSS support.
// It imports necessary plugins and exports a configuration object.
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})