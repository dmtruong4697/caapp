import { createTwoButtonAlert } from "../../../utils/alert";
import { FORGOT_PASSWORD_FAILURE, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, ForgotPasswordActionTypes, RESET_FORGOT_PASSWORD_STATE } from "../../actions/auth/forgot-password";
import { FORGOT_PASSWORD_VALIDATE_EMAIL_FAILURE, FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST, FORGOT_PASSWORD_VALIDATE_EMAIL_SUCCESS, ForgotPasswordValidateEmailActionTypes, RESET_FORGOT_PASSWORD_VALIDATE_EMAIL_STATE } from "../../actions/auth/forgot-password-validate-email";

interface ForgotPasswordValidateEmailState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: ForgotPasswordValidateEmailState = {
  success_flg: false,
  error: null,
};

const forgotPasswordValidateEmailReducer = (state = initialState, action: ForgotPasswordValidateEmailActionTypes): ForgotPasswordValidateEmailState => {
  switch (action.type) {
    case FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case FORGOT_PASSWORD_VALIDATE_EMAIL_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case FORGOT_PASSWORD_VALIDATE_EMAIL_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    case RESET_FORGOT_PASSWORD_VALIDATE_EMAIL_STATE:
        return {
            ...state,
            error: false,
            success_flg: false,
        };
    default:
      return state;
  }
};

export default forgotPasswordValidateEmailReducer;