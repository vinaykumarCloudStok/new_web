/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ascoyo brand palette
        ink: {
          50:  '#f5f7fa',
          100: '#e4e9f2',
          200: '#c7d0e0',
          300: '#9ba8c4',
          400: '#6b7a99',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#0b1224',
          950: '#070b18',
        },
        brand: {
          50:  '#eef4ff',
          100: '#dbe6ff',
          200: '#bdd0ff',
          300: '#90b1ff',
          400: '#6188ff',
          500: '#3b63f6',
          600: '#2547e0',
          700: '#1d39b8',
          800: '#1c3496',
          900: '#1d3079',
        },
        lilac: {
          50:  '#f5f6fb',
          100: '#ebeef7',
          200: '#dde2f0',
        },
        mint: {
          500: '#10b981',
          600: '#059669',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Plus Jakarta Sans"', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.08)',
        soft: '0 10px 40px -10px rgba(15,23,42,0.15)',
        glow: '0 0 0 4px rgba(59,99,246,0.12)',
      },
      backgroundImage: {
        'grad-hero': 'radial-gradient(60% 50% at 50% 0%, rgba(59,99,246,0.10) 0%, rgba(255,255,255,0) 60%)',
      },
      animation: {
        'fade-up': 'fadeUp .6s ease-out both',
        'fade-in': 'fadeIn .6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
