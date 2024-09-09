import { AuthActionTypes, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/auth";

interface AuthState {
  token: string | null;
  user: any | null;
  error: any | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;