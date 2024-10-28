import { GetChannelListResponce } from "../../models/channel-responce/get-channel-list-responce";
import { GetChannelChatHistoryResponce } from "../../models/message-responce/get-channel-chat-history-responce";

export const GET_CHANNEL_CHAT_HISTOTY_REQUEST = 'GET_CHANNEL_CHAT_HISTOTY_REQUEST';
export const GET_CHANNEL_CHAT_HISTOTY_SUCCESS = 'GET_CHANNEL_CHAT_HISTOTY_SUCCESS';
export const GET_CHANNEL_CHAT_HISTOTY_FAILURE = 'GET_CHANNEL_CHAT_HISTOTY_FAILURE';

interface GetChannelChatHistoryRequestAction {
  type: typeof GET_CHANNEL_CHAT_HISTOTY_REQUEST;
  payload: {
    channel_id: number;
    [key: string]: any;
  };
}

interface GetChannelChatHistorySuccessAction {
  type: typeof GET_CHANNEL_CHAT_HISTOTY_SUCCESS;
  payload: {
    messages: GetChannelChatHistoryResponce;
    [key: string]: any;
  };
}

interface GetChannelChatHistoryFailureAction {
  type: typeof GET_CHANNEL_CHAT_HISTOTY_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type GetChannelChatHistoryActionTypes = GetChannelChatHistoryRequestAction | GetChannelChatHistorySuccessAction | GetChannelChatHistoryFailureAction;

export const getChannelChatHistoryRequest = (channel_id: number) => ({
  type: GET_CHANNEL_CHAT_HISTOTY_REQUEST,
  payload: { channel_id }
});

export const getChannelChatHistorySuccess = (messages: GetChannelChatHistoryResponce) => ({
  type: GET_CHANNEL_CHAT_HISTOTY_SUCCESS,
  payload: { messages }
});

export const getChannelChatHistoryFailure = (error: string) => ({
  type: GET_CHANNEL_CHAT_HISTOTY_FAILURE,
  payload: { error }
});