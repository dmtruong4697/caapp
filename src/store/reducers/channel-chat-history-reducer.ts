import { CheckFriendChannelResponce } from "../../models/channel-responce/check-friend-channel-responce";
import { GetChannelChatHistoryResponce } from "../../models/message-responce/get-channel-chat-history-responce";
import { createTwoButtonAlert } from "../../utils/alert";
import { GET_CHANNEL_CHAT_HISTOTY_FAILURE, GET_CHANNEL_CHAT_HISTOTY_REQUEST, GET_CHANNEL_CHAT_HISTOTY_SUCCESS, GetChannelChatHistoryActionTypes } from "../actions/channel-chat-history-action";

interface ChannelChatHistoryState {
  messages: GetChannelChatHistoryResponce | null;
  error: any | null;
}

const initialState: ChannelChatHistoryState = {
  messages: null,
  error: null,
};

const channelChatHistoryReducer = (state = initialState, action: GetChannelChatHistoryActionTypes): ChannelChatHistoryState => {
  switch (action.type) {
    case GET_CHANNEL_CHAT_HISTOTY_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_CHANNEL_CHAT_HISTOTY_SUCCESS:
      return {
        ...state,
        messages: action.payload.messages,
        error: null,
      };
    case GET_CHANNEL_CHAT_HISTOTY_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        messages: null,
      };
    default:
      return state;
  }
};

export default channelChatHistoryReducer;