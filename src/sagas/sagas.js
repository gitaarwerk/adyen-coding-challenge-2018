import { put, call } from 'redux-saga/effects';
import * as actions from '../actionCreators/actionCreators';

import getGeoLocationFromBrowser from '../utils/getGeoLocationFromBrowser';
import mapFoursquareResultToUsefulInfo from '../utils/mapFoursquareResultToUsefulInfo';
import { getPizzaPlaces } from '../repositories/fourSquare';

export function* getCurrentGPSLocation() {
  try {
    const { coords } = yield call(getGeoLocationFromBrowser);
    yield put(
      actions.getCurrentGPSLocationSuccess({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    );
    yield put(
      actions.getVenues({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    );
  } catch (error) {
    yield put(actions.getCurrentGPSLocationFailed({ error }));
  }
}

export function* getVenues({ payload: coords }) {
  try {
    const { res, err } = yield call(getPizzaPlaces, coords);
    if (res.response && res.response.groups && res.response.groups[0].items) {
      yield put(
        actions.getVenuesSuccess(
          mapFoursquareResultToUsefulInfo(res.response.groups[0].items.map(item => item.venue))
        )
      );
    }
  } catch (err) {
    yield put(actions.getVenuesFailed(err));
  }
}
