import { createTwoButtonAlert } from "../../../utils/alert";
import { RESEND_CODE_FAILURE, RESEND_CODE_REQUEST, RESEND_CODE_SUCCESS, ResendCodeActionTypes } from "../../actions/auth/resend-code";

interface ResendCodeState {
    success_flg: boolean | null;
  error: any | null;
}

const initialState: ResendCodeState = {
    success_flg: false,
  error: null,
};

const resendCodeReducer = (state = initialState, action: ResendCodeActionTypes): ResendCodeState => {
  switch (action.type) {
    case RESEND_CODE_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case RESEND_CODE_SUCCESS:
      createTwoButtonAlert("resend validate code success", "resend validate code success")
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case RESEND_CODE_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        success_flg: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default resendCodeReducer;