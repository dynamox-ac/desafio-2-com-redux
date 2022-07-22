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
	deleteProductFailure: ['id'],

	getProductsRequest: [],
	getProductsSuccess: ['data'],
	getProductsFailure: [],
  
  addProductRequest: ['data'],
  addProductSuccess: ['data'],
	addProductFailure: ['data'],

  getProductDetailsRequest: ['id'],
	getProductDetailsSuccess: ['data'],
	getProductDetailsFailure: ['id'],

  updateProductDetailsRequest: ['data'],
	updateProductDetailsSuccess: ['data'],
	updateProductDetailsFailure: ['id'],
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

const getProductsFailureHandler = (state = INITIAL_STATE, action) => {
	console.log("get product failure action", action)
	return {
    ...state,
    loading: false
  }
}

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

const deleteProductFailureHandler = (state = INITIAL_STATE, action) => {
	console.log("delete product failure action", action)
	return {
    ...state,
    loading: false
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

const addProductFailureHandler = (state = INITIAL_STATE, action) => {
	console.log("add product failure action", action)
	return {
    ...state,
    loading: false
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

const getProductDetailsFailureHandler = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false
  }
}

/**
 * UPDATE PRODUCT DETAILS
 */
const updateProductDetailsRequestHandler = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: true
  }
}

const updateProductDetailsSuccessHandler = (state = INITIAL_STATE, action) => {
  console.log("update product details success action", action)

  return {
    ...state,
    productDetails: action.data,
    loading: false
  }
}

const updateProductDetailsFailureHandler = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    loading: false
  }
}


/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
    [Types.GET_PRODUCTS_REQUEST]: getProductsRequestHandler,
		[Types.GET_PRODUCTS_SUCCESS]: getProductsSuccessHandler,
    [Types.GET_PRODUCTS_FAILURE]: getProductsFailureHandler,
		
    [Types.DELETE_PRODUCT_REQUEST]: deleteProductRequestHandler,
		[Types.DELETE_PRODUCT_SUCCESS]: deleteProductSuccessHandler,
    [Types.DELETE_PRODUCT_FAILURE]: deleteProductFailureHandler,

    [Types.ADD_PRODUCT_REQUEST]: addProductRequestHandler,
		[Types.ADD_PRODUCT_SUCCESS]: addProductSuccessHandler,
    [Types.ADD_PRODUCT_FAILURE]: addProductFailureHandler,

    [Types.GET_PRODUCT_DETAILS_REQUEST]: getProductDetailsRequestHandler,
		[Types.GET_PRODUCT_DETAILS_SUCCESS]: getProductDetailsSuccessHandler,
    [Types.GET_PRODUCT_DETAILS_FAILURE]: getProductDetailsFailureHandler,

    [Types.UPDATE_PRODUCT_DETAILS_REQUEST]: updateProductDetailsRequestHandler,
    [Types.UPDATE_PRODUCT_DETAILS_SUCCESS]: updateProductDetailsSuccessHandler,
    [Types.UPDATE_PRODUCT_DETAILS_FAILURE]: updateProductDetailsFailureHandler,
});
