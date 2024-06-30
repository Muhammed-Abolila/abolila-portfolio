/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        width: "1320px",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        mainBgColor: "#fff",
        subBgColor: "#e4e4e4",
        mainColor: "#000",
        subColor: "#09c",
        // .dark {
        //   mainBgColor:#000;
        //   subBgColor:#222;
        //   subColor: #f57201;
        //   mainColor:#fff;
        //   grayColor: #ddd;
        // }
      },
      animation: {
        iconMove: "iconMove 1s ease-in-out",
        afterAnimation: "afterAnimation 4s ease-in-out infinite",
        beforeAnimation: "beforeAnimation 4s ease-in-out infinite",
      },
      keyframes: {
        iconMove: {
          "0%,40%,100%": {
            transform: "translateY(0px)",
          },
          "20%,60%": {
            transform: "translateY(-3px)",
          },
        },
        afterAnimation: {
          "0%,100%": {
            left: "110%",
          },
          "25%,75%": {
            left: "0",
          },
          "50%": {
            left: "-110%",
          },
        },
        beforeAnimation: {
          "0%,100%": {
            left: "-110%",
          },
          "25%,75%": {
            left: "0",
          },
          "50%": {
            left: "110%",
          },
        },
      },
    },
  },
  plugins: [],
};
