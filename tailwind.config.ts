
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      },
      colors: {
        background: '#f1f5f9',
        foreground: '#0f172a',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        primary: {
          DEFAULT: '#f97316',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#475569',
        },
        muted: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b',
        },
        accent: {
          DEFAULT: '#fef3c7',
          foreground: '#92400e',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        success: '#22c55e',
        warning: '#f59e0b',
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#f97316',
        chart: {
          '1': '#f97316',
          '2': '#3b82f6',
          '3': '#22c55e',
          '4': '#eab308',
          '5': '#8b5cf6',
        },
        sidebar: {
          DEFAULT: '#f8fafc',
          foreground: '#64748b',
          primary: '#f97316',
          'primary-foreground': '#ffffff',
          accent: '#f1f5f9',
          'accent-foreground': '#0f172a',
          border: '#e2e8f0',
          ring: '#f97316',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
