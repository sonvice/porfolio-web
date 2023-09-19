/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    spacing: {
      'xs': 'clamp(0.75rem, calc(0.63rem + 0.59vw), 0.94rem)',
      'sm': 'clamp(1.00rem, calc(0.84rem + 0.78vw), 1.25rem)',
      'md': 'clamp(1.50rem, calc(1.27rem + 1.17vw), 1.88rem)',
     'lg': 'clamp(2.00rem, calc(1.69rem + 1.56vw), 2.50rem)',
      'xl': 'clamp(3.00rem, calc(2.53rem + 2.34vw), 3.75rem)',
    '2xl':  'clamp(4.00rem, calc(3.38rem + 3.13vw), 5.00rem)',
    '3xl':  'clamp(6.00rem, calc(5.06rem + 4.69vw), 7.50rem)',
    },
    fontSize:{
      'size-0':'clamp(0.83rem, calc(0.77rem + 0.33vw), 0.94rem)',
      'base':'clamp(1.00rem, calc(0.84rem + 0.78vw), 1.25rem)',
      'size-1':'clamp(1.20rem, calc(0.91rem + 1.46vw), 1.67rem)',
      'size-2':'clamp(1.44rem, calc(0.95rem + 2.44vw), 2.22rem)',
      'size-3':'clamp(1.73rem, calc(0.96rem + 3.85vw), 2.96rem)',
      'size-4':'clamp(2.07rem, calc(0.90rem + 5.85vw), 3.95rem)',
      'size-5':'clamp(2.49rem, calc(0.76rem + 8.66vw), 5.26rem)',
    },
    colors:{
      'transparent': 'transparent',
      'slate-50':'#f8fafc',
      'slate-300':'#cbd5e1',
      'slate-400':'#94a3b8',
      'slate-600':'#475569',
      'slate-950':'#020617',
      'red-50':'#fef2f2',
      'red-300':'#fca5a5',
      'red-600':'#dc2626',
      'red-900':'#7f1d1d'
       
      
   
    },
    fontFamily: {
      sans: ['"Inter"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

