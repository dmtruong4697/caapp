import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CHANNEL_LIST_REQUEST, getChannelListFailure, getChannelListRequest, getChannelListSuccess } from '../actions/get-channel-list-action';
import channelService from '../../services/channel';

function* getChannelList(action: ReturnType<typeof getChannelListRequest>): Generator<any, void, any> {
  try {
    const response = yield call(channelService.getChannelList, action.payload.limit, action.payload.offset);
    yield put(getChannelListSuccess(response.channels, response.is_last_page));
    // console.log(response.users);
  } catch (error: any) {
    console.log("loi saga get channel list");
    yield put(getChannelListFailure(error));
  }
}

export function* channelListSaga() {
  yield takeEvery(GET_CHANNEL_LIST_REQUEST, getChannelList);
}