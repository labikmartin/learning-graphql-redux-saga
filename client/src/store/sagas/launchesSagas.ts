import { GET_LAUNCHES, SET_LAUNCHES, LaunchesActions } from '..';
import { put, takeLatest, delay } from 'redux-saga/effects';

export function* fetchLaunches() {
  delay(2000);
  yield put<LaunchesActions>({ type: SET_LAUNCHES, payload: [1, 2, 3] });
}

export function* watchFetchLaunches() {
  yield takeLatest(GET_LAUNCHES, fetchLaunches);
}
