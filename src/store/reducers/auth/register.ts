import { createTwoButtonAlert } from "../../../utils/alert";
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, RegisterActionTypes, RESET_REGISTER_STATE } from "../../actions/auth/register";

interface RegisterState {
    success_flg: boolean | null;
  error: any | null;
}

const initialState: RegisterState = {
    success_flg: false,
  error: null,
};

const registerReducer = (state = initialState, action: RegisterActionTypes): RegisterState => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case REGISTER_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
      };
    case RESET_REGISTER_STATE:
        return {
            ...state,
            success_flg: false,
            error: null,
        }
    default:
      return state;
  }
};

export default registerReducer;