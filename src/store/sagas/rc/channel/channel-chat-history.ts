import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST, getRCChannelChatHistoryFailure, getRCChannelChatHistoryRequest, getRCChannelChatHistorySuccess } from '../../../actions/rc/channel/channel-chat-history';
import RCChannelService from '../../../../services/rc/channel';

function* getRCChannelChatHistory(action: ReturnType<typeof getRCChannelChatHistoryRequest>): Generator<any, void, any> {
  try {
    const response = yield call(RCChannelService.getRCChannelChatHistory, action.payload.channel_id);
    yield put(getRCChannelChatHistorySuccess(response));
    // console.log(response.users);
  } catch (error: any) {
    yield put(getRCChannelChatHistoryFailure(error));
  }
}

export function* RCChannelChatHistorySaga() {
  yield takeEvery(GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST, getRCChannelChatHistory);
}