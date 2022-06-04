module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url("/src/assets/images/bg.png")',
        'appointment-pattern': 'url("/src/assets/images/appointment.png")',
        'footer-pattern': 'url("/src/assets/images/footer.png")'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0fcfec',

          secondary: '#19d3ae',

          accent: '#3a4256',

          gradient: 'rgb(25,211,174)',

          'base-100': '#FFFFFF',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
