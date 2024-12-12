export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
  payload: {
    email: string;
    password: string;
    [key: string]: any;
  };
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type LogoutActionTypes = LogoutRequestAction | LogoutSuccessAction | LogoutFailureAction;

export const logoutRequest = (email: string, password: string) => ({
  type: LOGOUT_REQUEST,
  payload: { email, password }
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: { }
});

export const logoutFailure = (error: string) => ({
  type: LOGOUT_FAILURE,
  payload: { error }
});