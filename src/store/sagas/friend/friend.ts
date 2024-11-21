import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_ALL_MY_FRIENDS_REQUEST, GET_SUGGEST_USER_REQUEST, GET_SUGGEST_USER_SUCCESS, getAllMyFriendsFailure, getAllMyFriendsRequest, getAllMyFriendsSuccess, getSuggestUserFailure, getSuggestUserRequest, getSuggestUserSuccess } from '../../actions/friend/friend';
import friendService from '../../../services/friend';

function* getSuggestUser(action: ReturnType<typeof getSuggestUserRequest>): Generator<any, void, any> {
  try {
    const response = yield call(friendService.getSuggestUser);
    yield put(getSuggestUserSuccess(response.users));
    // console.log(response.users);
  } catch (error: any) {
    yield put(getSuggestUserFailure(error));
  }
}

function* getAllMyFriends(action: ReturnType<typeof getAllMyFriendsRequest>): Generator<any, void, any> {
  try {
    const response = yield call(friendService.getAllMyFriend);
    yield put(getAllMyFriendsSuccess(response.friends));
  } catch (error: any) {
    yield put(getAllMyFriendsFailure(error));  
  }
}


export function* friendSaga() {
  yield takeEvery(GET_ALL_MY_FRIENDS_REQUEST, getAllMyFriends);
  yield takeEvery(GET_SUGGEST_USER_REQUEST, getSuggestUser);
}