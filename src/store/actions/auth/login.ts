export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const RESET_LOGIN_STATE = 'RESET_LOGIN_STATE';
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
    error: any;
    [key: string]: any;
  };
}

interface ResetLoginStateAction {
  type: typeof RESET_LOGIN_STATE;
  payload: {
    [key: string]: any;
  };
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction |ResetLoginStateAction;

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

export const resetLoginState = () => ({
  type: RESET_LOGIN_STATE,
  payload: {}
})