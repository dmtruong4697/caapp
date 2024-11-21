import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import loginReducer from './reducers/auth/login';
import profileReducer from './reducers/profile';
import { profileSaga } from './sagas/profile';
import friendReducer from './reducers/friend/friend';
import { friendSaga } from './sagas/friend/friend';
import friendRequestReducer from './reducers/friend/friend-request';
import { friendRequestSaga } from './sagas/friend/friend-request';
import channelListReducer from './reducers/channel/get-channel-list-reducer';
import { channelListSaga } from './sagas/channel/get-channel-list-saga';
import checkFriendChannelReducer from './reducers/channel/check-friend-channel-reducer';
import { checkFriendChannelSaga } from './sagas/channel/check-friend-channel-saga';
import getChannelInfoReducer from './reducers/channel/channel-info-reducer';
import { channelInfoSaga } from './sagas/channel/channel-info-saga';
import channelChatHistoryReducer from './reducers/channel/channel-chat-history-reducer';
import { channelChatHistorySaga } from './sagas/channel/channel-chat-history-saga';
import case1NavigateChatScreenReducer from './reducers/navigate-chat-screen/case1-navigate-chat-screen-reducer';
import { case1NavigateChatScreenSaga } from './sagas/navigate-chat-screen/case1-navigate-chat-screen-saga';
import case2NavigateChatScreenReducer from './reducers/navigate-chat-screen/case2-navigate-chat-screen-reducer';
import { case2NavigateChatScreenSaga } from './sagas/navigate-chat-screen/case2-navigate-chat-screen-saga';
import { loginSaga } from './sagas/auth/login';
import registerReducer from './reducers/auth/register';
import { registerSaga } from './sagas/auth/register';
import resendCodeReducer from './reducers/auth/resend-code';
import validateEmailReducer from './reducers/auth/validate-email';
import { resendCodeSaga } from './sagas/auth/resend-code';
import { validateEmailSaga } from './sagas/auth/validate-email';

const rootReducer = combineReducers({
  auth: loginReducer,
  profile: profileReducer,
  friend: friendReducer,
  friendRequest: friendRequestReducer,
  channelList: channelListReducer,
  checkFriendChannel: checkFriendChannelReducer,
  channelInfo: getChannelInfoReducer,
  channelChatHistory: channelChatHistoryReducer,
  case1NavigateChatScreen: case1NavigateChatScreenReducer,
  case2NavigateChatScreen: case2NavigateChatScreenReducer,
  register: registerReducer,
  resendCode: resendCodeReducer,
  validateEmail: validateEmailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    loginSaga(),
    profileSaga(),
    friendSaga(),
    friendRequestSaga(),
    channelListSaga(),
    checkFriendChannelSaga(),
    channelInfoSaga(),
    channelChatHistorySaga(),
    case1NavigateChatScreenSaga(),
    case2NavigateChatScreenSaga(),
    registerSaga(),
    resendCodeSaga(),
    validateEmailSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;