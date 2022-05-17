module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        shake:'shake 0.8s ease-in-out'
      },
      keyframes:{
        shake:{
          '10% 90%':{transform:'translate3d(-1px,0,0)'},
          '20% 80%':{transform:'translate3d(+2px,0,0)'},
          '30% 70%':{transform:'translate3d(-4px,0,0)'},
          '40% 60%':{transform:'translate3d(+4px,0,0)'},
          '50%':{transform:'translate3d(-4px,0,0)'}
        }
      }
    },
  },
  plugins: [],
}
