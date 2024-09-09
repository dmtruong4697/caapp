import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import authReducer from './reducers/auth';
import { authSaga } from './sagas/auth';

const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
  yield all([
    authSaga()
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;