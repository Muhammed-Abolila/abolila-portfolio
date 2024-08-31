/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: "95%",
          sm: "90%",
          "2xl": "1320px",
        },
        padding:{
          DEFAULT:"20px",
          md:"0px"
        }
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
        linksAnimation: "linksAnimation .3s  ease-in-out alternate",
        title: "titleAnimation 1s ease-in-out infinite",
      },
      keyframes: {
        iconMove: {
          "0%,40%,100%": { transform: "translateY(0px)" },
          "20%,60%": { transform: "translateY(-3px)" },
        },
        afterAnimation: {
          "0%,100%": { left: "110%" },
          "25%,75%": { left: "0" },
          "50%": { left: "-110%" },
        },
        beforeAnimation: {
          "0%,100%": { left: "-110%" },
          "25%,75%": { left: "0" },
          "50%": { left: "110%" },
        },
        linksAnimation: {
          from: {
            transform: "translateY(-7px)",
          },
          to: {
            transform: "translateY(-2px)",
          },
        },
        titleAnimation: {
          "0%,2%,4%,6%,8%,10%,50%,52%,54%,56%,100%": { content: "|" },
          "1%,3%,5%,7%,9%,51%,53%,55%": { content: "" },
          "11%,49%": { content: "M|" },
          "12%,48%": { content: "Mu|" },
          "13%,47%": { content: "Muh|" },
          "14%,46%": { content: "Muha|" },
          "15%,45%": { content: "Muham|" },
          "16%,44%": { content: "Muhamm|" },
          "17%,43%": { content: "Muhamme|" },
          "18%,42%": { content: "Muhammed|" },
          "19%,41%": { content: "Muhammed |" },
          "20%,40%": { content: "Muhammed A|" },
          "21%,39%": { content: "Muhammed Ab|" },
          "22%,38%": { content: "Muhammed Abo|" },
          "23%,37%": { content: "Muhammed Abo |" },
          "24%,36%": { content: "Muhammed Abo L|" },
          "25%,35%": { content: "Muhammed Abo Li|" },
          "26%,34%": { content: "Muhammed Abo Lil|" },
          "27%,33%,29%,31%": { content: "Muhammed Abo Lila|" },
          "28%,32%": { content: "Muhammed Abo Lila " },
          "30%": { content: "Muhammed Abo Lila " },
          "57%,99%": { content: "F|" },
          "58%,98%": { content: "Fr|" },
          "59%,97%": { content: "Fro|" },
          "60%,96%": { content: "Fron|" },
          "61%,95%": { content: "Front|" },
          "62%,94%": { content: "Front |" },
          "63%,93%": { content: "Front E|" },
          "64%,92%": { content: "Front En|" },
          "65%,91%": { content: "Front End|" },
          "66%,90%": { content: "Front End |" },
          "67%,89%": { content: "Front End D|" },
          "68%,88%": { content: "Front End De|" },
          "69%,87%": { content: "Front End Dev|" },
          "70%,86%": { content: "Front End Deve|" },
          "71%,85%": { content: "Front End Devel|" },
          "72%,84%": { content: "Front End Develo|" },
          "73%,83%": { content: "Front End Develop|" },
          "74%,82%": { content: "Front End Develope|" },
          "75%,81%,77%,79%": { content: "Front End Developer|" },
          "76%,80%": { content: "Front End Developer " },
          "78%": { content: "Front End Developer " },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animate-fourth": {
          animationIterationCount: "4",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
