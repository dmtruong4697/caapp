import { ProfileInfo } from "../../../models/profile/profile-info";
import { createTwoButtonAlert } from "../../../utils/alert";
import { VALIDATE_EMAIL_FAILURE, VALIDATE_EMAIL_REQUEST, VALIDATE_EMAIL_SUCCESS, ValidateEmailActionTypes } from "../../actions/auth/validate-email";
import { PROFILE_INFO_FAILURE, PROFILE_INFO_REQUEST, PROFILE_INFO_SUCCESS, ProfileInfoActionTypes, RESET_PROFILE_INFO_STATE } from "../../actions/profile/profile-info";

interface ProfileInfoState {
    profile: ProfileInfo | null;
  success_flg: boolean | null;
  error: any | null;
}

const initialState: ProfileInfoState = {
    profile: null,
  success_flg: false,
  error: null,
};

const profileInfoReducer = (state = initialState, action: ProfileInfoActionTypes): ProfileInfoState => {
  switch (action.type) {
    case PROFILE_INFO_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case PROFILE_INFO_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        success_flg: true,
        error: null,
      };
    case PROFILE_INFO_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    case RESET_PROFILE_INFO_STATE:
    return {
        ...state,
        error: null,
        success_flg: false,
    };
    default:
      return state;
  }
};

export default profileInfoReducer;