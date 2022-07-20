import { call, put, takeLatest } from 'redux-saga/effects';
import { restClient } from '../../services/api';
import { Creators as ProductsActions, Types as ProductsTypes } from "../ducks/products";

function* getProducts(action) {
  try {
    console.log('saga:getProducts')
    const response = yield call(restClient.get, '/products');
    console.log(response);
    yield put(ProductsActions.setProductsRequest(response.data))
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

export default function*() {
  yield takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
  yield takeLatest(ProductsTypes.DELETE_PRODUCT_REQUEST, deleteProductRequestSaga);
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