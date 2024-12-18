import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST, resendForgotPasswordValidateCodeFailure, resendForgotPasswordValidateCodeRequest, resendForgotPasswordValidateCodeSuccess, resetResendForgotPasswordValidateCodeState } from '../../actions/auth/resend-forgot-password-validate-code';

function* resendForgotPasswordValidateCode(action: ReturnType<typeof resendForgotPasswordValidateCodeRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.resendForgotPasswordValidateCode, action.payload.email);
    yield put(resendForgotPasswordValidateCodeSuccess());
    yield put(resetResendForgotPasswordValidateCodeState());
  } catch (error: any) {
    yield put(resendForgotPasswordValidateCodeFailure(error));
  }
}

export function* resendForgotPasswordValidateCodeSaga() {
  yield takeLatest(RESEND_FORGOT_PASSWORD_VALIDATE_CODE_REQUEST, resendForgotPasswordValidateCode);
}