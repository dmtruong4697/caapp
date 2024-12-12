import { ProfileInfo } from "../../../models/profile/profile-info";
import { createTwoButtonAlert } from "../../../utils/alert";
import { GET_PROFILE_INFO_FAILURE, GET_PROFILE_INFO_REQUEST, GET_PROFILE_INFO_SUCCESS, ProfileActionTypes, RESET_PROFILE_INFO } from "../../actions/profile/profile";

interface ProfileState {
  profile: ProfileInfo | null;
  success_flg: boolean;
  error: any | null;
}

const initialState: ProfileState = {
  profile: null,
  success_flg: false,
  error: null,
};

const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case GET_PROFILE_INFO_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };

    case GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
        profile: action.payload.profile,
      };

    case GET_PROFILE_INFO_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };

    case RESET_PROFILE_INFO:
      return {
        ...state,
        error: null,
        profile: null,
        success_flg: false,
      };
    default:
      return state;
  }
};

export default profileReducer;