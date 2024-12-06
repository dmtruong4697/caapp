import { UserInfo } from "../../../models/user-info/user-info";
import { createTwoButtonAlert } from "../../../utils/alert";
import { RESET_SEARCH_BY_HASHTAG_NAME_STATE, SEARCH_BY_HASHTAG_NAME_FAILURE, SEARCH_BY_HASHTAG_NAME_REQUEST, SEARCH_BY_HASHTAG_NAME_SUCCESS, SearchByHashtagNameActionTypes } from "../../actions/search/search-by-hashtag-name";

interface SearchByHashtagNameState {
    user: UserInfo | null,
    is_found: boolean | null,
    success_flg: boolean | null,
    error: any | null,
}

const initialState: SearchByHashtagNameState = {
    user: null,
    is_found: null,
    success_flg: false,
    error: null,
};

const searchByHashtagNameReducer = (state = initialState, action: SearchByHashtagNameActionTypes): SearchByHashtagNameState => {
  switch (action.type) {
    case SEARCH_BY_HASHTAG_NAME_REQUEST:
      return {
        ...state,
        is_found: null,
        success_flg: false,
        error: null,
      };
    case SEARCH_BY_HASHTAG_NAME_SUCCESS:
      return {
        ...state,
        is_found: action.payload.isFound,
        user: action.payload.user,
        success_flg: true,
        error: null,
      };
    case SEARCH_BY_HASHTAG_NAME_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };

    case RESET_SEARCH_BY_HASHTAG_NAME_STATE:
      return {
        ...state,
        error: null,
        success_flg: false,
        is_found: null,
        user: null,
      }
    default:
      return state;
  }
};

export default searchByHashtagNameReducer;