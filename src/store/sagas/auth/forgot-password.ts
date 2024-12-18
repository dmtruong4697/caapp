import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { VALIDATE_EMAIL_REQUEST, validateEmailFailure, validateEmailRequest, validateEmailSuccess } from '../../actions/auth/validate-email';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FORGOT_PASSWORD_REQUEST, forgotPasswordFailure, forgotPasswordRequest, forgotPasswordSuccess, resetForgotPasswordState } from '../../actions/auth/forgot-password';

function* forgotPassword(action: ReturnType<typeof forgotPasswordRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.forgotPassword, action.payload.email);
    yield put(forgotPasswordSuccess());
    yield put(resetForgotPasswordState());
  } catch (error: any) {
    yield put(forgotPasswordFailure(error));
  }
}

export function* forgotPasswordSaga() {
  yield takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword);
}