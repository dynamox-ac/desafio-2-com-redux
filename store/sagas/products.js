import { call, put, takeLatest } from 'redux-saga/effects';

 function* loginIAMRequest({ code }) {
  try {
  const { data } = yield call(api('PRA').post, `Providers/iamLogin`, {
  ...code,
  redirect_url: config.valeRedirectUri
  });
  
  const { user, tokenData } = getUserDataIAM(data);
  
  yield put(SessionActions.loginSuccess(user, tokenData));
  setLoginUser(user);
  login(tokenData);
  history.push('/context');
  } catch (e) {
  history.push('/iam-signin');
  yield put(SessionActions.loginError(e));
  yield put(
  FlashMessageActions.showMessage({
  id: 'error_default',
  variant: 'error'
  })
  );
  }
 }

 export default function*() {
  yield takeLatest(SessionTypes.LOGIN_REQUEST, loginRequest);
  yield takeLatest(SessionTypes.LOGIN_IAM_REQUEST, loginIAMRequest);
  // yield takeLatest(SessionTypes.LOGIN_GOOGLE_REQUEST, loginGoogleRequest);
  // yield takeLatest(SessionTypes.LOGOUT, logout);
 }
