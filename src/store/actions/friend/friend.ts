import { ProfileInfo } from "../../../models/profile/profile-info";
import { UserInfo } from "../../../models/user-info/user-info";

//suggest user
export const GET_SUGGEST_USER_REQUEST = 'GET_SUGGEST_USER_REQUEST';
export const GET_SUGGEST_USER_SUCCESS = 'GET_SUGGEST_USER_SUCCESS';
export const GET_SUGGEST_USER_FAILURE = 'GET_SUGGEST_USER_FAILURE';

interface GetSuggestUserRequestAction {
  type: typeof GET_SUGGEST_USER_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface GetSuggestUserSuccessAction {
  type: typeof GET_SUGGEST_USER_SUCCESS;
  payload: {
    users: any;
    [key: string]: any;
  };
}

interface GetSuggestUserFailureAction {
  type: typeof GET_SUGGEST_USER_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type SuggestUserActionTypes = GetSuggestUserRequestAction | GetSuggestUserSuccessAction | GetSuggestUserFailureAction;

export const getSuggestUserRequest = () => ({
  type: GET_SUGGEST_USER_REQUEST,
  payload: {}
});

export const getSuggestUserSuccess = (users: any) => ({
  type: GET_SUGGEST_USER_SUCCESS,
  payload: { users }
});

export const getSuggestUserFailure = (error: string) => ({
  type: GET_SUGGEST_USER_FAILURE,
  payload: { error }
});

//get all my friend
export const GET_ALL_MY_FRIENDS_REQUEST = 'GET_ALL_MY_FRIENDS_REQUEST';
export const GET_ALL_MY_FRIENDS_SUCCESS = 'GET_ALL_MY_FRIENDS_SUCCESS';
export const GET_ALL_MY_FRIENDS_FAILURE = 'GET_ALL_MY_FRIENDS_FAILURE';

interface GetAllMyFriendsRequestAction {
  type: typeof GET_ALL_MY_FRIENDS_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface GetAllMyFriendsSuccessAction {
  type: typeof GET_ALL_MY_FRIENDS_SUCCESS;
  payload: {
    friends: any;
    [key: string]: any;
  };
}

interface GetAllMyFriendsFailureAction {
  type: typeof GET_ALL_MY_FRIENDS_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type GetAllMyFriendActionTypes = 
  | GetAllMyFriendsRequestAction 
  | GetAllMyFriendsSuccessAction 
  | GetAllMyFriendsFailureAction;

export const getAllMyFriendsRequest = () => ({
  type: GET_ALL_MY_FRIENDS_REQUEST,
  payload: {}
});

export const getAllMyFriendsSuccess = (friends: any) => ({
  type: GET_ALL_MY_FRIENDS_SUCCESS,
  payload: { friends }
});

export const getAllMyFriendsFailure = (error: string) => ({
  type: GET_ALL_MY_FRIENDS_FAILURE,
  payload: { error }
});
