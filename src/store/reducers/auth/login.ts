import { ProfileInfo } from "../../../models/profile/profile-info";
import { createTwoButtonAlert } from "../../../utils/alert";
import { AuthActionTypes, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, RESET_LOGIN_STATE } from "../../actions/auth/login";

interface AuthState {
  token: string | null;
  success_flg: boolean;
  error: any | null;
}

const initialState: AuthState = {
  token: null,
  success_flg: false,
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
        success_flg: true,
        error: null,
      };
    case LOGIN_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        token: null,
      };
    case RESET_LOGIN_STATE:
      return {
        ...state,
        error: null,
        success_flg: false,
      };
    default:
      return state;
  }
};

export default loginReducer;