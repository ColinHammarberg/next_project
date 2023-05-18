import React from 'react';
import { Router } from 'next/router';

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

  return <Component {...pageProps} />;
}

export default MyApp;
