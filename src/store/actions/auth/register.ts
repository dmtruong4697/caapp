export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const RESET_REGISTER_STATE = 'RESET_REGISTER_STATE';

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
  payload: {
    email: string;
    password: string;
    [key: string]: any;
  };
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetRegisterStateAction {
    type: typeof RESET_REGISTER_STATE;
    payload: {
      [key: string]: any;
    };
  }

export type RegisterActionTypes = RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction | ResetRegisterStateAction;

export const registerRequest = (email: string, password: string) => ({
  type: REGISTER_REQUEST,
  payload: { email, password }
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
  payload: { }
});

export const registerFailure = (error: string) => ({
  type: REGISTER_FAILURE,
  payload: { error }
});

export const resetRegisterState = () => ({
    type: RESET_REGISTER_STATE,
    payload: { }
});