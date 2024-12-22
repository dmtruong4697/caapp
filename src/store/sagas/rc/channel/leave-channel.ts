import { call, put, takeLatest } from 'redux-saga/effects';
import { LEAVE_RC_CHANNEL_REQUEST, leaveRCChannelFailure, leaveRCChannelRequest, leaveRCChannelSuccess, resetLeaveRCChannelState } from '../../../actions/rc/channel/leave-channel';
import RCChannelService from '../../../../services/rc/channel';

function* leaveRCChannel(action: ReturnType<typeof leaveRCChannelRequest>): Generator<any, void, any> {
  try {
    const response = yield call(RCChannelService.leaveCurrentRCChannel);
    yield put(leaveRCChannelSuccess());
    yield put(resetLeaveRCChannelState());
  } catch (error: any) {
    yield put(leaveRCChannelFailure(error));
  }
}

export function* leaveRCChannelSaga() {
  yield takeLatest(LEAVE_RC_CHANNEL_REQUEST, leaveRCChannel);
}