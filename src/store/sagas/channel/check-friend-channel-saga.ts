import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import channelService from '../../../services/channel';
import { CHECK_FRIEND_CHANNEL_REQUEST, checkFriendChannelFailure, checkFriendChannelRequest, checkFriendChannelSuccess } from '../../actions/channel/check-friend-channel-action';

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