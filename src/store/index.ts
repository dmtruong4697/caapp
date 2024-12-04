import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import loginReducer from './reducers/auth/login';
import profileReducer from './reducers/profile/profile';
import { profileSaga } from './sagas/profile/profile';
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
import getLanguageListReducer from './reducers/constant-data/get-language-list';
import { getLanguageListSaga } from './sagas/constant-data/get-language-list';
import { checkDuplicateHashtagNameFailure } from './actions/profile/check-duplicate-hashtag-name';
import checkDuplicateHashtagNameReducer from './reducers/profile/check-duplicate-hashtag-name';
import { checkDuplicateHashtagNameSaga } from './sagas/profile/check-duplicate-hashtag-name';
import { firstUpdateProfileInfoSaga } from './sagas/profile/first-update-profile-info';
import firstUpdateProfileInfoReducer from './reducers/profile/first-update-profile-info';
import getCurrentChannelReducer from './reducers/rc/channel/get-current-channel';
import { currentRCChannelSaga } from './sagas/rc/channel/get-current-channel';

const rootReducer = combineReducers({
  auth: loginReducer,
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

  //profile
  profile: profileReducer,
  checkDuplicateHashtagName: checkDuplicateHashtagNameReducer,
  firstUpdateProfileInfo: firstUpdateProfileInfoReducer,

  // constant data
  languageList: getLanguageListReducer,

  // rc channel
  currentRCChannel: getCurrentChannelReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    loginSaga(),
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

    //profile
    profileSaga(),
    checkDuplicateHashtagNameSaga(),
    firstUpdateProfileInfoSaga(),

    // constant data
    getLanguageListSaga(),

    // rc channel
    currentRCChannelSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;