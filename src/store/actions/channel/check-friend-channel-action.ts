import { CheckFriendChannelResponce } from "../../../models/channel-responce/check-friend-channel-responce";

export const CHECK_FRIEND_CHANNEL_REQUEST = 'CHECK_FRIEND_CHANNEL_REQUEST';
export const CHECK_FRIEND_CHANNEL_SUCCESS = 'CHECK_FRIEND_CHANNEL_SUCCESS';
export const CHECK_FRIEND_CHANNEL_FAILURE = 'CHECK_FRIEND_CHANNEL_FAILURE';

interface CheckFriendChannelRequestAction {
  type: typeof CHECK_FRIEND_CHANNEL_REQUEST;
  payload: {
    user_id: number;
    [key: string]: any;
  };
}

interface CheckFriensChannelSuccessAction {
  type: typeof CHECK_FRIEND_CHANNEL_SUCCESS;
  payload: {
    channel: CheckFriendChannelResponce;
    [key: string]: any;
  };
}

interface CheckFriensChannelFailureAction {
  type: typeof CHECK_FRIEND_CHANNEL_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type CheckFriendChannelActionTypes = CheckFriendChannelRequestAction | CheckFriensChannelSuccessAction | CheckFriensChannelFailureAction;

export const checkFriendChannelRequest = (user_id: number) => ({
  type: CHECK_FRIEND_CHANNEL_REQUEST,
  payload: { user_id }
});

export const checkFriendChannelSuccess = (channel: CheckFriendChannelResponce) => ({
  type: CHECK_FRIEND_CHANNEL_SUCCESS,
  payload: { channel }
});

export const checkFriendChannelFailure = (error: string) => ({
  type: CHECK_FRIEND_CHANNEL_FAILURE,
  payload: { error }
});