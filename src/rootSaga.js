import { takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes/actionTypes';
import * as sagas from './sagas/sagas';

export default function* rootSaga() {
  yield takeLatest(types.GET_CURRENT_GPS_LOCATION, sagas.getCurrentGPSLocation);
  yield takeLatest(types.GET_VENUES, sagas.getVenues);
}
