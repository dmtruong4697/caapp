import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CURRENT_RC_CHANNEL_REQUEST, getCurrentRCChannelFailure, getCurrentRCChannelRequest, getCurrentRCChannelSuccess } from '../../../actions/rc/channel/get-current-channel';
import RCChannelService from '../../../../services/rc/channel';

function* getCurrentRCChannel(action: ReturnType<typeof getCurrentRCChannelRequest>): Generator<any, void, any> {
  try {
    const response = yield call(RCChannelService.getCurrentRCChannel);
    yield put(getCurrentRCChannelSuccess(response));
    // console.log(response.users);
  } catch (error: any) {
    yield put(getCurrentRCChannelFailure(error));
  }
}

export function* currentRCChannelSaga() {
  yield takeEvery(GET_CURRENT_RC_CHANNEL_REQUEST, getCurrentRCChannel);
}