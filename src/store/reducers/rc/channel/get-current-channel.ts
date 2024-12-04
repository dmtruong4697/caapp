import { RCChannel } from "../../../../models/rc/channel/rc-channel";
import { createTwoButtonAlert } from "../../../../utils/alert";
import { GET_CURRENT_RC_CHANNEL_FAILURE, GET_CURRENT_RC_CHANNEL_REQUEST, GET_CURRENT_RC_CHANNEL_SUCCESS, GetCurrentRCChannelActionTypes } from "../../../actions/rc/channel/get-current-channel";

interface CurrentRCChannelState {
  current_rc_channel: RCChannel | null;
  error: any | null;
}

const initialState: CurrentRCChannelState = {
  current_rc_channel: null,
  error: null,
};

const getCurrentChannelReducer = (state = initialState, action: GetCurrentRCChannelActionTypes): CurrentRCChannelState => {
  switch (action.type) {
    case GET_CURRENT_RC_CHANNEL_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_CURRENT_RC_CHANNEL_SUCCESS:
      return {
        ...state,
        current_rc_channel: action.payload.channel,
        error: null,
      };
    case GET_CURRENT_RC_CHANNEL_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        current_rc_channel: null,
      };

    default:
      return state;
  }
};

export default getCurrentChannelReducer;