module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ef4444',
      },
      fontFamily: {
        mono: ['VT323', 'Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}

