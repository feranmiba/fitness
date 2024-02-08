import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'yoga': "linear-gradient(to bottom, rgba(46, 48, 48, 0.539), rgba(24, 22, 22, 0.959)), url('../app/components/Image/yogaImage.jpg')",
        'nutrition': "linear-gradient(to bottom, rgba(46, 48, 48, 0.539), rgba(24, 22, 22, 0.959)), url('../app/components/Image/nutrition.jpg')",
        'fittness': "linear-gradient(to bottom, rgba(46, 48, 48, 0.539), rgba(24, 22, 22, 0.959)), url('../app/components/Image/fit.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
