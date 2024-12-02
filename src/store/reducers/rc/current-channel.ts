import { CurrentChannelActionTypes, RESET_CURRENT_RC_CHANNEL, SET_CURRENT_RC_CHANNEL } from "../../actions/rc/current-channel";

interface CurrentChannelState {
    channel_id: number | null,
}

const initialState: CurrentChannelState = {
    channel_id: null,
};

const currentChannelReducer = (state = initialState, action: CurrentChannelActionTypes): CurrentChannelState => {
  switch (action.type) {
    case SET_CURRENT_RC_CHANNEL:
      return {
        ...state,
        channel_id: action.payload.channelID,
      };
    case RESET_CURRENT_RC_CHANNEL:
      return {
        ...state,
        channel_id: null,
      };
    default:
      return state;
  }
};

export default currentChannelReducer;