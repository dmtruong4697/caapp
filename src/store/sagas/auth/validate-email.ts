import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { VALIDATE_EMAIL_REQUEST, validateEmailFailure, validateEmailRequest, validateEmailSuccess } from '../../actions/auth/validate-email';

function* validateEmail(action: ReturnType<typeof validateEmailRequest>): Generator<any, void, any> {
  try {
    const response = yield call(authService.validateEmail, action.payload.email, action.payload.password, action.payload.validateCode);
    yield put(validateEmailSuccess());
  } catch (error: any) {
    yield put(validateEmailFailure(error));
  }
}

export function* validateEmailSaga() {
  yield takeLatest(VALIDATE_EMAIL_REQUEST, validateEmail);
}