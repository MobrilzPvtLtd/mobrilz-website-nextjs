import '/styles/globals.css';
import { useState, useEffect } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '../theme';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  // Add client-side only rendering state
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Layout>
          {isClient && <Component {...pageProps} />}
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;