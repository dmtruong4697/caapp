import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { VALIDATE_EMAIL_REQUEST, validateEmailFailure, validateEmailRequest, validateEmailSuccess } from '../../actions/auth/validate-email';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PROFILE_INFO_REQUEST, profileInfoFailure, profileInfoRequest, profileInfoSuccess, resetProfileInfoState } from '../../actions/profile/profile-info';
import profileService from '../../../services/profile';

function* profileInfo(action: ReturnType<typeof profileInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(profileService.getProfileInfo);
    yield put(profileInfoSuccess(response.profile));
    yield put(resetProfileInfoState());
  } catch (error: any) {
    yield put(profileInfoFailure(error));
  }
}

export function* profileInfoSaga() {
  yield takeLatest(PROFILE_INFO_REQUEST, profileInfo);
}