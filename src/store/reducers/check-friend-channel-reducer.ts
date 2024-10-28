import { CheckFriendChannelResponce } from "../../models/channel-responce/check-friend-channel-responce";
import { createTwoButtonAlert } from "../../utils/alert";
import { CHECK_FRIEND_CHANNEL_FAILURE, CHECK_FRIEND_CHANNEL_REQUEST, CHECK_FRIEND_CHANNEL_SUCCESS, CheckFriendChannelActionTypes } from "../actions/check-friend-channel-action";

interface CheckFriendChannelState {
  channel: CheckFriendChannelResponce | null;
  error: any | null;
}

const initialState: CheckFriendChannelState = {
  channel: null,
  error: null,
};

const checkFriendChannelReducer = (state = initialState, action: CheckFriendChannelActionTypes): CheckFriendChannelState => {
  switch (action.type) {
    case CHECK_FRIEND_CHANNEL_REQUEST:
      return {
        ...state,
        error: null,
      };
    case CHECK_FRIEND_CHANNEL_SUCCESS:
      return {
        ...state,
        channel: action.payload.channel,
        error: null,
      };
    case CHECK_FRIEND_CHANNEL_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        channel: null,
      };
    default:
      return state;
  }
};

export default checkFriendChannelReducer;