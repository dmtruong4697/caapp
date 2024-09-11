import { ProfileInfo } from "../../models/profile/profile-info";
import { AuthActionTypes, LOGIN_FAILURE, LOGIN_SUCCESS } from "../actions/auth";

interface AuthState {
  token: string | null;
  error: any | null;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;