export const colors = {
  primary: {
    red: "#D90429",
    black: "#181818",
    darkGray: "#232323",
    gray: "#585A5E",
    lightGray: "#C7C7C7",
    white: "#FFFFFF",
    offWhite: "#FAFAFA"
  }
} as const;

export const fonts = {
  sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
  display: ["Playfair Display", "serif"]
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
} as const; 