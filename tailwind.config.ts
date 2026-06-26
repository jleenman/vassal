import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './content/**/*.{md,json}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#f7f8f4',
        night: '#080b10',
        graphite: '#121722',
        signal: '#9dffdf',
        volta: '#ffb86b',
        iris: '#8fa7ff',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0, 0, 0, 0.38)',
        glow: '0 0 80px rgba(157, 255, 223, 0.2)',
      },
    },
  },
}
