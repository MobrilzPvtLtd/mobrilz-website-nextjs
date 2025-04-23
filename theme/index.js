import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#E6F6FF',
      100: '#BAE3FF',
      200: '#7CC4FA',
      300: '#47A3F3',
      400: '#2186EB',
      500: '#0967D2',
      600: '#0552B5',
      700: '#03449E',
      800: '#01337D',
      900: '#002159',
    },
    header: {
      light: {
        top: "brand.600",
        bottom: "white",
        text: "gray.700"
      },
      dark: {
        top: "gray.800",
        bottom: "gray.900",
        text: "white"
      }
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "white",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "lg",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.500" : "brand.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.400" : "brand.600",
          }
        }),
      }
    },
    Link: {
      baseStyle: {
        textDecoration: "none",
        _hover: {
          textDecoration: "none",
        }
      }
    }
  }
});