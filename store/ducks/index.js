import { combineReducers } from 'redux';
import products from './products';
import productsReduxSauce from './productsReduxSauce';

const reducers = combineReducers({ products, productsReduxSauce });

export default reducers;