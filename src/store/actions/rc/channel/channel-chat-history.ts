import { GetRCChannelChatHistoryResponce } from "../../../../models/rc/channel/rc-channel-chat-history-response";
import { RCMessage } from "../../../../models/rc/message/rc-message";

export const GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST = 'GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST';
export const GET_RC_CHANNEL_CHAT_HISTOTY_SUCCESS = 'GET_RC_CHANNEL_CHAT_HISTOTY_SUCCESS';
export const GET_RC_CHANNEL_CHAT_HISTOTY_FAILURE = 'GET_RC_CHANNEL_CHAT_HISTOTY_FAILURE';

export const ADD_MESSAGE_TO_RC_CHANNEL = 'ADD_MESSAGE_TO_RC_CHANNEL'

interface GetRCChannelChatHistoryRequestAction {
  type: typeof GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST;
  payload: {
    channel_id: number;
    [key: string]: any;
  };
}

interface GetRCChannelChatHistorySuccessAction {
  type: typeof GET_RC_CHANNEL_CHAT_HISTOTY_SUCCESS;
  payload: {
    messages: GetRCChannelChatHistoryResponce;
    [key: string]: any;
  };
}

interface GetRCChannelChatHistoryFailureAction {
  type: typeof GET_RC_CHANNEL_CHAT_HISTOTY_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface AddMessageToChannelAction {
  type: typeof ADD_MESSAGE_TO_RC_CHANNEL;
  payload: {
    message: RCMessage;
    [key: string]: any;
  };
}

export type GetRCChannelChatHistoryActionTypes = GetRCChannelChatHistoryRequestAction | GetRCChannelChatHistorySuccessAction | GetRCChannelChatHistoryFailureAction | AddMessageToChannelAction;

export const getRCChannelChatHistoryRequest = (channel_id: number) => ({
  type: GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST,
  payload: { channel_id }
});

export const getRCChannelChatHistorySuccess = (messages: GetRCChannelChatHistoryResponce) => ({
  type: GET_RC_CHANNEL_CHAT_HISTOTY_SUCCESS,
  payload: { messages }
});

export const getRCChannelChatHistoryFailure = (error: string) => ({
  type: GET_RC_CHANNEL_CHAT_HISTOTY_FAILURE,
  payload: { error }
});

export const addMessageToRCChannel = (message: RCMessage) => ({
  type: ADD_MESSAGE_TO_RC_CHANNEL,
  payload: { message }
});