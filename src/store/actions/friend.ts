import { ProfileInfo } from "../../models/profile/profile-info";

export const GET_SUGGEST_USER_REQUEST = 'GET_PROFILE_INFO_REQUEST';
export const GET_SUGGEST_USER_SUCCESS = 'GET_PROFILE_INFO_SUCCESS';
export const GET_SUGGEST_USER_FAILURE = 'GET_PROFILE_INFO_FAILURE';

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
    error: string;
    [key: string]: any;
  };
}

export type FriendActionTypes = GetSuggestUserRequestAction | GetSuggestUserSuccessAction | GetSuggestUserFailureAction;

export const getSuggestUserRequest = (id: string) => ({
  type: GET_SUGGEST_USER_REQUEST,
  payload: { id }
});

export const getSuggestUserSuccess = (profile: ProfileInfo) => ({
  type: GET_SUGGEST_USER_SUCCESS,
  payload: { profile }
});

export const getSuggestUserFailure = (error: string) => ({
  type: GET_SUGGEST_USER_FAILURE,
  payload: { error }
});