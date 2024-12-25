import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authService from '../../../services/auth';
import { LOGOUT_REQUEST, logoutFailure, logoutRequest, logoutSuccess, resetLogoutState } from '../../actions/auth/logout';
import { resetProfileInfo } from '../../actions/profile/profile';

function* logout(action: ReturnType<typeof logoutRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.logout);
    yield AsyncStorage.setItem('token', "");
    yield put(resetProfileInfo());
    yield put(logoutSuccess());
    yield put(resetLogoutState());
  } catch (error: any) {
    yield put(logoutFailure(error));
  }
}

export function* logoutSaga() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}