import { GetFriendChannelInfoResponce } from "../../models/channel-responce/get-friend-channel-info-responce";
import { GetGroupChannelInfoResponce } from "../../models/channel-responce/get-group-channel-info-responce";
import { createTwoButtonAlert } from "../../utils/alert";
import { GET_FRIEND_CHANNEL_INFO_FAILURE, GET_FRIEND_CHANNEL_INFO_REQUEST, GET_FRIEND_CHANNEL_INFO_SUCCESS, GET_GROUP_CHANNEL_INFO_FAILURE, GET_GROUP_CHANNEL_INFO_REQUEST, GET_GROUP_CHANNEL_INFO_SUCCESS, GetChannelInfoActionTypes } from "../actions/channel-info-action";

interface ChannelInfoState {
  friend_channel_info: GetFriendChannelInfoResponce | null;
  group_channel_info: GetGroupChannelInfoResponce | null;
  error: any | null;
}

const initialState: ChannelInfoState = {
  friend_channel_info: null,
  group_channel_info: null,
  error: null,
};

const getChannelInfoReducer = (state = initialState, action: GetChannelInfoActionTypes): ChannelInfoState => {
  switch (action.type) {
    // get friend channel info
    case GET_FRIEND_CHANNEL_INFO_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_FRIEND_CHANNEL_INFO_SUCCESS:
      return {
        ...state,
        friend_channel_info: action.payload.channel_info,
        error: null,
      };
    case GET_FRIEND_CHANNEL_INFO_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        friend_channel_info: null,
      };

    // get group channel info
    case GET_GROUP_CHANNEL_INFO_REQUEST:
        return {
          ...state,
          error: null,
        };
    case GET_GROUP_CHANNEL_INFO_SUCCESS:
        return {
          ...state,
          group_channel_info: action.payload.channel_info,
          error: null,
        };
    case GET_GROUP_CHANNEL_INFO_FAILURE:
        createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
        return {
          ...state,
          error: action.payload.error,
          group_channel_info: null,
        };

    default:
      return state;
  }
};

export default getChannelInfoReducer;