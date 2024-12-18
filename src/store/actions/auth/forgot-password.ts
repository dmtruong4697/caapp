export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const RESET_FORGOT_PASSWORD_STATE = 'RESET_FORGOT_PASSWORD_STATE';
interface ForgotPasswordRequestAction {
  type: typeof FORGOT_PASSWORD_REQUEST;
  payload: {
    email: string;
    [key: string]: any;
  };
}

interface ForgotPasswordSuccessAction {
  type: typeof FORGOT_PASSWORD_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface ForgotPasswordFailureAction {
  type: typeof FORGOT_PASSWORD_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetForgotPasswordSttateAction {
    type: typeof RESET_FORGOT_PASSWORD_STATE;
    payload: {
      [key: string]: any;
    };
}

export type ForgotPasswordActionTypes = ForgotPasswordRequestAction | ForgotPasswordSuccessAction | ForgotPasswordFailureAction | ResetForgotPasswordSttateAction;

export const forgotPasswordRequest = (email: string) => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: { email }
});

export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: { }
});

export const forgotPasswordFailure = (error: string) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload: { error }
});

export const resetForgotPasswordState = () => ({
    type: RESET_FORGOT_PASSWORD_STATE,
    payload: { }
});