import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import '../styles/globals.css';

import { ThemeProvider } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { FlashMessage } from '../components/FlashMessage';
import theme from '../theme/theme';

const store = configureStore();

const MyApp = ({ Component, pageProps, pageContext }) => {

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <FlashMessage />
          <Component {...pageProps} />
        </ThemeProvider>  
      </Provider>
    </>
  )
}

export default MyApp;