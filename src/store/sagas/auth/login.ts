import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../../../services/auth';
import { LOGIN_REQUEST, loginFailure, loginRequest, loginSuccess } from '../../actions/auth/login';

function* login(action: ReturnType<typeof loginRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.login, action.payload.email, action.payload.password, action.payload.deviceToken);
    yield AsyncStorage.setItem('token', response!.token);
    yield put(loginSuccess(response!.token ));
    // yield put({ type: LOGIN_SUCCESS });
  } catch (error: any) {
    // console.log(error);
    yield put(loginFailure(error));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}