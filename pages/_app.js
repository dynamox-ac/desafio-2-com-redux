import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux'
import {configureStore} from '../store'
import '../styles/globals.css'


const store = configureStore();
function MyApp({ Component, pageProps, pageContext }) {
  return (
    <>
      <CssBaseline />
      <Provider store={store}><Component pageContext={pageContext} {...pageProps} /></Provider>
    </>
  )
}

export default MyApp
