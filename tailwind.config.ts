import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-maroon": "#6B1F2F",
        "wine-red": "#8B3A42",
        "sand-beige": "#F5F0E8",
        "antique-gold": "#C9A961",
        "burnished-gold": "#D4AF37",
        "soft-ivory": "#FDFBF7",
        "muted-black": "#1A1410",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      letterSpacing: {
        "widest-xl": "0.15em",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201, 169, 97, 0.3)",
        "gold-glow-intense": "0 0 50px rgba(201, 169, 97, 0.5)",
        "ambient": "0 20px 60px rgba(26, 20, 16, 0.15)",
        "lift": "0 30px 80px rgba(26, 20, 16, 0.25)",
        "inner-gold": "inset 0 0 60px rgba(201, 169, 97, 0.05)",
      },
      transitionTimingFunction: {
        "luxe": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
      transitionDuration: {
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "drift": "drift 20s ease-in-out infinite",
        "gold-pulse": "gold-pulse 4s ease-in-out infinite",
        "breathe": "breathe 8s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in": "scale-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
