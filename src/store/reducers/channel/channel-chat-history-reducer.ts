
import { createTwoButtonAlert } from "../../../utils/alert";
import { MessageDetail } from "../../../models/message/message-detail";
import { ADD_MESSAGE_TO_CHANNEL, GET_CHANNEL_CHAT_HISTOTY_FAILURE, GET_CHANNEL_CHAT_HISTOTY_REQUEST, GET_CHANNEL_CHAT_HISTOTY_SUCCESS, GetChannelChatHistoryActionTypes } from "../../actions/channel/channel-chat-history-action";

interface ChannelChatHistoryState {
  messages: MessageDetail[] | null;
  channels_chat_history: Record<string, MessageDetail[]>; 
  error: any | null;
}

const initialState: ChannelChatHistoryState = {
  messages: null,
  channels_chat_history: {}, 
  error: null,
};

const channelChatHistoryReducer = (
  state = initialState, 
  action: GetChannelChatHistoryActionTypes
): ChannelChatHistoryState => {
  switch (action.type) {
    case GET_CHANNEL_CHAT_HISTOTY_REQUEST:
      return {
        ...state,
        error: null,
      };

    case GET_CHANNEL_CHAT_HISTOTY_SUCCESS:
      const channelId = action.payload.messages.messages[0].message.channel_id;
      const messagesArray = action.payload.messages.messages;
      return {
        ...state,
        messages: messagesArray,
        channels_chat_history: {
          ...state.channels_chat_history,
          [channelId]: messagesArray,
        },
        error: null,
      };

    case GET_CHANNEL_CHAT_HISTOTY_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_message);
      return {
        ...state,
        error: action.payload.error,
      };

    case ADD_MESSAGE_TO_CHANNEL:
      const { message } = action.payload;
      const currentChannelMessages = state.channels_chat_history[message.message.channel_id] || [];
      return {
        ...state,
        channels_chat_history: {
          ...state.channels_chat_history,
          [message.message.channel_id]: [message, ...currentChannelMessages],
        },
      };

    default:
      return state;
  }
};

export default channelChatHistoryReducer;
