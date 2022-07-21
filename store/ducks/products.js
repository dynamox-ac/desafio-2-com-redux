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

  // setProductsRequest: ['data'],
	// setProductsSuccess: ['data'],
	// setProductsFailure: ['data'],
  
  addProductRequest: ['data'],
  addProductSuccess: ['data'],
	// addProductFailure: ['data'],

  getProductDetailsRequest: ['id'],
	getProductDetailsSuccess: ['data'],
	// getProductDetailsFailure: ['id'],
});

/**
 * Initial State
 */
const INITIAL_STATE = {
  productsList: [],
  productDetails: {id: '', name: '', manufacturingDate: '', isPerishable: '', expirationDate: '', price: ''},
  loading: false
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
        productsList: []
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
// const setProductsRequestHandler = (state = INITIAL_STATE, action) => {
//     return {
//         ...state,
//         productsList: action.data
//     }
// }

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
	console.log("delete product success action", action)
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
      loading: true
    }
}

const getProductDetailsSuccessHandler = (state = INITIAL_STATE, action) => {
  console.log("get product details success action", action)
  return {
      ...state,
      productDetails: action.data,
      loading: false
  }
}



/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCTS_REQUEST]: getProductsRequestHandler,
		[Types.GET_PRODUCTS_SUCCESS]: getProductsSuccessHandler,

    // [Types.SET_PRODUCTS_REQUEST]: setProductsRequestHandler,
		// [Types.SET_PRODUCTS_SUCCESS]: setProductsSuccessHandler,
		
    [Types.DELETE_PRODUCT_REQUEST]: deleteProductRequestHandler,
		[Types.DELETE_PRODUCT_SUCCESS]: deleteProductSuccessHandler,

    [Types.ADD_PRODUCT_REQUEST]: addProductRequestHandler,
		[Types.ADD_PRODUCT_SUCCESS]: addProductSuccessHandler,

    [Types.GET_PRODUCT_DETAILS_REQUEST]: getProductDetailsRequestHandler,
		[Types.GET_PRODUCT_DETAILS_SUCCESS]: getProductDetailsSuccessHandler,
});
