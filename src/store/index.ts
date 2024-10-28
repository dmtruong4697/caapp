import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/auth';
import { authSaga } from './sagas/auth';
import profileReducer from './reducers/profile';
import { profileSaga } from './sagas/profile';
import friendReducer from './reducers/friend';
import { friendSaga } from './sagas/friend';
import friendRequestReducer from './reducers/friend-request';
import { friendRequestSaga } from './sagas/friend-request';
import channelListReducer from './reducers/get-channel-list-reducer';
import { channelListSaga } from './sagas/get-channel-list-saga';
import checkFriendChannelReducer from './reducers/check-friend-channel-reducer';
import { checkFriendChannelSaga } from './sagas/check-friend-channel-saga';
import getChannelInfoReducer from './reducers/channel-info-reducer';
import { channelInfoSaga } from './sagas/channel-info-saga';
import channelChatHistoryReducer from './reducers/channel-chat-history-reducer';
import { channelChatHistorySaga } from './sagas/channel-chat-history-saga';
import case1NavigateChatScreenReducer from './reducers/case1-navigate-chat-screen-reducer';
import { case1NavigateChatScreenSaga } from './sagas/case1-navigate-chat-screen-saga';
import case2NavigateChatScreenReducer from './reducers/case2-navigate-chat-screen-reducer';
import { case2NavigateChatScreenSaga } from './sagas/case2-navigate-chat-screen-saga';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  friend: friendReducer,
  friendRequest: friendRequestReducer,
  channelList: channelListReducer,
  checkFriendChannel: checkFriendChannelReducer,
  channelInfo: getChannelInfoReducer,
  channelChatHistory: channelChatHistoryReducer,
  case1NavigateChatScreen: case1NavigateChatScreenReducer,
  case2NavigateChatScreen: case2NavigateChatScreenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
    friendSaga(),
    friendRequestSaga(),
    channelListSaga(),
    checkFriendChannelSaga(),
    channelInfoSaga(),
    channelChatHistorySaga(),
    case1NavigateChatScreenSaga(),
    case2NavigateChatScreenSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;