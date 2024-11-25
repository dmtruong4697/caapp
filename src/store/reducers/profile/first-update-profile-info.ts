import { createTwoButtonAlert } from "../../../utils/alert";
import { CHECK_DUPLICATEHASHTAG_NAME_FAILURE, CHECK_DUPLICATEHASHTAG_NAME_REQUEST, CHECK_DUPLICATEHASHTAG_NAME_SUCCESS, CheckDuplicateHashtagNameActionTypes } from "../../actions/profile/check-duplicate-hashtag-name";
import { FIRST_UPDATE_PROFILE_INFO_FAILURE, FIRST_UPDATE_PROFILE_INFO_REQUEST, FIRST_UPDATE_PROFILE_INFO_SUCCESS, FirstUpdateProfileInfoActionTypes } from "../../actions/profile/first-update-profile-info";

interface FirstUpdateProfileInfoState {
    success_flg: boolean | null,
    error: any | null,
}

const initialState: FirstUpdateProfileInfoState = {
    success_flg: false,
    error: null,
};

const firstUpdateProfileInfoReducer = (state = initialState, action: FirstUpdateProfileInfoActionTypes): FirstUpdateProfileInfoState => {
  switch (action.type) {
    case FIRST_UPDATE_PROFILE_INFO_REQUEST:
      return {
        ...state,
        error: null,
      };
    case FIRST_UPDATE_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case FIRST_UPDATE_PROFILE_INFO_FAILURE:
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

export default firstUpdateProfileInfoReducer;