import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getProfileInfoFailure, getProfileInfoRequest, getProfileInfoSuccess } from '../actions/profile';
import { LOGIN_SUCCESS } from '../actions/auth';
import profileService from '../../services/profile';
import channelService from '../../services/channel';
import { getFriendChannelInfoSuccess, getGroupChannelInfoSuccess } from '../actions/channel-info-action';
import { CASE2_NAVIGATE_CHAT_SCREEN_REQUEST, case2NavigateChatScreenFailure, case2NavigateChatScreenRequest, case2NavigateChatScreenSuccess } from '../actions/case2-navigate-chat-screen-action';
import { getChannelChatHistorySuccess } from '../actions/channel-chat-history-action';
import { checkFriendChannelSuccess } from '../actions/check-friend-channel-action';

function* case2NavigateChatScreen(action: ReturnType<typeof case2NavigateChatScreenRequest>): Generator<any, void, any> {
  try {
    const checkFriendChannelInfoResponce = yield call(channelService.checkFriendChannel, action.payload.userID);
    yield put(checkFriendChannelSuccess(checkFriendChannelInfoResponce));

    // get channel info
    const getChannelInfoResponse = yield call(channelService.getFriendChannelInfo, checkFriendChannelInfoResponce.channel.id);
    yield put(getFriendChannelInfoSuccess(getChannelInfoResponse));

    // get chat history
    const getChannelChatHistoryResponse = yield call(channelService.getChannelChatHistory, checkFriendChannelInfoResponce.channel.id);
    yield put(getChannelChatHistorySuccess(getChannelChatHistoryResponse))

    yield put(case2NavigateChatScreenSuccess(true));

  } catch (error: any) {
    yield put(case2NavigateChatScreenFailure(error));
  }
}

export function* case2NavigateChatScreenSaga() {
  yield takeEvery(CASE2_NAVIGATE_CHAT_SCREEN_REQUEST, case2NavigateChatScreen);
}