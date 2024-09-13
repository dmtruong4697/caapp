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

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  friend: friendReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga(),
    profileSaga(),
    friendSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;