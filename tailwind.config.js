/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Amiri', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        dark: '#020617', // Background utama yang mewah
        emerald: '#10b981', // Warna aksen islami
        gold: '#fbbf24', // Warna untuk nomor/detail penting
      }
    },
  },
  plugins: [],
}