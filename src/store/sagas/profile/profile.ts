import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_PROFILE_INFO_REQUEST, getProfileInfoFailure, getProfileInfoRequest, getProfileInfoSuccess, resetProfileInfo } from '../../actions/profile/profile';
import { LOGIN_SUCCESS } from '../../actions/auth/login';
import profileService from '../../../services/profile';
import { FIRST_UPDATE_PROFILE_INFO_SUCCESS } from '../../actions/profile/first-update-profile-info';

function* getProfileInfo(action: ReturnType<typeof getProfileInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(profileService.getProfileInfo);
    yield put(getProfileInfoSuccess(response.profile));
    yield put(resetProfileInfo());
  } catch (error: any) {
    yield put(getProfileInfoFailure(error));
  }
}

export function* profileSaga() {
  yield takeEvery(GET_PROFILE_INFO_REQUEST, getProfileInfo);
  // yield takeLatest(LOGIN_SUCCESS, getProfileInfo);
  // yield takeLatest(FIRST_UPDATE_PROFILE_INFO_SUCCESS, getProfileInfo);
}