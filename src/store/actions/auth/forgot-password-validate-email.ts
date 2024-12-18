export const FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST = 'FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST';
export const FORGOT_PASSWORD_VALIDATE_EMAIL_SUCCESS = 'FORGOT_PASSWORD_VALIDATE_EMAIL_SUCCESS';
export const FORGOT_PASSWORD_VALIDATE_EMAIL_FAILURE = 'FORGOT_PASSWORD_VALIDATE_EMAIL_FAILURE';
export const RESET_FORGOT_PASSWORD_VALIDATE_EMAIL_STATE = 'RESET_FORGOT_PASSWORD_VALIDATE_EMAIL_STATE';
interface ForgotPasswordValidateEmailRequestAction {
  type: typeof FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST;
  payload: {
    email: string;
    validateCode: string;
    [key: string]: any;
  };
}

interface ForgotPasswordValidateEmailSuccessAction {
  type: typeof FORGOT_PASSWORD_VALIDATE_EMAIL_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface ForgotPasswordValidateEmailFailureAction {
  type: typeof FORGOT_PASSWORD_VALIDATE_EMAIL_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetForgotPasswordValidateEmailSttateAction {
    type: typeof RESET_FORGOT_PASSWORD_VALIDATE_EMAIL_STATE;
    payload: {
      [key: string]: any;
    };
}

export type ForgotPasswordValidateEmailActionTypes = ForgotPasswordValidateEmailRequestAction | ForgotPasswordValidateEmailSuccessAction | ForgotPasswordValidateEmailFailureAction | ResetForgotPasswordValidateEmailSttateAction;

export const forgotPasswordValidateEmailRequest = (email: string, validateCode: string) => ({
  type: FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST,
  payload: { email, validateCode }
});

export const forgotPasswordValidateEmailSuccess = () => ({
  type: FORGOT_PASSWORD_VALIDATE_EMAIL_SUCCESS,
  payload: { }
});

export const forgotPasswordValidateEmailFailure = (error: string) => ({
  type: FORGOT_PASSWORD_VALIDATE_EMAIL_FAILURE,
  payload: { error }
});

export const resetForgotPasswordValidateEmailState = () => ({
    type: RESET_FORGOT_PASSWORD_VALIDATE_EMAIL_STATE,
    payload: { }
});