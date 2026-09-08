/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f8',
          500: '#007FFB',
          600: '#0070e0',
          700: '#0059b3',
          800: '#00478f',
          900: '#073c75',
          950: '#05264c',
        },
        vyxel: {
          blue: '#007FFB',
          cyan: '#01E7DB',
          navy: '#09152b',
          deep: '#060d1a',
        },
        slateDark: {
          800: '#131b2e',
          850: '#0f172a',
          900: '#0b1120',
          950: '#070b14',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E',
          deep: '#075E54',
          light: '#E7FCEE',
          border: '#A7F3D0',
          text: '#065F46',
        },
        instagram: {
          DEFAULT: '#E1306C',
          light: '#FDF2F8',
          text: '#9D174D',
        },
        messenger: {
          DEFAULT: '#0084FF',
          light: '#EFF6FF',
          text: '#1E40AF',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -1px rgba(15, 23, 42, 0.05), 0 1px 4px -1px rgba(15, 23, 42, 0.03)',
        'soft-md': '0 12px 30px -4px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)',
        'soft-lg': '0 20px 45px -5px rgba(15, 23, 42, 0.08), 0 8px 20px -4px rgba(15, 23, 42, 0.04)',
        'glow-cyan': '0 0 35px -5px rgba(1, 231, 219, 0.4)',
        'glow-blue': '0 0 35px -5px rgba(0, 127, 251, 0.35)',
        'glow-green': '0 0 30px -5px rgba(37, 211, 102, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
