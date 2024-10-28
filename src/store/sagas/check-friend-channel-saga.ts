import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CHECK_FRIEND_CHANNEL_REQUEST, checkFriendChannelFailure, checkFriendChannelRequest, checkFriendChannelSuccess } from '../actions/check-friend-channel-action';
import channelService from '../../services/channel';

function* checkFriendChannel(action: ReturnType<typeof checkFriendChannelRequest>): Generator<any, void, any> {
  try {
    const response = yield call(channelService.checkFriendChannel, action.payload.user_id);
    yield put(checkFriendChannelSuccess(response.channel));
    // console.log(response.users);
  } catch (error: any) {
    yield put(checkFriendChannelFailure(error));
  }
}

export function* checkFriendChannelSaga() {
  yield takeEvery(CHECK_FRIEND_CHANNEL_REQUEST, checkFriendChannel);
}