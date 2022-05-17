module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightcyan: "#cee3e9",
        neongreen: "#52ffa8",
        grayishblue: "#4e5d73",
        darkgrayishblue: "#323a49",
        darkblue: "#1f2632",

      },
      letterSpacing: {
        widest: "0.3rem"
      },
      fontFamily: {
        sans: ['Manrope, sans-serif'],
      },
      fontSize: {
        sm: ['12px'],
        base: ['28px'],
      },
      borderWidth: {
        "14": "14px"
      },
      boxShadow: {
        "2xl": "0 0px 25px rgba(82, 255, 168, 1)"
      },
    },
  },
  plugins: [],
}
