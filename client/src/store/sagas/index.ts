import { all } from 'redux-saga/effects';
import { watchFetchLaunches } from '.';

export * from './launchesSagas';

export function* rootSaga() {
  yield all([watchFetchLaunches()]);
}
