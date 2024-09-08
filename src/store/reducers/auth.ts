import { AuthActionTypes, LOGIN_SUCCESS } from "../actions/auth";

interface AuthState {
  token: string | null;
  user: any | null;
}

const initialState: AuthState = {
  token: null,
  user: null
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user
      };
    default:
      return state;
  }
};

export default authReducer;