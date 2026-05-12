import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Isha-Para brand palette — logo-aligned (magenta cerise + champagne gold + warm cream + deep plum)
        // Legacy key names retained (teal/navy) to avoid project-wide rename; values now reflect the magenta-plum brand.
        brand: {
          teal: "#C8226E",
          tealDark: "#9E1A56",
          tealDeep: "#6B0F3A",
          navy: "#2A0F22",
          navyDeep: "#170818",
          gold: "#D4A95A",
          goldLight: "#EBC97F",
          mist: "#FAF6EE",
          tint: "#FBEFF4",
          // Semantic aliases for clarity in new code:
          magenta: "#C8226E",
          rose: "#9E1A56",
          burgundy: "#6B0F3A",
          plum: "#2A0F22",
          cream: "#FAF6EE",
          blush: "#FBEFF4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 50px -12px rgba(42, 15, 34, 0.18)",
        premiumHover: "0 30px 60px -12px rgba(200, 34, 110, 0.28)",
      },
    },
  },
  plugins: [],
} satisfies Config;
