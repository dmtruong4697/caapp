import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_LANGUAGE_LIST_REQUEST, getLanguageListFailure, getLanguageListRequest, getLanguageListSuccess } from '../../actions/constant-data/get-language-list';
import constantDataService from '../../../services/constant-data';

function* getLanguageList(action: ReturnType<typeof getLanguageListRequest>): Generator<any, void, any> {
  try {
    const response = yield call(constantDataService.getLanguageList);
    yield put(getLanguageListSuccess(response.languages));
  } catch (error: any) {
    yield put(getLanguageListFailure(error));
  }
}

export function* getLanguageListSaga() {
  yield takeLatest(GET_LANGUAGE_LIST_REQUEST, getLanguageList);
}