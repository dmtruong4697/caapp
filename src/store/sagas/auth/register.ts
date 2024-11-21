import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { REGISTER_REQUEST, registerFailure, registerRequest, registerSuccess } from '../../actions/auth/register';

function* register(action: ReturnType<typeof registerRequest>): Generator<any, void, any> {
  try {
    yield call(authService.register, action.payload.email, action.payload.password);
    yield put(registerSuccess());
  } catch (error: any) {
    yield put(registerFailure(error));
  }
}

export function* registerSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
}