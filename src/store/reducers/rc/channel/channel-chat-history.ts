
import { RCMessage } from "../../../../models/rc/message/rc-message";
import { ADD_MESSAGE_TO_RC_CHANNEL, GET_RC_CHANNEL_CHAT_HISTOTY_FAILURE, GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST, GET_RC_CHANNEL_CHAT_HISTOTY_SUCCESS, GetRCChannelChatHistoryActionTypes } from "../../../actions/rc/channel/channel-chat-history";
import { createTwoButtonAlert } from "../../../../utils/alert";
import { RCChatHistoryItem } from "../../../../models/rc/message/rc-chat-history-item";

interface RCChannelChatHistoryState {
  messages: RCChatHistoryItem[];
  error: any | null;
}

const initialState: RCChannelChatHistoryState = {
  messages: [],
  error: null,
};

const RCChannelChatHistoryReducer = (
  state = initialState, 
  action: GetRCChannelChatHistoryActionTypes
): RCChannelChatHistoryState => {
  switch (action.type) {
    case GET_RC_CHANNEL_CHAT_HISTOTY_REQUEST:
      return {
        ...state,
        error: null,
      };

    case GET_RC_CHANNEL_CHAT_HISTOTY_SUCCESS:
      const messagesArray = action.payload.messages;
      return {
        ...state,
        messages: messagesArray,
        error: null,
      };

    case GET_RC_CHANNEL_CHAT_HISTOTY_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_message);
      return {
        ...state,
        error: action.payload.error,
      };

    case ADD_MESSAGE_TO_RC_CHANNEL:
      return {
        ...state,
        messages: [action.payload.message, ...state.messages],
      };

    default:
      return state;
  }
};

export default RCChannelChatHistoryReducer;
