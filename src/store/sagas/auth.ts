import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN_REQUEST, LOGIN_SUCCESS, loginFailure, loginRequest, loginSuccess } from '../actions/auth';
import api from '../../services/api';

function* login(action: ReturnType<typeof loginRequest>): Generator<any, void, any> {
  try {
    const response = yield call(api.login, action.payload.email, action.payload.password, action.payload.deviceToken);
    yield AsyncStorage.setItem('token', response.token);
    yield put(loginSuccess(response.token ));
    yield put({ type: LOGIN_SUCCESS });
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}