import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileInfoFailure, getProfileInfoRequest, getProfileInfoSuccess } from '../actions/profile';
import { LOGIN_SUCCESS } from '../actions/auth';
import profileService from '../../services/profile';
import { CASE1_NAVIGATE_CHAT_SCREEN_REQUEST, case1NavigateChatScreenFailure, case1NavigateChatScreenRequest, case1NavigateChatScreenSuccess } from '../actions/case1-navigate-chat-screen-action';
import channelService from '../../services/channel';
import { getFriendChannelInfoSuccess, getGroupChannelInfoSuccess } from '../actions/channel-info-action';
import { getChannelChatHistorySuccess } from '../actions/channel-chat-history-action';

function* case1NavigateChatScreen(action: ReturnType<typeof case1NavigateChatScreenRequest>): Generator<any, void, any> {
  try {

    // get channel info
    let getChannelInfoResponse = null
    if (action.payload.channelType == 'friend') {
        getChannelInfoResponse = yield call(channelService.getFriendChannelInfo, action.payload.channelID);
        yield put(getFriendChannelInfoSuccess(getChannelInfoResponse));
    } else {
        getChannelInfoResponse = yield call(channelService.getGroupChannelInfo, action.payload.channelID);
        yield put(getGroupChannelInfoSuccess(getChannelInfoResponse));
    }

    // get chat history
    const getChannelChatHistoryResponse = yield call(channelService.getChannelChatHistory, action.payload.channelID);
    yield put(getChannelChatHistorySuccess(getChannelChatHistoryResponse))


    yield put(case1NavigateChatScreenSuccess());

  } catch (error: any) {
    yield put(case1NavigateChatScreenFailure(error));
  }
}

export function* case1NavigateChatScreenSaga() {
  yield takeEvery(CASE1_NAVIGATE_CHAT_SCREEN_REQUEST, case1NavigateChatScreen);
}