import { call, put, takeLatest } from 'redux-saga/effects';
import { CHECK_DUPLICATEHASHTAG_NAME_REQUEST, checkDuplicateHashtagNameFailure, checkDuplicateHashtagNameRequest, checkDuplicateHashtagNameSuccess } from '../../actions/profile/check-duplicate-hashtag-name';
import profileService from '../../../services/profile';
import { FIRST_UPDATE_PROFILE_INFO_REQUEST, firstUpdateProfileInfoFailure, firstUpdateProfileInfoRequest, firstUpdateProfileInfoSuccess } from '../../actions/profile/first-update-profile-info';

function* firstUpdateProfileInfo(action: ReturnType<typeof firstUpdateProfileInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(profileService.firstUpdateProfileInfo, action.payload.request);
    yield put(firstUpdateProfileInfoSuccess());
  } catch (error: any) {
    yield put(firstUpdateProfileInfoFailure(error));
  }
}

export function* firstUpdateProfileInfoSaga() {
  yield takeLatest(FIRST_UPDATE_PROFILE_INFO_REQUEST, firstUpdateProfileInfo);
}