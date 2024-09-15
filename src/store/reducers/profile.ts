import { ProfileInfo } from "../../models/profile/profile-info";
import { createTwoButtonAlert } from "../../utils/alert";
import { GET_PROFILE_INFO_FAILURE, GET_PROFILE_INFO_REQUEST, GET_PROFILE_INFO_SUCCESS, ProfileActionTypes } from "../actions/profile";

interface ProfileState {
  profile: ProfileInfo | null;
  error: any | null;
}

const initialState: ProfileState = {
  profile: null,
  error: null,
};

const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile
      };
    case GET_PROFILE_INFO_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default profileReducer;