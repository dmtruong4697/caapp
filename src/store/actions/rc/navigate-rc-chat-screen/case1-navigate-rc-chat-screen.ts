export const CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST = 'CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST';
export const CASE1_NAVIGATE_RC_CHAT_SCREEN_SUCCESS = 'CASE1_NAVIGATE_RC_CHAT_SCREEN_SUCCESS';
export const CASE1_NAVIGATE_RC_CHAT_SCREEN_FAILURE = 'CASE1_NAVIGATE_RC_CHAT_SCREEN_FAILURE';

interface Case1NavigateRCChatScreenRequestAction {
  type: typeof CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface Case1NavigateRCChatScreenSuccessAction {
  type: typeof CASE1_NAVIGATE_RC_CHAT_SCREEN_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface Case1NavigateRCChatScreenFailureAction {
  type: typeof CASE1_NAVIGATE_RC_CHAT_SCREEN_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type Case1NavigateRCChatScreenActionTypes = Case1NavigateRCChatScreenRequestAction | Case1NavigateRCChatScreenSuccessAction | Case1NavigateRCChatScreenFailureAction;

export const case1NavigateRCChatScreenRequest = () => ({
  type: CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST,
  payload: { }
});

export const case1NavigateRCChatScreenSuccess = () => ({
  type: CASE1_NAVIGATE_RC_CHAT_SCREEN_SUCCESS,
  payload: {}
});

export const case1NavigateRCChatScreenFailure = (error: string) => ({
  type: CASE1_NAVIGATE_RC_CHAT_SCREEN_FAILURE,
  payload: { error }
});