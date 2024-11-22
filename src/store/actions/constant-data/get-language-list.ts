import { GetLanguageListResponse } from "../../../models/constant-data-response/get-language-list-data-response";

export const GET_LANGUAGE_LIST_REQUEST = 'GET_LANGUAGE_LIST_REQUEST';
export const GET_LANGUAGE_LIST_SUCCESS = 'GET_LANGUAGE_LIST_SUCCESS';
export const GET_LANGUAGE_LIST_FAILURE = 'GET_LANGUAGE_LIST_FAILURE';

interface GetLanguageListRequestAction {
  type: typeof GET_LANGUAGE_LIST_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface GetLanguageListSuccessAction {
  type: typeof GET_LANGUAGE_LIST_SUCCESS;
  payload: {
    languages: GetLanguageListResponse;
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

export type GetLanguageListActionTypes = GetLanguageListRequestAction | GetLanguageListSuccessAction | GetLanguageListFailureAction;

export const getLanguageListRequest = () => ({
  type: GET_LANGUAGE_LIST_REQUEST,
  payload: { }
});

export const getLanguageListSuccess = (languages: GetLanguageListResponse) => ({
  type: GET_LANGUAGE_LIST_SUCCESS,
  payload: { languages }
});

export const getLanguageListFailure = (error: string) => ({
  type: GET_LANGUAGE_LIST_FAILURE,
  payload: { error }
});