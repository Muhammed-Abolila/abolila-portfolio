/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
        //   bodyBgColor: #ddd;
        // }
      },
      animation: {
        iconMove: 'iconMove 1s ease-in-out',
      },
      keyframes: {
        iconMove: {
          "0%": {
            transform: "translateY(0px)",
          },
          "20%": {
            transform: "translateY(-3px)",
          },
          "40%": {
            transform: "translateY(0px)",
          },
          "60%": {
            transform: "translateY(-3px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
