import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { RESEND_CODE_REQUEST, resendCodeFailure, resendCodeRequest, resendCodeSuccess } from '../../actions/auth/resend-code';

function* resendCode(action: ReturnType<typeof resendCodeRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.resendValidateCode, action.payload.email);
    yield put(resendCodeSuccess());
  } catch (error: any) {
    yield put(resendCodeFailure(error));
  }
}

export function* resendCodeSaga() {
  yield takeLatest(RESEND_CODE_REQUEST, resendCode);
}