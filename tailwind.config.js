export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a0a0a', // Almost black
          gray: '#1a1a1a', // Dark gray for cards
          accent: '#3b82f6', // Bright blue for highlights
          text: '#ffffff', // White text
          muted: '#a1a1aa', // Gray text
        }
      },
      fontSize: {
        'huge': 'clamp(4rem, 15vw, 12rem)', // Responsive huge font
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}