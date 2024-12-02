export const SET_CURRENT_RC_CHANNEL = 'SET_CURRENT_RC_CHANNEL';
export const RESET_CURRENT_RC_CHANNEL = 'RESET_CURRENT_RC_CHANNEL';

interface SetCurrentRCChannelAction {
  type: typeof SET_CURRENT_RC_CHANNEL;
  payload: {
    channelID: number;
    [key: string]: any;
  };
}

interface ResetCurrentRCChannelAction {
  type: typeof RESET_CURRENT_RC_CHANNEL;
  payload: {
    [key: string]: any;
  };
}

export type CurrentChannelActionTypes = SetCurrentRCChannelAction | ResetCurrentRCChannelAction;

export const setCurrentRCChannel = (channelID: number) => ({
  type: SET_CURRENT_RC_CHANNEL,
  payload: { channelID }
});

export const resetCurrentRCChannel = () => ({
  type: RESET_CURRENT_RC_CHANNEL,
  payload: { }
});