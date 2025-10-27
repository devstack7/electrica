/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DC2626', // Bold red - matches logo
          dark: '#B91C1C',
          light: '#EF4444',
        },
        secondary: {
          DEFAULT: '#000000', // Pure black - matches logo
          light: '#1F2937',
        },
        accent: {
          DEFAULT: '#FFFFFF', // Pure white - matches logo
          light: '#F3F4F6',
          dark: '#E5E7EB',
        },
        neutral: {
          DEFAULT: '#6B7280', // Gray for text
          light: '#9CA3AF',
          dark: '#374151',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
