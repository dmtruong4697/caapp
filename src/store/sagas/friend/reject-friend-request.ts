import { call, put, takeLatest } from 'redux-saga/effects';
import { REJECT_FRIEND_REQUEST_REQUEST, rejectFriendRequestFailure, rejectFriendRequestRequest, rejectFriendRequestSuccess } from '../../actions/friend/reject-friend-request';
import friendRequestService from '../../../services/friend-request';

function* rejectFriendRequest(action: ReturnType<typeof rejectFriendRequestRequest>): Generator<any, void, any> {
  try {
    const response = yield call(friendRequestService.rejectFriendRequest, action.payload.id);
    yield put(rejectFriendRequestSuccess(action.payload.id));
  } catch (error: any) {
    yield put(rejectFriendRequestFailure(error));
  }
}

export function* rejectFriendRequestSaga() {
  yield takeLatest(REJECT_FRIEND_REQUEST_REQUEST, rejectFriendRequest);
}