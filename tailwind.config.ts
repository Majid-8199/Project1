import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gn: '#059669',
        gre: '#059669',
        rd: '#EB1D26',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards', // <-- THIS is what's missing
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to bottom, #EB1D26 0%, #000000 50%, #02A653 100%)',
      },
      screens: {
      'xs': '375px', // custom screen
      },
    },
  },
  plugins: [],
};

export default config;
