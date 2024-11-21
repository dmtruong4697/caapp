import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import channelService from '../../../services/channel';
import { GET_CHANNEL_CHAT_HISTOTY_REQUEST, getChannelChatHistoryFailure, getChannelChatHistoryRequest, getChannelChatHistorySuccess } from '../../actions/channel/channel-chat-history-action';

function* getChannelChatHistory(action: ReturnType<typeof getChannelChatHistoryRequest>): Generator<any, void, any> {
  try {
    const response = yield call(channelService.getChannelChatHistory, action.payload.channel_id);
    yield put(getChannelChatHistorySuccess(response));
    // console.log(response.users);
  } catch (error: any) {
    yield put(getChannelChatHistoryFailure(error));
  }
}

export function* channelChatHistorySaga() {
  yield takeEvery(GET_CHANNEL_CHAT_HISTOTY_REQUEST, getChannelChatHistory);
}