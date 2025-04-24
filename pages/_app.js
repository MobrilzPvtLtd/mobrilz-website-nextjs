import '/styles/globals.css';
import { useState, useEffect, useCallback } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { theme } from '../theme';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Prevent multiple route change events
  const handleStart = useCallback((url) => {
    if (url !== router.asPath) {
      setIsLoading(true);
    }
  }, [router.asPath]);

  const handleComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Fix for hydration errors
    setIsClient(true);
    
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [handleStart, handleComplete, router.events]);

  if (!isClient) {
    return null; // Return null on server-side
  }

  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;