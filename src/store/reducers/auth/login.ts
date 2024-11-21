import { ProfileInfo } from "../../../models/profile/profile-info";
import { createTwoButtonAlert } from "../../../utils/alert";
import { AuthActionTypes, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../../actions/auth/login";

interface AuthState {
  token: string | null;
  error: any | null;
}

const initialState: AuthState = {
  token: null,
  error: null,
};

const loginReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case LOGIN_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        token: null,
      };
    default:
      return state;
  }
};

export default loginReducer;