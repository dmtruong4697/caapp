export const REJECT_FRIEND_REQUEST_REQUEST = 'REJECT_FRIEND_REQUEST_REQUEST';
export const REJECT_FRIEND_REQUEST_SUCCESS = 'REJECT_FRIEND_REQUEST_SUCCESS';
export const REJECT_FRIEND_REQUEST_FAILURE = 'REJECT_FRIEND_REQUEST_FAILURE';

interface RejectFriendRequestRequestAction {
  type: typeof REJECT_FRIEND_REQUEST_REQUEST;
  payload: {
    id: number;
    [key: string]: any;
  };
}

interface RejectFriendRequestSuccessAction {
  type: typeof REJECT_FRIEND_REQUEST_SUCCESS;
  payload: {
    id: number;
    [key: string]: any;
  };
}

interface RejectFriendRequestFailureAction {
  type: typeof REJECT_FRIEND_REQUEST_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type RejectFriendRequestActionTypes = RejectFriendRequestRequestAction | RejectFriendRequestSuccessAction | RejectFriendRequestFailureAction;

export const rejectFriendRequestRequest = (id: number) => ({
  type: REJECT_FRIEND_REQUEST_REQUEST,
  payload: { id }
});

export const rejectFriendRequestSuccess = (id: number) => ({
  type: REJECT_FRIEND_REQUEST_SUCCESS,
  payload: { id }
});

export const rejectFriendRequestFailure = (error: string) => ({
  type: REJECT_FRIEND_REQUEST_FAILURE,
  payload: { error }
});