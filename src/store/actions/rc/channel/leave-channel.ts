export const LEAVE_RC_CHANNEL_REQUEST = 'LEAVE_RC_CHANNEL_REQUEST';
export const LEAVE_RC_CHANNEL_SUCCESS = 'LEAVE_RC_CHANNEL_SUCCESS';
export const LEAVE_RC_CHANNEL_FAILURE = 'LEAVE_RC_CHANNEL_FAILURE';
export const RESET_LEAVE_RC_CHANNEL_STATE = 'RESET_LEAVE_RC_CHANNEL_STATE';

interface LeaveRCChannelRequestAction {
  type: typeof LEAVE_RC_CHANNEL_REQUEST;
  payload: {
    [key: string]: any;
  };
}

interface LeaveRCChannelSuccessAction {
  type: typeof LEAVE_RC_CHANNEL_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

interface LeaveRCChannelFailureAction {
  type: typeof LEAVE_RC_CHANNEL_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

interface ResetLeaveRCChannelStateAction {
  type: typeof RESET_LEAVE_RC_CHANNEL_STATE;
  payload: {
    [key: string]: any;
  };
}

export type LeaveRCChannelActionTypes = LeaveRCChannelRequestAction | LeaveRCChannelSuccessAction | LeaveRCChannelFailureAction | ResetLeaveRCChannelStateAction;

export const leaveRCChannelRequest = () => ({
  type: LEAVE_RC_CHANNEL_REQUEST,
  payload: { }
});

export const leaveRCChannelSuccess = () => ({
  type: LEAVE_RC_CHANNEL_SUCCESS,
  payload: { }
});

export const leaveRCChannelFailure = (error: string) => ({
  type: LEAVE_RC_CHANNEL_FAILURE,
  payload: { error }
});

export const resetLeaveRCChannelState = () => ({
  type: RESET_LEAVE_RC_CHANNEL_STATE,
  payload: {}
});