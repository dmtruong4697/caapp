import { createTwoButtonAlert } from "../../../../utils/alert";
import { LEAVE_RC_CHANNEL_FAILURE, LEAVE_RC_CHANNEL_REQUEST, LEAVE_RC_CHANNEL_SUCCESS, LeaveRCChannelActionTypes } from "../../../actions/rc/channel/leave-channel";

interface LeaveRCChannelState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: LeaveRCChannelState = {
  success_flg: false,
  error: null,
};

const leaveRCChannelReducer = (state = initialState, action: LeaveRCChannelActionTypes): LeaveRCChannelState => {
  switch (action.type) {
    case LEAVE_RC_CHANNEL_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case LEAVE_RC_CHANNEL_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };
    case LEAVE_RC_CHANNEL_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    default:
      return state;
  }
};

export default leaveRCChannelReducer;