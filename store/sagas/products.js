import { call, put, takeLatest } from 'redux-saga/effects';
import { restClient } from '../../services/api';
import { Creators as ProductsActions, Types as ProductsTypes } from "../ducks/products";

function* getProducts(action) {
  try {
    console.log('saga:getProducts')
    const response = yield call(restClient.get, '/products');
    console.log(response);
    yield put(ProductsActions.getProductsSuccess(response.data))
  } catch (e) {
    console.log('saga:error')
    console.log(e);
  }
}

function* deleteProductRequestSaga(action) {
  try {
    console.log('saga:deleteProductRequest')
    const response = yield call(restClient.delete, `/products/${action.id}`);
    console.log(response);
    console.log(action);
    yield put(ProductsActions.deleteProductSuccess(action.id))
  } catch (e) {
    console.log('saga:error')
    console.log(e);
  }
}

function* addProductRequestSaga(action) {
  try {
    console.log('saga:addProductRequest')
    console.log("add product action:", action);
    const response = yield call(restClient.post, "/products", action.data);
    console.log("add product response", response);
    yield put(ProductsActions.addProductSuccess(response.data))
  } catch (e) {
    console.log('saga:error')
    console.log(e);
  }
}

function* getProductDetailsSaga(action) {
  try {
    console.log('saga:getProductDetailsRequest')
    console.log("get product details action:", action);
    const response = yield call(restClient.get, `/products/${action.id}`);
    // const response = yield call(restClient.put, "/products", action.data);
    console.log("get product details response", response);
    yield put(ProductsActions.getProductDetailsSuccess(response.data))
  } catch (e) {
    console.log('saga:error')
    console.log(e);
  }
}

export default function*() {
  yield takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
  yield takeLatest(ProductsTypes.DELETE_PRODUCT_REQUEST, deleteProductRequestSaga),
  yield takeLatest(ProductsTypes.ADD_PRODUCT_REQUEST, addProductRequestSaga),
  yield takeLatest(ProductsTypes.GET_PRODUCT_DETAILS_REQUEST, getProductDetailsSaga);
}






// function* getProducts({ code }) {
//   try {
//     console.log('saga:getProducts')
//     const response = yield call(restClient.get, '/products');
//     console.log(response);
//     // yield put(SessionActions.loginSuccess(user, tokenData)); -----
//   } catch (e) {
//     console.log('saga:error')
//     console.log(e);
//     // yield put(SessionActions.loginError(e));
//     // yield put(
//     //   FlashMessageActions.showMessage({
//     //     id: 'error_default',
//     //     variant: 'error'
//     //   })
//     // );
//   }
// }

// export default function*() {
//   yield takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts);
// }