import { call, put, takeLatest } from 'redux-saga/effects';
import profileService from '../../../services/profile';
import { UPDATE_PROFILE_INFO_REQUEST, updateProfileInfoFailure, updateProfileInfoRequest, updateProfileInfoSuccess } from '../../actions/profile/update-profile-info';

function* updateProfileInfo(action: ReturnType<typeof updateProfileInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(profileService.updateProfileInfo, action.payload.updateProfile);
    yield put(updateProfileInfoSuccess());
  } catch (error: any) {
    yield put(updateProfileInfoFailure(error));
  }
}

export function* updateProfileInfoSaga() {
  yield takeLatest(UPDATE_PROFILE_INFO_REQUEST, updateProfileInfo);
}