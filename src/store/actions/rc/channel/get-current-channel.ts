import { RCChannel } from "../../../../models/rc/channel/rc-channel";

export const GET_CURRENT_RC_CHANNEL_REQUEST = 'GET_CURRENT_RC_CHANNEL_REQUEST';
export const GET_CURRENT_RC_CHANNEL_SUCCESS = 'GET_CURRENT_RC_CHANNEL_SUCCESS';
export const GET_CURRENT_RC_CHANNEL_FAILURE = 'GET_CURRENT_RC_CHANNEL_FAILURE';

interface GetCurrentRCChannelRequestAction {
  type: typeof GET_CURRENT_RC_CHANNEL_REQUEST;
  payload: {
    [key: string]: any;
  };
}
interface GetCurrentRCChannelSuccessAction {
  type: typeof GET_CURRENT_RC_CHANNEL_SUCCESS;
  payload: {
    channel: RCChannel;
    [key: string]: any;
  };
}
interface GetCurrentRCChannelFailureAction {
  type: typeof GET_CURRENT_RC_CHANNEL_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type GetCurrentRCChannelActionTypes = 
    GetCurrentRCChannelRequestAction 
    | GetCurrentRCChannelSuccessAction 
    | GetCurrentRCChannelFailureAction;


export const getCurrentRCChannelRequest = () => ({
  type: GET_CURRENT_RC_CHANNEL_REQUEST,
  payload: { }
});

export const getCurrentRCChannelSuccess = (channel: RCChannel) => ({
  type: GET_CURRENT_RC_CHANNEL_SUCCESS,
  payload: { channel }
});

export const getCurrentRCChannelFailure = (error: string) => ({
  type: GET_CURRENT_RC_CHANNEL_FAILURE,
  payload: { error }
});