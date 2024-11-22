import { call, put, takeLatest } from 'redux-saga/effects';
import { CHECK_DUPLICATEHASHTAG_NAME_REQUEST, checkDuplicateHashtagNameFailure, checkDuplicateHashtagNameRequest, checkDuplicateHashtagNameSuccess } from '../../actions/profile/check-duplicate-hashtag-name';
import profileService from '../../../services/profile';

function* checkDuplicateHashtagName(action: ReturnType<typeof checkDuplicateHashtagNameRequest>): Generator<any, void, any> {
  try {
    const response = yield call(profileService.checkDuplicateHashtagName, action.payload.hashtagName);
    yield put(checkDuplicateHashtagNameSuccess(response!.is_available_hashtag_name));
  } catch (error: any) {
    yield put(checkDuplicateHashtagNameFailure(error));
  }
}

export function* checkDuplicateHashtagNameSaga() {
  yield takeLatest(CHECK_DUPLICATEHASHTAG_NAME_REQUEST, checkDuplicateHashtagName);
}