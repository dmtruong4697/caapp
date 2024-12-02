import { createTwoButtonAlert } from "../../../utils/alert";
import { VALIDATE_EMAIL_FAILURE, VALIDATE_EMAIL_REQUEST, VALIDATE_EMAIL_SUCCESS, ValidateEmailActionTypes } from "../../actions/auth/validate-email";

interface ValidateEmailState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: ValidateEmailState = {
  success_flg: false,
  error: null,
};

const validateEmailReducer = (state = initialState, action: ValidateEmailActionTypes): ValidateEmailState => {
  switch (action.type) {
    case VALIDATE_EMAIL_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case VALIDATE_EMAIL_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case VALIDATE_EMAIL_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    default:
      return state;
  }
};

export default validateEmailReducer;