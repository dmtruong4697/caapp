import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST, case1NavigateRCChatScreenFailure, case1NavigateRCChatScreenRequest, case1NavigateRCChatScreenSuccess } from '../../../actions/rc/navigate-rc-chat-screen/case1-navigate-rc-chat-screen';
import RCChannelService from '../../../../services/rc/channel';
import { getCurrentRCChannelSuccess } from '../../../actions/rc/channel/get-current-channel';
import { getRCChannelChatHistorySuccess } from '../../../actions/rc/channel/channel-chat-history';

function* case1NavigateRCChatScreen(action: ReturnType<typeof case1NavigateRCChatScreenRequest>): Generator<any, void, any> {
  try {
    // get current channel
    const getRCChannelInfoResponse = yield call(RCChannelService.getCurrentRCChannel);
    yield put(getCurrentRCChannelSuccess(getRCChannelInfoResponse));

    // get chat history
    const getRCChannelChatHistoryResponse = yield call(RCChannelService.getRCChannelChatHistory, getRCChannelInfoResponse.id);
    yield put(getRCChannelChatHistorySuccess(getRCChannelChatHistoryResponse))

    yield put(case1NavigateRCChatScreenSuccess());

  } catch (error: any) {
    yield put(case1NavigateRCChatScreenFailure(error));
  }
}

export function* case1NavigateRCChatScreenSaga() {
  yield takeEvery(CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST, case1NavigateRCChatScreen);
}