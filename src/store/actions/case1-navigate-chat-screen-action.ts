import { GetChannelListResponce } from "../../models/channel-responce/get-channel-list-responce";

export const CASE1_NAVIGATE_CHAT_SCREEN_REQUEST = 'CASE1_NAVIGATE_CHAT_SCREEN_REQUEST';
export const CASE1_NAVIGATE_CHAT_SCREEN_SUCCESS = 'CASE1_NAVIGATE_CHAT_SCREEN_SUCCESS';
export const CASE1_NAVIGATE_CHAT_SCREEN_FAILURE = 'CASE1_NAVIGATE_CHAT_SCREEN_FAILURE';

interface Case1NavigateChatScreenRequestAction {
  type: typeof CASE1_NAVIGATE_CHAT_SCREEN_REQUEST;
  payload: {
    channel_type: string;
    channel_id: number;
    [key: string]: any;
  };
}

interface Case1NavigateChatScreenSuccessAction {
  type: typeof CASE1_NAVIGATE_CHAT_SCREEN_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface Case1NavigateChatScreenFailureAction {
  type: typeof CASE1_NAVIGATE_CHAT_SCREEN_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type Case1NavigateChatScreenActionTypes = Case1NavigateChatScreenRequestAction | Case1NavigateChatScreenSuccessAction | Case1NavigateChatScreenFailureAction;

export const case1NavigateChatScreenRequest = (channelType: string, channelID: number) => ({
  type: CASE1_NAVIGATE_CHAT_SCREEN_REQUEST,
  payload: { channelType, channelID }
});

export const case1NavigateChatScreenSuccess = () => ({
  type: CASE1_NAVIGATE_CHAT_SCREEN_SUCCESS,
  payload: {}
});

export const case1NavigateChatScreenFailure = (error: string) => ({
  type: CASE1_NAVIGATE_CHAT_SCREEN_FAILURE,
  payload: { error }
});