export const CHECK_DUPLICATEHASHTAG_NAME_REQUEST = 'CHECK_DUPLICATEHASHTAG_NAME_REQUEST';
export const CHECK_DUPLICATEHASHTAG_NAME_SUCCESS = 'CHECK_DUPLICATEHASHTAG_NAME_SUCCESS';
export const CHECK_DUPLICATEHASHTAG_NAME_FAILURE = 'CHECK_DUPLICATEHASHTAG_NAME_FAILURE';
export const RESET_CHECK_DUPLICATEHASHTAG_NAME_RESULT = 'RESET_CHECK_DUPLICATEHASHTAG_NAME_RESULT';

interface CheckDuplicateHashtagNameRequestAction {
  type: typeof CHECK_DUPLICATEHASHTAG_NAME_REQUEST;
  payload: {
    hashtagName: string;
    [key: string]: any;
  };
}

interface CheckDuplicateHashtagNameSuccessAction {
  type: typeof CHECK_DUPLICATEHASHTAG_NAME_SUCCESS;
  payload: {
    isAvailableHashtagName: boolean;
    [key: string]: any;
  };
}

interface CheckDuplicateHashtagNameFailureAction {
  type: typeof CHECK_DUPLICATEHASHTAG_NAME_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetCheckDuplicateHashtagNameResultAction {
  type: typeof RESET_CHECK_DUPLICATEHASHTAG_NAME_RESULT;
  payload: {
    [key: string]: any;
  };
}

export type CheckDuplicateHashtagNameActionTypes = 
  CheckDuplicateHashtagNameRequestAction | 
  CheckDuplicateHashtagNameSuccessAction | 
  CheckDuplicateHashtagNameFailureAction |
  ResetCheckDuplicateHashtagNameResultAction;

export const checkDuplicateHashtagNameRequest = (hashtagName: string) => ({
  type: CHECK_DUPLICATEHASHTAG_NAME_REQUEST,
  payload: { hashtagName }
});

export const checkDuplicateHashtagNameSuccess = (isAvailableHashtagName: boolean) => ({
  type: CHECK_DUPLICATEHASHTAG_NAME_SUCCESS,
  payload: { isAvailableHashtagName }
});

export const checkDuplicateHashtagNameFailure = (error: string) => ({
  type: CHECK_DUPLICATEHASHTAG_NAME_FAILURE,
  payload: { error }
});

export const resetCheckDuplicateHashtagNameResult = () => ({
  type: RESET_CHECK_DUPLICATEHASHTAG_NAME_RESULT,
  payload: {}
});