export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const RESET_LOGOUT_STATE = 'RESET_LOGOUT_STATE';

interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
  payload: {
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

interface ResetLogoutStateAction {
  type: typeof RESET_LOGOUT_STATE;
  payload: {
    [key: string]: any;
  };
}

export type LogoutActionTypes = LogoutRequestAction | LogoutSuccessAction | LogoutFailureAction | ResetLogoutStateAction;

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
  payload: { }
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
  payload: { }
});

export const logoutFailure = (error: string) => ({
  type: LOGOUT_FAILURE,
  payload: { error }
});

export const resetLogoutState = () => ({
  type: RESET_LOGOUT_STATE,
  payload: { }
});