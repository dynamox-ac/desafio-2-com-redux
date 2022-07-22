import { combineReducers } from 'redux';
import flashMessage from './flashMessage';
import products from './products';

const reducers = combineReducers({ products , flashMessage });

export default reducers;