import { GetChannelListResponce, GetChannelListResponceItem } from "../../../models/channel-responce/get-channel-list-responce";
import { createTwoButtonAlert } from "../../../utils/alert";
import { GET_CHANNEL_LIST_FAILURE, GET_CHANNEL_LIST_REQUEST, GET_CHANNEL_LIST_SUCCESS, GetChannelListActionTypes, UPDATE_CHANNEL_LIST_ITEM } from "../../actions/channel/get-channel-list-action";

interface ChannelListState {
  // channels: GetChannelListResponce | null;
  channels: Record<string, GetChannelListResponceItem>;
  is_last_page: boolean | null;
  error: any | null;
}

const initialState: ChannelListState = {
  // channels: null,
  channels: {},
  is_last_page: null,
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
      const tmp: Record<string, GetChannelListResponceItem> = {};
      for (let i = 0; i < action.payload.channels.length; i++) {
        tmp[action.payload.channels[i].channel.id] = action.payload.channels[i];
        console.log("tmp i", tmp[action.payload.channels[i].channel.id]);
      }
      // console.log("length", action.payload.channels);
      // console.log("success", tmp);
      return {
        ...state,
        // channels: action.payload.channels,
        channels: tmp,
        is_last_page: action.payload.is_last_page,
        error: null,
      };

    case GET_CHANNEL_LIST_FAILURE:
      console.log("GET_CHANNEL_LIST_FAILURE");
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        // channels: null,
      };

    case UPDATE_CHANNEL_LIST_ITEM:
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.payload.channel.channel.id]: action.payload.channel,
        },
        error: null,
      };

    default:
      return state;
  }
};

export default channelListReducer;