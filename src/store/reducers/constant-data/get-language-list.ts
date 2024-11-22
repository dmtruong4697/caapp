import { GetLanguageListResponse } from "../../../models/constant-data-response/get-language-list-data-response";
import { createTwoButtonAlert } from "../../../utils/alert";
import { GET_LANGUAGE_LIST_FAILURE, GET_LANGUAGE_LIST_REQUEST, GET_LANGUAGE_LIST_SUCCESS, GetLanguageListActionTypes } from "../../actions/constant-data/get-language-list";

interface GetLanguageListState {
    languages: GetLanguageListResponse | null,
    error: any | null,
}

const initialState: GetLanguageListState = {
    languages: {languages: []},
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
        languages: action.payload.languages,
        error: null,
      };
    case GET_LANGUAGE_LIST_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default getLanguageListReducer;