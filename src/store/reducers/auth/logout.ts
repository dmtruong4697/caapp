import { createTwoButtonAlert } from "../../../utils/alert";
import { LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LogoutActionTypes, RESET_LOGOUT_STATE } from "../../actions/auth/logout";

interface LogoutState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: LogoutState = {
  success_flg: false,
  error: null,
};

const logoutReducer = (state = initialState, action: LogoutActionTypes): LogoutState => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        error: null,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };

    case LOGOUT_FAILURE:
      console.log("LOGOUT_FAILURE");
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };

    case RESET_LOGOUT_STATE:
      return {
        ...state,
        error: null,
        success_flg: false,
      };

    default:
      return state;
  }
};

export default logoutReducer;