import React from 'react';
import { Router } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
    </ProductsContextProvider>
  );
}

export default MyApp;
