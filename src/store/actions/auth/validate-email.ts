export const VALIDATE_EMAIL_REQUEST = 'VALIDATE_EMAIL_REQUEST';
export const VALIDATE_EMAIL_SUCCESS = 'VALIDATE_EMAIL_SUCCESS';
export const VALIDATE_EMAIL_FAILURE = 'VALIDATE_EMAIL_FAILURE';

interface ValidateEmailRequestAction {
  type: typeof VALIDATE_EMAIL_REQUEST;
  payload: {
    email: string;
    password: string;
    validateCode: string;
    [key: string]: any;
  };
}

interface ValidateEmailSuccessAction {
  type: typeof VALIDATE_EMAIL_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface ValidateEmailFailureAction {
  type: typeof VALIDATE_EMAIL_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type ValidateEmailActionTypes = ValidateEmailRequestAction | ValidateEmailSuccessAction | ValidateEmailFailureAction;

export const validateEmailRequest = (email: string, password: string, validateCode: string) => ({
  type: VALIDATE_EMAIL_REQUEST,
  payload: { email, password, validateCode }
});

export const validateEmailSuccess = () => ({
  type: VALIDATE_EMAIL_SUCCESS,
  payload: { }
});

export const validateEmailFailure = (error: string) => ({
  type: VALIDATE_EMAIL_FAILURE,
  payload: { error }
});