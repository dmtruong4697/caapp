import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import channelService from '../../../services/channel';
import { GET_FRIEND_CHANNEL_INFO_REQUEST, GET_GROUP_CHANNEL_INFO_REQUEST, getFriendChannelInfoFailure, getFriendChannelInfoRequest, getFriendChannelInfoSuccess, getGroupChannelInfoFailure, getGroupChannelInfoRequest, getGroupChannelInfoSuccess } from '../../actions/channel/channel-info-action';

function* getFriendChannelInfo(action: ReturnType<typeof getFriendChannelInfoRequest>): Generator<any, void, any> {
  try {
    const response = yield call(channelService.getFriendChannelInfo, action.payload.channel_id);
    yield put(getFriendChannelInfoSuccess(response));
    // console.log(response.users);
  } catch (error: any) {
    yield put(getFriendChannelInfoFailure(error));
  }
}

function* getGroupChannelInfo(action: ReturnType<typeof getGroupChannelInfoRequest>): Generator<any, void, any> {
    try {
      const response = yield call(channelService.getGroupChannelInfo, action.payload.channel_id);
      yield put(getGroupChannelInfoSuccess(response));
      // console.log(response.users);
    } catch (error: any) {
      yield put(getGroupChannelInfoFailure(error));
    }
  }

export function* channelInfoSaga() {
  yield takeEvery(GET_FRIEND_CHANNEL_INFO_REQUEST, getFriendChannelInfo);
  yield takeEvery(GET_GROUP_CHANNEL_INFO_REQUEST, getGroupChannelInfo);
}