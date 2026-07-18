/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hangar: '#060b0d',
        panel: '#0b1417',
        bisel: '#122024',
        hielo: '#e9f5ee',
        niebla: '#93a8a0',
        fosforo: '#4bf0a7',
        ambar: '#ffb454',
        alerta: '#ff6b57',
        tinta: '#04110b',
      },
      fontFamily: {
        display: ['Michroma', ...defaultTheme.fontFamily.sans],
        sans: ['"Bai Jamjuree"', ...defaultTheme.fontFamily.sans],
        mono: ['"Martian Mono"', ...defaultTheme.fontFamily.mono],
      },
      letterSpacing: {
        instrument: '0.12em',
        label: '0.16em',
      },
    },
  },
  plugins: [],
}
