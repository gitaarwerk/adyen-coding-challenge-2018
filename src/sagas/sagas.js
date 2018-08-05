import { put, call } from 'redux-saga/effects';
import * as actions from '../actionCreators/actionCreators';

import getGeoLocationFromBrowser from '../utils/getGeoLocationFromBrowser';
import mapFoursquareResultToUsefulInfo from '../utils/mapFoursquareResultToUsefulInfo';
import mapVenueItem from '../utils/mapVenueItem';
import { getPlaces, getVenueDetails } from '../repositories/fourSquare';

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
  const { res, err } = yield call(getPlaces, { place: 'food', ...coords });
  if (res.response && res.response.groups && res.response.groups[0].items) {
    yield put(
      actions.getVenuesSuccess(
        mapFoursquareResultToUsefulInfo(res.response.groups[0].items.map(item => item.venue))
      )
    );
  } else {
    yield put(actions.getVenuesFailed(err));
  }
}

export function* loadVenueItem({ payload: id }) {
  const { res, err } = yield call(getVenueDetails, id);
  if (res) {
    console.log(res);
    yield put(actions.loadVenueItemSuccess(mapVenueItem(res.response.venue)));
  } else {
    yield put(actions.loadVenueItemFailed(err));
  }
}
