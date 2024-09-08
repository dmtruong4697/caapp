export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
    deviceToken: string;
  };
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    token: string;
    user: any;
  };
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {
    error: string;
  };
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction;

export const loginRequest = (email: string, password: string, deviceToken: string): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: { email, password, deviceToken }
});

export const loginSuccess = (token: string, user: any): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { token, user }
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: { error }
});