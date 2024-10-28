import { GetChannelListResponce } from "../../models/channel-responce/get-channel-list-responce";
import { createTwoButtonAlert } from "../../utils/alert";
import { GET_CHANNEL_LIST_FAILURE, GET_CHANNEL_LIST_REQUEST, GET_CHANNEL_LIST_SUCCESS, GetChannelListActionTypes } from "../actions/get-channel-list-action";

interface ChannelListState {
  channels: GetChannelListResponce | null;
  error: any | null;
}

const initialState: ChannelListState = {
  channels: null,
  error: null,
};

const channelListReducer = (state = initialState, action: GetChannelListActionTypes): ChannelListState => {
  switch (action.type) {
    case GET_CHANNEL_LIST_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_CHANNEL_LIST_SUCCESS:
      return {
        ...state,
        channels: action.payload.channels,
        error: null,
      };
    case GET_CHANNEL_LIST_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        channels: null,
      };
    default:
      return state;
  }
};

export default channelListReducer;