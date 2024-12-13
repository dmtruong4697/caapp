import { call, put, takeEvery } from "redux-saga/effects";
import { ACCEPT_FRIEND_REQUEST_REQUEST, acceptFriendRequestFailure, acceptFriendRequestRequest, acceptFriendRequestSuccess, CREATE_FRIEND_REQUEST_REQUEST, createFriendRequestFailure, createFriendRequestRequest, createFriendRequestSuccess, GET_ALL_RECEIVED_REQUEST_REQUEST, getAllReceivedRequestFailure, getAllReceivedRequestRequest, getAllReceivedRequestSuccess } from "../../actions/friend/friend-request";
import { friendRequestService } from "../../../services/friend-request";

function* createFriendRequest(action: ReturnType<typeof createFriendRequestRequest>): Generator<any, void, any> {
    try {
        const response = yield call(friendRequestService.createFriendRequest, action.payload.user_id);
        yield put(createFriendRequestSuccess(action.payload.user_id));
    } catch (error: any) {
        yield put(createFriendRequestFailure(error));
    }
}

function* getAllReceivedRequest(action: ReturnType<typeof getAllReceivedRequestRequest>): Generator<any, void, any> {
    try {
        const response = yield call(friendRequestService.getAllReceivedRequest);
        yield put(getAllReceivedRequestSuccess(response));
    } catch (error: any) {
        yield put(getAllReceivedRequestFailure(error));
    }
}

function* acceptFriendRequest(action: ReturnType<typeof acceptFriendRequestRequest>): Generator<any, void, any> {
    try {
        const response = yield call(friendRequestService.acceptFriendRequest, action.payload.id);
        yield put(acceptFriendRequestSuccess(action.payload.id));
    } catch (error: any) {
        yield put(acceptFriendRequestFailure(error));
    }
}

export function* friendRequestSaga() {
    yield takeEvery(CREATE_FRIEND_REQUEST_REQUEST, createFriendRequest);
    yield takeEvery(GET_ALL_RECEIVED_REQUEST_REQUEST, getAllReceivedRequest);
    yield takeEvery(ACCEPT_FRIEND_REQUEST_REQUEST, acceptFriendRequest);
}