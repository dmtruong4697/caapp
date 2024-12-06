import { UserInfo } from "../../../models/user-info/user-info";

export const SEARCH_BY_HASHTAG_NAME_REQUEST = 'SEARCH_BY_HASHTAG_NAME_REQUEST';
export const SEARCH_BY_HASHTAG_NAME_SUCCESS = 'SEARCH_BY_HASHTAG_NAME_SUCCESS';
export const SEARCH_BY_HASHTAG_NAME_FAILURE = 'SEARCH_BY_HASHTAG_NAME_FAILURE';
export const RESET_SEARCH_BY_HASHTAG_NAME_STATE = 'RESET_SEARCH_BY_HASHTAG_NAME_STATE'

interface SearchByHashtagNameRequestAction {
  type: typeof SEARCH_BY_HASHTAG_NAME_REQUEST;
  payload: {
    hashtagName: string;
    [key: string]: any;
  };
}

interface SearchByHashtagNameSuccessAction {
  type: typeof SEARCH_BY_HASHTAG_NAME_SUCCESS;
  payload: {
    user: UserInfo,
    isFound: boolean,
    [key: string]: any;
  };
}

interface SearchByHashtagNameFailureAction {
  type: typeof SEARCH_BY_HASHTAG_NAME_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetSearchByHashtagNameStateAction {
  type: typeof RESET_SEARCH_BY_HASHTAG_NAME_STATE;
  payload: {
    [key: string]: any;
  };
}

export type SearchByHashtagNameActionTypes = SearchByHashtagNameRequestAction | SearchByHashtagNameSuccessAction | SearchByHashtagNameFailureAction | ResetSearchByHashtagNameStateAction;

export const searchByHashtagNameRequest = (hashtagName: string) => ({
  type: SEARCH_BY_HASHTAG_NAME_REQUEST,
  payload: { hashtagName }
});

export const searchByHashtagNameSuccess = (user: UserInfo, isFound: boolean) => ({
  type: SEARCH_BY_HASHTAG_NAME_SUCCESS,
  payload: { user, isFound }
});

export const searchByHashtagNameFailure = (error: string) => ({
  type: SEARCH_BY_HASHTAG_NAME_FAILURE,
  payload: { error }
});

export const resetSearchByHashtagNameState = () => ({
  type: RESET_SEARCH_BY_HASHTAG_NAME_STATE,
  payload: {}
});