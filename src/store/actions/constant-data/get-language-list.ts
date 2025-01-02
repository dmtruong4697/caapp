import { GetLanguageListResponse, GetLanguageListResponseItem } from "../../../models/constant-data-response/get-language-list-data-response";

export const GET_LANGUAGE_LIST_REQUEST = 'GET_LANGUAGE_LIST_REQUEST';
export const GET_LANGUAGE_LIST_SUCCESS = 'GET_LANGUAGE_LIST_SUCCESS';
export const GET_LANGUAGE_LIST_FAILURE = 'GET_LANGUAGE_LIST_FAILURE';
export const RESET_LANGUAGE_LIST_STATE = 'RESET_LANGUAGE_LIST_STATE';

interface GetLanguageListRequestAction {
  type: typeof GET_LANGUAGE_LIST_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface GetLanguageListSuccessAction {
  type: typeof GET_LANGUAGE_LIST_SUCCESS;
  payload: {
    languages: GetLanguageListResponseItem[];
    [key: string]: any;
  };
}

interface GetLanguageListFailureAction {
  type: typeof GET_LANGUAGE_LIST_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetLanguageListStateAction {
  type: typeof RESET_LANGUAGE_LIST_STATE;
  payload: {
    [key: string]: any;
  };
}

export type GetLanguageListActionTypes = GetLanguageListRequestAction | GetLanguageListSuccessAction | GetLanguageListFailureAction | ResetLanguageListStateAction;

export const getLanguageListRequest = () => ({
  type: GET_LANGUAGE_LIST_REQUEST,
  payload: { }
});

export const getLanguageListSuccess = (languages: GetLanguageListResponseItem[]) => ({
  type: GET_LANGUAGE_LIST_SUCCESS,
  payload: { languages }
});

export const getLanguageListFailure = (error: string) => ({
  type: GET_LANGUAGE_LIST_FAILURE,
  payload: { error }
});

export const resetLanguageListState = () => ({
  type: RESET_LANGUAGE_LIST_STATE,
  payload: { }
});