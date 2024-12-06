import { call, put, takeLatest } from 'redux-saga/effects';
import authService from '../../../services/auth';
import { VALIDATE_EMAIL_REQUEST, validateEmailFailure, validateEmailRequest, validateEmailSuccess } from '../../actions/auth/validate-email';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SEARCH_BY_HASHTAG_NAME_REQUEST, searchByHashtagNameFailure, searchByHashtagNameRequest, searchByHashtagNameSuccess } from '../../actions/search/search-by-hashtag-name';
import SearchService from '../../../services/search';

function* searchByHashtagName(action: ReturnType<typeof searchByHashtagNameRequest>): Generator<any, void, any> {
  try {
    const response = yield call(SearchService.searchByHashtagName, action.payload.hashtagName);
    yield put(searchByHashtagNameSuccess(response.user, response.is_found));
  } catch (error: any) {
    yield put(searchByHashtagNameFailure(error));
  }
}

export function* searchByhashtagNameSaga() {
  yield takeLatest(SEARCH_BY_HASHTAG_NAME_REQUEST, searchByHashtagName);
}