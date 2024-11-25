import { FirstUpdateProfileInfoRequest } from "../../../models/profile-request/first-update-profile-info-request";

export const FIRST_UPDATE_PROFILE_INFO_REQUEST = 'FIRST_UPDATE_PROFILE_INFO_REQUEST';
export const FIRST_UPDATE_PROFILE_INFO_SUCCESS = 'FIRST_UPDATE_PROFILE_INFO_SUCCESS';
export const FIRST_UPDATE_PROFILE_INFO_FAILURE = 'FIRST_UPDATE_PROFILE_INFO_FAILURE';

interface FirstUpdateProfileInfoRequestAction {
  type: typeof FIRST_UPDATE_PROFILE_INFO_REQUEST;
  payload: {
    request: FirstUpdateProfileInfoRequest;
    [key: string]: any;
  };
}

interface FirstUpdateProfileInfoSuccessAction {
  type: typeof FIRST_UPDATE_PROFILE_INFO_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface FirstUpdateProfileInfoFailureAction {
  type: typeof FIRST_UPDATE_PROFILE_INFO_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type FirstUpdateProfileInfoActionTypes = FirstUpdateProfileInfoRequestAction | FirstUpdateProfileInfoSuccessAction | FirstUpdateProfileInfoFailureAction;

export const firstUpdateProfileInfoRequest = (request: FirstUpdateProfileInfoRequest) => ({
  type: FIRST_UPDATE_PROFILE_INFO_REQUEST,
  payload: { request }
});

export const firstUpdateProfileInfoSuccess = () => ({
  type: FIRST_UPDATE_PROFILE_INFO_SUCCESS,
  payload: { }
});

export const firstUpdateProfileInfoFailure = (error: string) => ({
  type: FIRST_UPDATE_PROFILE_INFO_FAILURE,
  payload: { error }
});