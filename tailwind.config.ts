import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    screens: {
      PC: "1920px",
      Tablet: "1280px",
      TabletSm: "768px",
      Smartphones: "480px",
      SmartphonesSm: "280px",
    },
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        Pacifico: ["Pacifico", "cursive"],
        Satisfy: ["Satisfy", "cursive"],
        Caveat: ["Caveat", "cursive"],
        Rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
export default config
