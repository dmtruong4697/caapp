import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileInfoFailure, getProfileInfoRequest, getProfileInfoSuccess } from '../../actions/profile/profile';
import { LOGIN_SUCCESS } from '../../actions/auth/login';
import profileService from '../../../services/profile';

function* getProfileInfo(action: ReturnType<typeof getProfileInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(profileService.getProfileInfo);
    yield put(getProfileInfoSuccess(response.profile));
  } catch (error: any) {
    yield put(getProfileInfoFailure(error));
  }
}

export function* profileSaga() {
  yield takeEvery(LOGIN_SUCCESS, getProfileInfo);
}