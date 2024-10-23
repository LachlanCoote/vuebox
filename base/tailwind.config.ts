import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#ffdfb2',
          100: '#ffdfb2',
          200: '#ffcb7f',
          300: '#ffb64c',
          400: '#ffa525',
          500: '#ff9600',
          600: '#FB8C00',
          700: '#f57a01',
          800: '#ef6a01',
          900: '#e64f01',
          950: '#e64f01',
        },
        cool: {
          50: '#cdd5d9',
          100: '#cdd5d9',
          200: '#acb8c0',
          300: '#8b9da8',
          400: '#728895',
          500: '#5a7483',
          600: '#4e6573',
          700: '#3f525d',
          800: '#313F48',
          900: '#202b31',
          950: '#202b31',
        },
      },
    },
  },
}
