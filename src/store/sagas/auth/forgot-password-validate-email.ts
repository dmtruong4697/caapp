import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST, forgotPasswordValidateEmailFailure, forgotPasswordValidateEmailRequest, forgotPasswordValidateEmailSuccess, resetForgotPasswordValidateEmailState } from '../../actions/auth/forgot-password-validate-email';

function* forgotPasswordValidateEmail(action: ReturnType<typeof forgotPasswordValidateEmailRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.forgotPasswordValidateEmail, action.payload.email, action.payload.validateCode);
    yield put(forgotPasswordValidateEmailSuccess());
    yield put(resetForgotPasswordValidateEmailState());
  } catch (error: any) {
    yield put(forgotPasswordValidateEmailFailure(error));
  }
}

export function* forgotPasswordValidateEmailSaga() {
  yield takeLatest(FORGOT_PASSWORD_VALIDATE_EMAIL_REQUEST, forgotPasswordValidateEmail);
}