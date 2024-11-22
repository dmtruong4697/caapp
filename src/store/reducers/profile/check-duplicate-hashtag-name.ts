import { createTwoButtonAlert } from "../../../utils/alert";
import { VALIDATE_EMAIL_FAILURE, VALIDATE_EMAIL_REQUEST, VALIDATE_EMAIL_SUCCESS, ValidateEmailActionTypes } from "../../actions/auth/validate-email";
import { CHECK_DUPLICATEHASHTAG_NAME_FAILURE, CHECK_DUPLICATEHASHTAG_NAME_REQUEST, CHECK_DUPLICATEHASHTAG_NAME_SUCCESS, CheckDuplicateHashtagNameActionTypes } from "../../actions/profile/check-duplicate-hashtag-name";

interface CheckDuplicateHashtagNameState {
    isAvailableHashtagName: boolean | null,
    error: any | null,
}

const initialState: CheckDuplicateHashtagNameState = {
    isAvailableHashtagName: null,
    error: null,
};

const checkDuplicateHashtagNameReducer = (state = initialState, action: CheckDuplicateHashtagNameActionTypes): CheckDuplicateHashtagNameState => {
  switch (action.type) {
    case CHECK_DUPLICATEHASHTAG_NAME_REQUEST:
      return {
        ...state,
        isAvailableHashtagName: null,
        error: null,
      };
    case CHECK_DUPLICATEHASHTAG_NAME_SUCCESS:
      return {
        ...state,
        isAvailableHashtagName: action.payload.isAvailableHashtagName,
        error: null,
      };
    case CHECK_DUPLICATEHASHTAG_NAME_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        isAvailableHashtagName: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default checkDuplicateHashtagNameReducer;