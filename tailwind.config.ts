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
        display: ['Barlow Semi Condensed', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#f6f1e8',
        night: '#11151b',
        graphite: '#18222b',
        signal: '#bd1b21',
        volta: '#f2a51a',
        iris: '#3f5366',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(0, 0, 0, 0.3)',
        glow: '0 0 80px rgba(189, 27, 33, 0.18)',
      },
    },
  },
}
