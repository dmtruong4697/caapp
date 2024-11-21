export const RESEND_CODE_REQUEST = 'RESEND_CODE_REQUEST';
export const RESEND_CODE_SUCCESS = 'RESEND_CODE_SUCCESS';
export const RESEND_CODE_FAILURE = 'RESEND_CODE_FAILURE';

interface ResendCodeRequestAction {
  type: typeof RESEND_CODE_REQUEST;
  payload: {
    email: string;
    [key: string]: any;
  };
}

interface ResendCodeSuccessAction {
  type: typeof RESEND_CODE_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface ResendCodeFailureAction {
  type: typeof RESEND_CODE_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type ResendCodeActionTypes = ResendCodeRequestAction | ResendCodeSuccessAction | ResendCodeFailureAction;

export const resendCodeRequest = (email: string) => ({
  type: RESEND_CODE_REQUEST,
  payload: { email }
});

export const resendCodeSuccess = () => ({
  type: RESEND_CODE_SUCCESS,
  payload: { }
});

export const resendCodeFailure = (error: string) => ({
  type: RESEND_CODE_FAILURE,
  payload: { error }
});