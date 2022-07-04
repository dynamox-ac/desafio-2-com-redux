import { createStore } from 'redux';
import reducers from './ducks';

export const configureStore = () => {
  const store = createStore(reducers);
  return store;
};
