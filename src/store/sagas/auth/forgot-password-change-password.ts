import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST, forgotPasswordChangePasswordFailure, forgotPasswordChangePasswordRequest, forgotPasswordChangePasswordSuccess, resetForgotPasswordChangePasswordState } from '../../actions/auth/forgot-password-change-password';

function* forgotPasswordChangePassword(action: ReturnType<typeof forgotPasswordChangePasswordRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.forgotPasswordChangePassword, action.payload.email, action.payload.password);
    yield put(forgotPasswordChangePasswordSuccess());
    yield put(resetForgotPasswordChangePasswordState());
  } catch (error: any) {
    yield put(forgotPasswordChangePasswordFailure(error));
  }
}

export function* forgotPasswordChangePasswordSaga() {
  yield takeLatest(FORGOT_PASSWORD_CHANGE_PASSWORD_REQUEST, forgotPasswordChangePassword);
}