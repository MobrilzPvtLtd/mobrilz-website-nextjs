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
      sizes: {
        sm: {
          fontSize: "sm",
          px: 3, // reduced horizontal padding
          py: 2,  // reduced vertical padding
        }
      },
      variants: {
        solid: (props) => ({
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.400" : "brand.600",
          }
        }),
        ghost: (props) => ({
          color: props.colorMode === "dark" ? "white" : "gray.700",
          _hover: {
            bg: props.colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.50"
          }
        })
      }
    },
    Link: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "white" : "gray.700",
        _hover: {
          color: props.colorMode === "dark" ? "brand.200" : "brand.600",
        }
      })
    },
    Menu: {
      baseStyle: (props) => ({
        list: {
          bg: props.colorMode === "dark" ? "gray.800" : "white",
          borderColor: props.colorMode === "dark" ? "gray.700" : "gray.100",
          boxShadow: props.colorMode === "dark" ? "dark-lg" : "lg",
        },
        item: {
          bg: props.colorMode === "dark" ? "gray.800" : "white",
          color: props.colorMode === "dark" ? "white" : "gray.800",
          _hover: {
            bg: props.colorMode === "dark" ? "gray.700" : "gray.50",
          },
          _focus: {
            bg: props.colorMode === "dark" ? "gray.700" : "gray.50",
          }
        }
      })
    },
    MenuItem: {
      baseStyle: (props) => ({
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        _hover: {
          bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.50'
        },
        _focus: {
          bg: props.colorMode === 'dark' ? 'gray.700' : 'gray.50'
        }
      })
    }
  }
});