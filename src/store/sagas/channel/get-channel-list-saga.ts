import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import channelService from '../../../services/channel';
import { GET_CHANNEL_LIST_REQUEST, getChannelListFailure, getChannelListRequest, getChannelListSuccess } from '../../actions/channel/get-channel-list-action';

function* getChannelList(action: ReturnType<typeof getChannelListRequest>): Generator<any, void, any> {
  try {
    const response = yield call(channelService.getChannelList, action.payload.limit, action.payload.offset);
    yield put(getChannelListSuccess(response.channels, response.is_last_page));
  } catch (error: any) {
    yield put(getChannelListFailure(error));
  }
}

export function* channelListSaga() {
  yield takeEvery(GET_CHANNEL_LIST_REQUEST, getChannelList);
}