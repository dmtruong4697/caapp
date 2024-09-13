import { call, put, takeLatest } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import { GET_SUGGEST_USER_REQUEST, GET_SUGGEST_USER_SUCCESS, getSuggestUserFailure, getSuggestUserRequest, getSuggestUserSuccess } from '../actions/friend';

function* getSuggestUser(action: ReturnType<typeof getSuggestUserRequest>): Generator<any, void, any> {
  try {
    const response = yield call(api.getSuggestUser);
    yield put(getSuggestUserSuccess(response.token ));
    yield put({ type: GET_SUGGEST_USER_SUCCESS});
  } catch (error: any) {
    yield put(getSuggestUserFailure(error.message));
  }
}

export function* friendSaga() {
  yield takeLatest(GET_SUGGEST_USER_REQUEST, getSuggestUser);
}