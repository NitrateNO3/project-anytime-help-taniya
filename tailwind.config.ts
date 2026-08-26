import type { Config } from 'tailwindcss';

/**
 * Design tokens taken straight from the Anytime Help app icon:
 *  - brand.600 (#1D4ED8) — the deep blue of the icon tile
 *  - brand.500 (#3B76F0) — the lighter blue at the top of its gradient
 *  - accent.400 (#22D3D8) — the teal outline around the heart
 *  - peach.300 (#FFC4A6) — the cupped hands
 *  - ink.950   (#0B1120) — the dark ground used by the hero and footer
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF5FF',
          100: '#DBE8FE',
          200: '#BFD5FE',
          300: '#93B8FD',
          400: '#6094FA',
          500: '#3B76F0',
          600: '#1D4ED8',
          700: '#1D40B4',
          800: '#1E3891',
          900: '#1D3273',
          950: '#152049',
        },
        accent: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E4EC',
          400: '#22D3D8',
          500: '#0FB6BF',
          600: '#0A919B',
          700: '#0E747C',
          800: '#155E65',
          900: '#164E55',
        },
        peach: {
          100: '#FFF1E8',
          200: '#FFDFCC',
          300: '#FFC4A6',
          400: '#FFA783',
        },
        ink: {
          50: '#F6F7FA',
          100: '#ECEEF3',
          200: '#D8DCE6',
          300: '#B2B9C9',
          400: '#8791A6',
          500: '#616C85',
          600: '#475169',
          700: '#333C51',
          800: '#1F2739',
          900: '#141B2B',
          950: '#0B1120',
        },
        success: '#16A34A',
        warning: '#D97706',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid display sizes so mobile gets its own scale, not a shrunk desktop one.
        'display-lg': ['clamp(2.25rem, 1.5rem + 3.1vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(1.875rem, 1.3rem + 2.4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(1.5rem, 1.15rem + 1.5vw, 2.125rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        card: '16px',
        'card-lg': '20px',
        squircle: '28%',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(11 17 32 / 0.05)',
        sm: '0 1px 3px 0 rgb(11 17 32 / 0.06), 0 1px 2px -1px rgb(11 17 32 / 0.06)',
        md: '0 4px 12px -2px rgb(11 17 32 / 0.08), 0 2px 4px -2px rgb(11 17 32 / 0.05)',
        lg: '0 12px 32px -8px rgb(11 17 32 / 0.14), 0 4px 8px -4px rgb(11 17 32 / 0.06)',
        xl: '0 24px 56px -16px rgb(11 17 32 / 0.2), 0 8px 16px -8px rgb(11 17 32 / 0.1)',
        glow: '0 24px 64px -24px rgb(29 78 216 / 0.55)',
      },
      maxWidth: {
        container: '1200px',
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-ring': {
          '0%': { opacity: '0.55', transform: 'scale(0.85)' },
          '70%': { opacity: '0', transform: 'scale(1.35)' },
          '100%': { opacity: '0', transform: 'scale(1.35)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(0.24, 0, 0.38, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
