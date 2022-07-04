import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getProductsRequest: [],
});

const INITIAL_STATE = {
  productsList: []
};

const getProductsRequest = (state = INITIAL_STATE) => {
  console.log('getProductsRequest executed')
  return {
    ...state,
    productsList: [{id: 1, name: 'Banana'},{id:2, name: 'Leite'}]
  }
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCTS_REQUEST]: getProductsRequest,
});
