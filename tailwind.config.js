
module.exports = {
  content: [    
    "./src/**/*.{js,jsx,ts,tsx}",  
    "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'sans-serif']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
