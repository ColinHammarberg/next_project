import React from 'react';
import PropTypes from 'prop-types';
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

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.element, PropTypes.instanceOf(Object)]),
  pageProps: PropTypes.instanceOf(Object)
};

export default MyApp;
