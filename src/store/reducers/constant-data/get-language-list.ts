import { GetLanguageListResponse, GetLanguageListResponseItem } from "../../../models/constant-data-response/get-language-list-data-response";
import { createTwoButtonAlert } from "../../../utils/alert";
import { GET_LANGUAGE_LIST_FAILURE, GET_LANGUAGE_LIST_REQUEST, GET_LANGUAGE_LIST_SUCCESS, GetLanguageListActionTypes, RESET_LANGUAGE_LIST_STATE } from "../../actions/constant-data/get-language-list";

interface GetLanguageListState {
    languages: GetLanguageListResponseItem[],
    success_flg: boolean,
    error: any | null,
}

const initialState: GetLanguageListState = {
    languages: [],
    success_flg: false,
    error: null,
};

const getLanguageListReducer = (state = initialState, action: GetLanguageListActionTypes): GetLanguageListState => {
  switch (action.type) {
    case GET_LANGUAGE_LIST_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_LANGUAGE_LIST_SUCCESS:
      return {
        ...state,
        success_flg: true,
        languages: action.payload.languages,
        error: null,
      };
    case GET_LANGUAGE_LIST_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        success_flg: false,
        error: action.payload.error,
      };
    case RESET_LANGUAGE_LIST_STATE:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    default:
      return state;
  }
};

export default getLanguageListReducer;