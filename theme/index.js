export const theme = {
  colors: {
    primary: "#3182ce",
    secondary: "#2c5282",
    accent: "#f6e05e",
    background: {
      light: "#ffffff",
      dark: "#1a202c",
    },
    text: {
      light: "#2d3748",
      dark: "#edf2f7",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "background.dark" : "background.light",
        color: props.colorMode === "dark" ? "text.dark" : "text.light",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
      },
    },
  },
};