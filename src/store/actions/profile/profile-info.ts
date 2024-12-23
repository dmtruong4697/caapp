import { ProfileInfo } from "../../../models/profile/profile-info";

export const PROFILE_INFO_REQUEST = 'PROFILE_INFO_REQUEST';
export const PROFILE_INFO_SUCCESS = 'PROFILE_INFO_SUCCESS';
export const PROFILE_INFO_FAILURE = 'PROFILE_INFO_FAILURE';
export const RESET_PROFILE_INFO_STATE = 'RESET_PROFILE_INFO_STATE';

interface ProfileInfoRequestAction {
  type: typeof PROFILE_INFO_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface ProfileInfoSuccessAction {
  type: typeof PROFILE_INFO_SUCCESS;
  payload: {
    profile: ProfileInfo;
    [key: string]: any;
  };
}

interface ProfileInfoFailureAction {
  type: typeof PROFILE_INFO_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetProfileInfoStateAction {
    type: typeof RESET_PROFILE_INFO_STATE;
    payload: {
      [key: string]: any;
    };
}

export type ProfileInfoActionTypes = ProfileInfoRequestAction | ProfileInfoSuccessAction | ProfileInfoFailureAction | ResetProfileInfoStateAction;

export const profileInfoRequest = () => ({
  type: PROFILE_INFO_REQUEST,
  payload: {}
});

export const profileInfoSuccess = (profile: ProfileInfo) => ({
  type: PROFILE_INFO_SUCCESS,
  payload: { profile }
});

export const profileInfoFailure = (error: string) => ({
  type: PROFILE_INFO_FAILURE,
  payload: { error }
});

export const resetProfileInfoState = () => ({
    type: RESET_PROFILE_INFO_STATE,
    payload: { }
});