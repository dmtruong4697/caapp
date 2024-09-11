export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
    deviceToken: string;
    [key: string]: any;
  };
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    [key: string]: any;
  };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
    [key: string]: any;
  };
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

export const loginRequest = (email: string, password: string, deviceToken: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password, deviceToken }
});

export const loginSuccess = (token: string) => ({
  type: LOGIN_SUCCESS,
  payload: { token }
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: { error }
});