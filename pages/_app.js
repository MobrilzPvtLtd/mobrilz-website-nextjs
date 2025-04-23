import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;