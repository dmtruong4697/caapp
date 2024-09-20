import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { getProfileInfoFailure, getProfileInfoRequest, getProfileInfoSuccess } from '../actions/profile';
import { LOGIN_SUCCESS } from '../actions/auth';

function* getProfileInfo(action: ReturnType<typeof getProfileInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(api.getProfileInfo);
    yield put(getProfileInfoSuccess(response.profile));
  } catch (error: any) {
    yield put(getProfileInfoFailure(error));
  }
}

export function* profileSaga() {
  yield takeEvery(LOGIN_SUCCESS, getProfileInfo);
}