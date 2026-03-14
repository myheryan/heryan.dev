import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Daftarkan nama custom class dan arahkan ke variabel CSS
        parisienne: ['var(--font-parisienne)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [],
};
export default config;