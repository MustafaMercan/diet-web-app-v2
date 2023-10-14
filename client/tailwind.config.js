/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryGreen:"#C6EED5",
        primaryBackground:"#EDE8E5",
        //secondaryGreen:"#88C250",
        footerGreen:"#B3E6BB",
        sectionColor:"#FAF1E4",
        cardColor:"#CEDEBD",
        secondaryGreen:"#99D98C",
        blueBackground:"#43697b",
        formBackground:"#E4DEFE",
        inputBackground:"#E5E5E5",
        servicesBackground:"#729cc4",
        servicesText:"#0D2449",
        servicesCards:"#D9D3EB"
      },
      spacing:{
        '128':'32rem',
        '112':'28rem'
      }
    },
  },
  plugins: [],
}

        //servicesCards:"#D9D3EB"
