import { ProfileInfo } from "../../models/profile/profile-info";

export const GET_PROFILE_INFO_REQUEST = 'GET_PROFILE_INFO_REQUEST';
export const GET_PROFILE_INFO_SUCCESS = 'GET_PROFILE_INFO_SUCCESS';
export const GET_PROFILE_INFO_FAILURE = 'GET_PROFILE_INFO_FAILURE';

interface GetProfileInfoRequestAction {
  type: typeof GET_PROFILE_INFO_REQUEST;
  payload: {
    id: string;
    [key: string]: any;
  };
}

interface GetProfileInfoSuccessAction {
  type: typeof GET_PROFILE_INFO_SUCCESS;
  payload: {
    profile: any;
    [key: string]: any;
  };
}

interface GetProfileInfoFailureAction {
  type: typeof GET_PROFILE_INFO_FAILURE;
  payload: {
    error: string;
    [key: string]: any;
  };
}

export type ProfileActionTypes = GetProfileInfoRequestAction | GetProfileInfoSuccessAction | GetProfileInfoFailureAction;

export const getProfileInfoRequest = (id: string) => ({
  type: GET_PROFILE_INFO_REQUEST,
  payload: { id }
});

export const getProfileInfoSuccess = (profile: ProfileInfo) => ({
  type: GET_PROFILE_INFO_SUCCESS,
  payload: { profile }
});

export const getProfileInfoFailure = (error: string) => ({
  type: GET_PROFILE_INFO_FAILURE,
  payload: { error }
});