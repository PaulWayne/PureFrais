import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#0A2540',
        'brand-green': '#C4F271',
        'brand-teal': '#86D5CB',
        'brand-red': '#D94A56',
      },
      fontFamily: {
        sans: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
