import { GetFriendChannelInfoResponce } from "../../models/channel-responce/get-friend-channel-info-responce";
import { GetGroupChannelInfoResponce } from "../../models/channel-responce/get-group-channel-info-responce";

export const GET_FRIEND_CHANNEL_INFO_REQUEST = 'GET_FRIEND_CHANNEL_INFO_REQUEST';
export const GET_FRIEND_CHANNEL_INFO_SUCCESS = 'GET_FRIEND_CHANNEL_INFO_SUCCESS';
export const GET_FRIEND_CHANNEL_INFO_FAILURE = 'GET_FRIEND_CHANNEL_INFO_FAILURE';

export const GET_GROUP_CHANNEL_INFO_REQUEST = 'GET_GROUP_CHANNEL_INFO_REQUEST';
export const GET_GROUP_CHANNEL_INFO_SUCCESS = 'GET_GROUP_CHANNEL_INFO_SUCCESS';
export const GET_GROUP_CHANNEL_INFO_FAILURE = 'GET_GROUP_CHANNEL_INFO_FAILURE';

// get friend channel info
interface GetFriendChannelInfoRequestAction {
  type: typeof GET_FRIEND_CHANNEL_INFO_REQUEST;
  payload: {
    channel_id: number;
    [key: string]: any;
  };
}
interface GetFriendChannelInfoSuccessAction {
  type: typeof GET_FRIEND_CHANNEL_INFO_SUCCESS;
  payload: {
    channel_info: GetFriendChannelInfoResponce;
    [key: string]: any;
  };
}
interface GetFriendChannelInfoFailureAction {
  type: typeof GET_FRIEND_CHANNEL_INFO_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

// get group channel info
interface GetGroupChannelInfoRequestAction {
    type: typeof GET_GROUP_CHANNEL_INFO_REQUEST;
    payload: {
      channel_id: number;
      [key: string]: any;
    };
  }
  interface GetGroupChannelInfoSuccessAction {
    type: typeof GET_GROUP_CHANNEL_INFO_SUCCESS;
    payload: {
      channel_info: GetGroupChannelInfoResponce;
      [key: string]: any;
    };
  }
  interface GetGroupChannelInfoFailureAction {
    type: typeof GET_GROUP_CHANNEL_INFO_FAILURE;
    payload: {
      error: any;
      [key: string]: any;
    };
  }

export type GetChannelInfoActionTypes = 
    GetFriendChannelInfoRequestAction 
    | GetFriendChannelInfoSuccessAction 
    | GetFriendChannelInfoFailureAction
    | GetGroupChannelInfoRequestAction
    | GetGroupChannelInfoSuccessAction
    | GetGroupChannelInfoFailureAction;


// get friend channel info
export const getFriendChannelInfoRequest = (channel_id: number) => ({
  type: GET_FRIEND_CHANNEL_INFO_REQUEST,
  payload: { channel_id }
});

export const getFriendChannelInfoSuccess = (channel_info: GetFriendChannelInfoResponce) => ({
  type: GET_FRIEND_CHANNEL_INFO_SUCCESS,
  payload: { channel_info }
});

export const getFriendChannelInfoFailure = (error: string) => ({
  type: GET_FRIEND_CHANNEL_INFO_FAILURE,
  payload: { error }
});

// get group channel info
export const getGroupChannelInfoRequest = (channel_id: number) => ({
    type: GET_GROUP_CHANNEL_INFO_REQUEST,
    payload: { channel_id }
  });
  
export const getGroupChannelInfoSuccess = (channel_info: GetGroupChannelInfoResponce) => ({
    type: GET_GROUP_CHANNEL_INFO_SUCCESS,
    payload: { channel_info }
});

export const getGroupChannelInfoFailure = (error: string) => ({
    type: GET_GROUP_CHANNEL_INFO_FAILURE,
    payload: { error }
});