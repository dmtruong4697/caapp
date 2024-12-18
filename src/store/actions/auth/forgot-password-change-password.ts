export const FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST = 'FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_CHANGE_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_CHANGE_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_CHANGE_PASSWORD_FAILURE = 'FORGOT_PASSWORD_CHANGE_PASSWORD_FAILURE';
export const RESET_FORGOT_PASSWORD_CHANGE_PASSWORD_STATE = 'RESET_FORGOT_PASSWORD_CHANGE_PASSWORD_STATE';
interface ForgotPasswordChangePasswordRequestAction {
  type: typeof FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST;
  payload: {
    email: string;
    password: string;
    [key: string]: any;
  };
}

interface ForgotPasswordChangePasswordSuccessAction {
  type: typeof FORGOT_PASSWORD_CHANGE_PASSWORD_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface ForgotPasswordChangePasswordFailureAction {
  type: typeof FORGOT_PASSWORD_CHANGE_PASSWORD_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetForgotPasswordChangePasswordSttateAction {
    type: typeof RESET_FORGOT_PASSWORD_CHANGE_PASSWORD_STATE;
    payload: {
      [key: string]: any;
    };
}

export type ForgotPasswordChangePasswordActionTypes = ForgotPasswordChangePasswordRequestAction | ForgotPasswordChangePasswordSuccessAction | ForgotPasswordChangePasswordFailureAction | ResetForgotPasswordChangePasswordSttateAction;

export const forgotPasswordChangePasswordRequest = (email: string, password: string) => ({
  type: FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST,
  payload: { email, password }
});

export const forgotPasswordChangePasswordSuccess = () => ({
  type: FORGOT_PASSWORD_CHANGE_PASSWORD_SUCCESS,
  payload: { }
});

export const forgotPasswordChangePasswordFailure = (error: string) => ({
  type: FORGOT_PASSWORD_CHANGE_PASSWORD_FAILURE,
  payload: { error }
});

export const resetForgotPasswordChangePasswordState = () => ({
    type: RESET_FORGOT_PASSWORD_CHANGE_PASSWORD_STATE,
    payload: { }
});