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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '28xl': '1.75rem',
    },
      colors: {
        'gris-oscuro':'#474747',
        'gris-claro':'#CBCBCB',
        'gris-bienclaro':'#878787',
        'gris-claro2':'#E5E5E5',
        'gris-medio':'#8C8C8C',
        'gris-claro3':'#F2F2F2',
        'azul-claro':'#319FD8',
        'gris-home':'#9A9A9A',
        'gris-card':'#EBEBEB',
        'azul-azulito':'#319FD833',
        'azul-oscuro':'#4CA8EB',
        'blanco-oscuro':'#F6F6F6'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
export default config
