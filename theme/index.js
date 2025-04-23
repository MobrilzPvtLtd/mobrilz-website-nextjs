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
    header: {
      light: {
        top: "blue.600",
        bottom: "white",
        text: "gray.700"
      },
      dark: {
        top: "blue.800",
        bottom: "gray.800",
        text: "white"
      }
    }
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
    Header: {
      baseStyle: props => ({
        bg: props.colorMode === "dark" ? "header.dark.bottom" : "header.light.bottom",
        color: props.colorMode === "dark" ? "header.dark.text" : "header.light.text"
      })
    }
  },
};