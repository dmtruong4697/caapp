import { createTwoButtonAlert } from "../../../utils/alert";
import { VALIDATE_EMAIL_FAILURE, VALIDATE_EMAIL_REQUEST, VALIDATE_EMAIL_SUCCESS, ValidateEmailActionTypes } from "../../actions/auth/validate-email";
import { RESET_UPDATE_PROFILE_INFO_STATE, UPDATE_PROFILE_INFO_FAILURE, UPDATE_PROFILE_INFO_REQUEST, UPDATE_PROFILE_INFO_SUCCESS, UpdateProfileInfoActionTypes } from "../../actions/profile/update-profile-info";

interface UpdateProfileInfoState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: UpdateProfileInfoState = {
  success_flg: false,
  error: null,
};

const updateProfileInfoReducer = (state = initialState, action: UpdateProfileInfoActionTypes): UpdateProfileInfoState => {
  switch (action.type) {
    case UPDATE_PROFILE_INFO_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case UPDATE_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case UPDATE_PROFILE_INFO_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    case RESET_UPDATE_PROFILE_INFO_STATE:
      return {
        ...state,
        error: null,
        success_flg: false,
      };
    default:
      return state;
  }
};

export default updateProfileInfoReducer;