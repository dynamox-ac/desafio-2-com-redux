import { Provider } from 'react-redux'
import {configureStore} from '../store'
import '../styles/globals.css'


const store = configureStore();
function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp
