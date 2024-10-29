import { GetChannelListResponce } from "../../models/channel-responce/get-channel-list-responce";

export const CASE2_NAVIGATE_CHAT_SCREEN_REQUEST = 'CASE2_NAVIGATE_CHAT_SCREEN_REQUEST';
export const CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS = 'CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS';
export const CASE2_NAVIGATE_CHAT_SCREEN_FAILURE = 'CASE2_NAVIGATE_CHAT_SCREEN_FAILURE';

interface Case2NavigateChatScreenRequestAction {
  type: typeof CASE2_NAVIGATE_CHAT_SCREEN_REQUEST;
  payload: {
    user_id: number;
    [key: string]: any;
  };
}

interface Case2NavigateChatScreenSuccessAction {
  type: typeof CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface Case2NavigateChatScreenFailureAction {
  type: typeof CASE2_NAVIGATE_CHAT_SCREEN_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type Case2NavigateChatScreenActionTypes = Case2NavigateChatScreenRequestAction | Case2NavigateChatScreenSuccessAction | Case2NavigateChatScreenFailureAction;

export const case2NavigateChatScreenRequest = (userID: number) => ({
  type: CASE2_NAVIGATE_CHAT_SCREEN_REQUEST,
  payload: { userID }
});

export const case2NavigateChatScreenSuccess = () => ({
  type: CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS,
  payload: {}
});

export const case2NavigateChatScreenFailure = (error: string) => ({
  type: CASE2_NAVIGATE_CHAT_SCREEN_FAILURE,
  payload: { error }
});