import { createTwoButtonAlert } from "../../../utils/alert";
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, ForgotPasswordActionTypes, RESET_FORGOT_PASSWORD_STATE } from "../../actions/auth/forgot-password";
import { FORGOT_PASSWORD_CHANGE_PASSWORD_FAILURE, FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST, FORGOT_PASSWORD_CHANGE_PASSWORD_SUCCESS, ForgotPasswordChangePasswordActionTypes, RESET_FORGOT_PASSWORD_CHANGE_PASSWORD_STATE } from "../../actions/auth/forgot-password-change-password";

interface ForgotPasswordChangePasswordState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: ForgotPasswordChangePasswordState = {
  success_flg: false,
  error: null,
};

const forgotPasswordChangePasswordReducer = (state = initialState, action: ForgotPasswordChangePasswordActionTypes): ForgotPasswordChangePasswordState => {
  switch (action.type) {
    case FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case FORGOT_PASSWORD_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case FORGOT_PASSWORD_CHANGE_PASSWORD_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    case RESET_FORGOT_PASSWORD_CHANGE_PASSWORD_STATE:
        return {
            ...state,
            error: false,
            success_flg: false,
        };
    default:
      return state;
  }
};

export default forgotPasswordChangePasswordReducer;