import React from 'react';
import { Router } from 'next/router';
import ProductsContextProvider from '@/utils/ProductsContext';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      console.log('Navigated to:', url);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <ProductsContextProvider>
      <Component {...pageProps} />
    </ProductsContextProvider>
  );
}

export default MyApp;
