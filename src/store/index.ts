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
import checkDuplicateHashtagNameReducer from './reducers/profile/check-duplicate-hashtag-name';
import { checkDuplicateHashtagNameSaga } from './sagas/profile/check-duplicate-hashtag-name';
import { firstUpdateProfileInfoSaga } from './sagas/profile/first-update-profile-info';
import firstUpdateProfileInfoReducer from './reducers/profile/first-update-profile-info';
import getCurrentChannelReducer from './reducers/rc/channel/get-current-channel';
import { currentRCChannelSaga } from './sagas/rc/channel/get-current-channel';
import RCChannelChatHistoryReducer from './reducers/rc/channel/channel-chat-history';
import { RCChannelChatHistorySaga } from './sagas/rc/channel/channel-chat-history';
import case1NavigateRCChatScreenReducer from './reducers/rc/navigate-rc-chat-screen/case1-navigate-rc-chat-screen';
import { case1NavigateRCChatScreenSaga } from './sagas/rc/navigate-rc-chat-screen/case1-navigate-rc-chat-screen';
import { searchByhashtagNameSaga } from './sagas/search/search-by-hashtag-name';
import searchByHashtagNameReducer from './reducers/search/search-by-hashtag-name';
import leaveRCChannelReducer from './reducers/rc/channel/leave-channel';
import { leaveRCChannelSaga } from './sagas/rc/channel/leave-channel';
import logoutReducer from './reducers/auth/logout';
import { logoutSaga } from './sagas/auth/logout';
import { forgotPasswordSaga } from './sagas/auth/forgot-password';
import forgotPasswordReducer from './reducers/auth/forgot-password';
import forgotPasswordValidateEmailReducer from './reducers/auth/forgot-pasword-validate-email';
import { forgotPasswordValidateEmailSaga } from './sagas/auth/forgot-password-validate-email';
import forgotPasswordChangePasswordReducer from './reducers/auth/forgot-password-change-password';
import { forgotPasswordChangePasswordSaga } from './sagas/auth/forgot-password-change-password';
import resendForgotPasswordValidateCodeReducer from './reducers/auth/resend-forgot-password-validate-code';
import { resendForgotPasswordValidateCodeSaga } from './sagas/auth/resend-forgot-password-validate-code';
import { profileInfoSaga } from './sagas/profile/profile-info';
import profileInfoReducer from './reducers/profile/profile-info';
import updateProfileInfoReducer from './reducers/profile/update-profile-info';
import { updateProfileInfoSaga } from './sagas/profile/update-profile-info';
import rejectFriendRequestReducer from './reducers/friend/reject-friend-request';
import { rejectFriendRequestSaga } from './sagas/friend/reject-friend-request';

const rootReducer = combineReducers({
  auth: loginReducer,
  logout: logoutReducer,
  friend: friendReducer,
  friendRequest: friendRequestReducer,
  rejectFriendRequest: rejectFriendRequestReducer,
  channelList: channelListReducer,
  checkFriendChannel: checkFriendChannelReducer,
  channelInfo: getChannelInfoReducer,
  channelChatHistory: channelChatHistoryReducer,
  case1NavigateChatScreen: case1NavigateChatScreenReducer,
  case2NavigateChatScreen: case2NavigateChatScreenReducer,
  register: registerReducer,
  resendCode: resendCodeReducer,
  validateEmail: validateEmailReducer,
  forgotPassword: forgotPasswordReducer,
  forgotPasswordValidateEmail: forgotPasswordValidateEmailReducer,
  forgotPasswordChangePassword: forgotPasswordChangePasswordReducer,
  resendForgotPasswordValidateCode: resendForgotPasswordValidateCodeReducer,

  //profile
  profile: profileReducer,
  profileInfo: profileInfoReducer,
  checkDuplicateHashtagName: checkDuplicateHashtagNameReducer,
  firstUpdateProfileInfo: firstUpdateProfileInfoReducer,
  updateProfileInfo: updateProfileInfoReducer,

  // constant data
  languageList: getLanguageListReducer,

  // rc channel
  currentRCChannel: getCurrentChannelReducer,
  RCChannelChatHistory: RCChannelChatHistoryReducer,
  case1NavigateRCChatScreen: case1NavigateRCChatScreenReducer,
  leaveRCChannel: leaveRCChannelReducer,

  // search
  searchByhashtagName: searchByHashtagNameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    loginSaga(),
    logoutSaga(),
    friendSaga(),
    friendRequestSaga(),
    rejectFriendRequestSaga(),
    channelListSaga(),
    checkFriendChannelSaga(),
    channelInfoSaga(),
    channelChatHistorySaga(),
    case1NavigateChatScreenSaga(),
    case2NavigateChatScreenSaga(),
    registerSaga(),
    resendCodeSaga(),
    validateEmailSaga(),
    forgotPasswordSaga(),
    forgotPasswordValidateEmailSaga(),
    forgotPasswordChangePasswordSaga(),
    resendForgotPasswordValidateCodeSaga(),

    //profile
    profileSaga(),
    profileInfoSaga(),
    checkDuplicateHashtagNameSaga(),
    firstUpdateProfileInfoSaga(),
    updateProfileInfoSaga(),

    // constant data
    getLanguageListSaga(),

    // rc channel
    currentRCChannelSaga(),
    RCChannelChatHistorySaga(),
    case1NavigateRCChatScreenSaga(),
    leaveRCChannelSaga(),

    //search
    searchByhashtagNameSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;