import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // Dark mode is based on a class
  mode: "jit", // Enable Just-in-Time mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        neutral: {
          "100": "var(--neutral-100)",
          "200": "var(--neutral-200)",
          "300": "var(--neutral-300)",
          "400": "var(--neutral-400)",
          "500": "var(--neutral-500)",
          "600": "var(--neutral-600)",
          "700": "var(--neutral-700)",
          "800": "var(--neutral-800)",
          "900": "var(--neutral-900)",
          DEFAULT: "var(--neutral-500)",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      spacing: {
        "128": "32rem",
        containerPX: "1.5rem",
      },
      boxShadow: {
        custom: "0px 4px 15px rgba(0, 0, 0, 0.1)", // Custom shadow
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        lato: ["Lato"],
      },
      fontSize: {
        // Display styles
        d1: "48px", // Display 1
        d2: "40px", // Display 2 - operation mode
        d3: "36px", // Display 3

        // Desktop-specific display styles
        "d-d1": "64px", // Desktop Display 1
        "d-d2": "56px", // Desktop Display 2
        "d-d3": "48px", // Desktop Display 3

        // Heading styles
        h1: "40px", // Heading 1
        h2: "36px", // Heading 2 - most of headings
        h3: "24px", // Heading 3
        h4: "20px", // Heading 4

        // Desktop-specific heading styles
        "d-h1": "48px", // Desktop Heading 1
        "d-h2": "42px", // Desktop Heading 2
        "d-h3": "36px", // Desktop Heading 3
        "d-h4": "40px", // Desktop Heading 4

        // Body text
        xs: "10px", // Extra small text
        sm: "12px", // Small text
        base: "14px", // Default text size labels, navigations
        lg: "16px", // Large text
        xl: "18px", // Extra large text - buttons
        "2xl": "22px", // 2 times extra large text
        "3xl": "30px", // 3 times extra large text
        "4xl": "36px", // 4 times extra large text
        "5xl": "48px", // 5 times extra large text
        "6xl": "64px", // 6 times extra large text

        // Desktop-specific body text
        "d-xs": "12px", // Desktop Extra small text
        "d-sm": "14px", // Desktop Small text
        "d-base": "16px", // Desktop Default text
        "d-lg": "18px", // Desktop Large text
        "d-xl": "20px", // Desktop Extra large text
        "d-2xl": "24px", // Desktop 2 times extra large text
        "d-3xl": "36px", // Desktop 3 times extra large text
        "d-4xl": "40px", // Desktop 4 times extra large text
        "d-5xl": "64px", // Desktop 5 times extra large text
        "d-6xl": "80px", // Desktop 6 times extra large text
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out",
        slideOut: "slideOut 0.5s ease-out",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;
