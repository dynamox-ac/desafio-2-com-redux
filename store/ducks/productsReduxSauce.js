import { createActions, createReducer } from 'reduxsauce';

/**
 * Action Types e Action Creators
 */
export const { Types, Creators } = createActions({
  getProductsRequest: [],
  deleteProduct: ['id']
});

/**
 * Initial State
 */
const INITIAL_STATE = {
  productsList: []
};

/**
 * Reducer Handlers
 */
const getProductsRequestHandler = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        productsList: [
            {id: 1, name: 'Iogurte', isPerishable: true},
            {id: 2, name: 'Manteiga', isPerishable: true},
            {id: 3, name: 'Pão', isPerishable: true},
            {id: 4, name: 'Leite', isPerishable: true},
            {id: 5, name: 'Molho de Tomate', isPerishable: true},
            {id: 6, name: 'Sal', isPerishable: false},
            {id: 7, name: 'Arroz', isPerishable: false},
            {id: 8, name: 'Feijão', isPerishable: false},
            {id: 9, name: 'Lentilha', isPerishable: false},
            {id: 10, name: 'Soja', isPerishable: false},
        ]
    };
}

const deleteProductHandler = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        productsList: [...state.productsList.filter(product => product.id !== action.id)]
    }
}

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCTS_REQUEST]: getProductsRequestHandler,
    [Types.DELETE_PRODUCT]: deleteProductHandler,
});
