import { put, call } from 'redux-saga/effects';
import * as actions from '../actionCreators/actionCreators';

import getGeoLocationFromBrowser from '../utils/getGeoLocationFromBrowser';

export function* getCurrentGPSLocationFromBrowser() {
  try {
    const { coords } = yield call(getGeoLocationFromBrowser);
    yield put(
      actions.getCurrentGPSLocationSuccess({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    );
  } catch (error) {
    yield put(actions.getCurrentGPSLocationFailed({ error }));
  }
}
