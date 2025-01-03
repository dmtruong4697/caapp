import { UpdateProfileInfoRequest } from "../../../models/profile-request/update-profile-info-request";

export const UPDATE_PROFILE_INFO_REQUEST = 'UPDATE_PROFILE_INFO_REQUEST';
export const UPDATE_PROFILE_INFO_SUCCESS = 'UPDATE_PROFILE_INFO_SUCCESS';
export const UPDATE_PROFILE_INFO_FAILURE = 'UPDATE_PROFILE_INFO_FAILURE';
export const RESET_UPDATE_PROFILE_INFO_STATE = 'RESET_UPDATE_PROFILE_INFO_STATE';

interface UpdateProfileInfoRequestAction {
  type: typeof UPDATE_PROFILE_INFO_REQUEST;
  payload: {
    updateProfile: UpdateProfileInfoRequest;
    [key: string]: any;
  };
}

interface UpdateProfileInfoSuccessAction {
  type: typeof UPDATE_PROFILE_INFO_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface UpdateProfileInfoFailureAction {
  type: typeof UPDATE_PROFILE_INFO_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetUpdateProfileInfoStateAction {
  type: typeof RESET_UPDATE_PROFILE_INFO_STATE;
  payload: {
    [key: string]: any;
  };
}

export type UpdateProfileInfoActionTypes = UpdateProfileInfoRequestAction | UpdateProfileInfoSuccessAction | UpdateProfileInfoFailureAction | ResetUpdateProfileInfoStateAction;

export const updateProfileInfoRequest = (updateProfile: UpdateProfileInfoRequest) => ({
  type: UPDATE_PROFILE_INFO_REQUEST,
  payload: { updateProfile }
});

export const updateProfileInfoSuccess = () => ({
  type: UPDATE_PROFILE_INFO_SUCCESS,
  payload: { }
});

export const updateProfileInfoFailure = (error: string) => ({
  type: UPDATE_PROFILE_INFO_FAILURE,
  payload: { error }
});

export const resetUpdateProfileInfoState = () => ({
  type: RESET_UPDATE_PROFILE_INFO_STATE,
  payload: { }
});