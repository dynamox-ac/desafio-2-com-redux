import { createActions, createReducer } from 'reduxsauce';

/**
 * Action Types e Action Creators
 */
export const { Types, Creators } = createActions({

/**
 * Template
 * 
 * {actionName}Request
 * {actionName}Success
 * {actionName}Failure
 */


	deleteProductRequest: ['id'],
  deleteProductSuccess: ['id'],
	// deleteProductFailure: ['id'],

	getProductsRequest: [],
	getProductsSuccess: ['data'],
	// getProductsFailure: [],

  setProductsRequest: ['data'],
	// setProductsSuccess: ['data'],
	// setProductsFailure: ['data'],
  
  addProductRequest: ['data'],
  addProductSuccess: ['data'],
	// addProductFailure: ['data'],

  getProductDetailsRequest: ['id'],
	// getProductDetailsSuccess: ['id'],
	// getProductDetailsFailure: ['id'],
});

/**
 * Initial State
 */
const INITIAL_STATE = {
  productsList: [],
  productDetails: {id: '', name: '', manufacturingDate: '', isPerishable: '', expirationDate: '', price: ''}
};

/**
 * Reducer Handlers
 */


/**
 * GET
 */
const getProductsRequestHandler = (state = INITIAL_STATE, action) => {
    console.log('action: getProductsRequest')
    return {
        ...state,
        productsList: [
            // {id: 1, name: 'Iogurte', manufacturingDate: '22-09-2022', isPerishable: true, expirationDate: '25-12-2022', price: 3.0},
            // {id: 2, name: 'Manteiga', manufacturingDate: '12-04-2022', isPerishable: true, expirationDate: '21-05-2022', price: 9.0},
            // {id: 3, name: 'Pão', manufacturingDate: '08-01-2022', isPerishable: true, expirationDate: '01-04-2022', price: 10.5},
            // {id: 4, name: 'Leite', manufacturingDate: '16-03-2021', isPerishable: true, expirationDate: '05-06-2021', price: 7.2},
            // {id: 5, name: 'Molho de Tomate', manufacturingDate: '14-07-2020', isPerishable: true, expirationDate: '20-11-2020', price: 2.8},
            // {id: 6, name: 'Sal', manufacturingDate: '18-06-2019', isPerishable: false, expirationDate: 'NA', price: 1.3},
            // {id: 7, name: 'Arroz', manufacturingDate: '02-08-2020', isPerishable: false, expirationDate: 'NA', price: 6.7},
            // {id: 8, name: 'Feijão', manufacturingDate: '30-03-2021', isPerishable: false, expirationDate: 'NA', price: 5.9},
            // {id: 9, name: 'Lentilha', manufacturingDate: '09-02-2019', isPerishable: false, expirationDate: 'NA', price: 8.0},
            // {id: 10, name: 'Soja', manufacturingDate: '31-12-2020', isPerishable: false, expirationDate: 'NA', price: 4.3},
        ]
    };
}

const getProductsSuccessHandler = (state = INITIAL_STATE, action) => {
  console.log("get products success action", action)
  return {
      ...state,
      productsList: action.data
  };
}


/**
 * SET
 */
const setProductsRequestHandler = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        productsList: action.data
    }
}

// const setProductsSuccessHandler = (state = INITIAL_STATE, action) => {
// 	return {
// 			...state,
// 			productsList: action.data
// 	}
// }


/**
 * DELETE
 */
const deleteProductRequestHandler = (state = INITIAL_STATE, action) => {
    return {
        ...state,
    }
}

const deleteProductSuccessHandler = (state = INITIAL_STATE, action) => {
	console.log(" delete product success action", action)
	return {
			...state,
			productsList: [...state.productsList.filter(product => product.id !== action.id)],
	}
}


/**
 * ADD
 */
const addProductRequestHandler = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        productsList: [...state.productsList],
    }
}

const addProductSuccessHandler = (state = INITIAL_STATE, action) => {
  console.log("add product success action", action)
	return {
			...state,
			productsList: [...state.productsList, action.data],
	}
}


/**
 * GET DETAILS
 */
const getProductDetailsRequestHandler = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        productDetails: {...state.productsList.find(product => product.id === action.id)},
    }
}

// const getProductDetailsSuccessHandler = (state = INITIAL_STATE, action) => {
// 	return {
// 			...state,
// 			productDetails: {...state.productsList.find(product => product.id === action.id)},
// 	}
// }



/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCTS_REQUEST]: getProductsRequestHandler,
		[Types.GET_PRODUCTS_SUCCESS]: getProductsSuccessHandler,

    [Types.SET_PRODUCTS_REQUEST]: setProductsRequestHandler,
		// [Types.SET_PRODUCTS_SUCCESS]: setProductsSuccessHandler,
		
    [Types.DELETE_PRODUCT_REQUEST]: deleteProductRequestHandler,
		[Types.DELETE_PRODUCT_SUCCESS]: deleteProductSuccessHandler,

    [Types.ADD_PRODUCT_REQUEST]: addProductRequestHandler,
		[Types.ADD_PRODUCT_SUCCESS]: addProductSuccessHandler,

    [Types.GET_PRODUCT_DETAILS_REQUEST]: getProductDetailsRequestHandler,
		// [Types.GET_PRODUCT_DETAILS_SUCCESS]: getProductDetailsSuccessHandler,
});
