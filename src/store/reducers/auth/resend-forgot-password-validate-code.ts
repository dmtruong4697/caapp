import { createTwoButtonAlert } from "../../../utils/alert";
import { RESEND_FORGOT_PASSWORD_VALIDATE_CODE_FAILURE, RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST, RESEND_FORGOT_PASSWORD_VALIDATE_CODE_SUCCESS, ResendForgotPasswordValidateCodeActionTypes, RESET_RESEND_FORGOT_PASSWORD_VALIDATE_CODE_STATE } from "../../actions/auth/resend-forgot-password-validate-code";

interface ResendForgotPasswordValidateCodeState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: ResendForgotPasswordValidateCodeState = {
  success_flg: false,
  error: null,
};

const resendForgotPasswordValidateCodeReducer = (state = initialState, action: ResendForgotPasswordValidateCodeActionTypes): ResendForgotPasswordValidateCodeState => {
  switch (action.type) {
    case RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case RESEND_FORGOT_PASSWORD_VALIDATE_CODE_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case RESEND_FORGOT_PASSWORD_VALIDATE_CODE_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    case RESET_RESEND_FORGOT_PASSWORD_VALIDATE_CODE_STATE:
        return {
            ...state,
            error: false,
            success_flg: false,
        };
    default:
      return state;
  }
};

export default resendForgotPasswordValidateCodeReducer;