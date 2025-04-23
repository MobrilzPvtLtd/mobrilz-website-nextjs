import '/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Analytics and performance monitoring
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Log page views here if needed
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export function reportWebVitals(metric) {
  // Analytics implementation
  console.log(metric);
}

export default MyApp;