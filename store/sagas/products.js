import { call, put, takeLatest } from 'redux-saga/effects';
import { restClient } from '../../services/api';
import { Creators as FlashMessageActions } from "../ducks/flashMessage";
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
    yield put(ProductsActions.getProductsFailure());
    yield put(
      FlashMessageActions.showMessage({
        // id: 'message',
        message: 'unable to get products list',
        variant: 'error'
      })
    );
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
    yield put(ProductsActions.deleteProductFailure());
    yield put(
      FlashMessageActions.showMessage({
        // id: 'message',
        message: 'unable to delete product',
        variant: 'error'
      })
    );
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
    yield put(ProductsActions.addProductFailure());
    yield put(
      FlashMessageActions.showMessage({
        // id: 'message',
        message: 'unable to add new product',
        variant: 'error'
      })
    );
  }
}

function* getProductDetailsSaga(action) {
  try {
    console.log('saga:getProductDetailsRequest')
    console.log("get product details action:", action);
    const response = yield call(restClient.get, `/products/${action.id}`);
    console.log("get product details response", response);
    yield put(ProductsActions.getProductDetailsSuccess(response.data))
  } catch (e) {
    console.log('saga:error')
    console.log(e);
    yield put(ProductsActions.getProductDetailsFailure());
    yield put(
      FlashMessageActions.showMessage({
        // id: 'message',
        message: 'unable to get product details',
        variant: 'error'
      })
    );
  }
}

function* updateProductDetailsSaga(action) {
  try {
    console.log('saga:updateProductDetailsRequest')
    console.log("update product details action:", action);
    const response = yield call(restClient.put, `/products/${action.data.id}`, action.data);
    console.log("update product details response", response);
    yield put(ProductsActions.updateProductDetailsSuccess(response.data))
  } catch (e) {
    console.log('saga:error')
    console.log(e);
    yield put(ProductsActions.updateProductDetailsFailure());
    yield put(
      FlashMessageActions.showMessage({
        // id: 'message',
        message: 'unable to update product',
        variant: 'error'
      })
    );
  }
}

export default function*() {
  yield takeLatest(ProductsTypes.GET_PRODUCTS_REQUEST, getProducts),
  yield takeLatest(ProductsTypes.DELETE_PRODUCT_REQUEST, deleteProductRequestSaga),
  yield takeLatest(ProductsTypes.ADD_PRODUCT_REQUEST, addProductRequestSaga),
  yield takeLatest(ProductsTypes.GET_PRODUCT_DETAILS_REQUEST, getProductDetailsSaga)
  yield takeLatest(ProductsTypes.UPDATE_PRODUCT_DETAILS_REQUEST, updateProductDetailsSaga);
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