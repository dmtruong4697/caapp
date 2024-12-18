export const RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST = 'RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST';
export const RESEND_FORGOT_PASSWORD_VALIDATE_CODE_SUCCESS = 'RESEND_FORGOT_PASSWORD_VALIDATE_CODE_SUCCESS';
export const RESEND_FORGOT_PASSWORD_VALIDATE_CODE_FAILURE = 'RESEND_FORGOT_PASSWORD_VALIDATE_CODE_FAILURE';
export const RESET_RESEND_FORGOT_PASSWORD_VALIDATE_CODE_STATE = 'RESET_RESEND_FORGOT_PASSWORD_VALIDATE_CODE_STATE';
interface ResendForgotPasswordValidateCodeRequestAction {
  type: typeof RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST;
  payload: {
    email: string;
    [key: string]: any;
  };
}

interface ResendForgotPasswordValidateCodeSuccessAction {
  type: typeof RESEND_FORGOT_PASSWORD_VALIDATE_CODE_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface ResendForgotPasswordValidateCodeFailureAction {
  type: typeof RESEND_FORGOT_PASSWORD_VALIDATE_CODE_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetResendForgotPasswordValidateCodeStateAction {
    type: typeof RESET_RESEND_FORGOT_PASSWORD_VALIDATE_CODE_STATE;
    payload: {
      [key: string]: any;
    };
}

export type ResendForgotPasswordValidateCodeActionTypes = ResendForgotPasswordValidateCodeRequestAction | ResendForgotPasswordValidateCodeSuccessAction | ResendForgotPasswordValidateCodeFailureAction | ResetResendForgotPasswordValidateCodeStateAction;

export const resendForgotPasswordValidateCodeRequest = (email: string) => ({
  type: RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST,
  payload: { email }
});

export const resendForgotPasswordValidateCodeSuccess = () => ({
  type: RESEND_FORGOT_PASSWORD_VALIDATE_CODE_SUCCESS,
  payload: { }
});

export const resendForgotPasswordValidateCodeFailure = (error: string) => ({
  type: RESEND_FORGOT_PASSWORD_VALIDATE_CODE_FAILURE,
  payload: { error }
});

export const resetResendForgotPasswordValidateCodeState = () => ({
    type: RESET_RESEND_FORGOT_PASSWORD_VALIDATE_CODE_STATE,
    payload: { }
});