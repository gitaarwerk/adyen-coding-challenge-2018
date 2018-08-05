import { handleActions } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

const defaultState = {
  location: 'not obtained yet...',
  isLoading: false,
  nearbyVenues: []
};

export default handleActions(
  {
    [types.GET_CURRENT_GPS_LOCATION_SUCCESS]: (state, { payload: { latitude, longitude } }) => ({
      ...state,
      location: { latitude, longitude }
    }),

    [types.GET_VENUES]: state => ({
      ...state,
      isLoading: true
    }),

    [types.GET_VENUES_FAILED]: state => ({
      ...state,
      isLoading: false
    }),

    [types.GET_VENUES_SUCCESS]: (state, { payload: venues }) => ({
      ...state,
      isLoading: false,
      nearbyVenues: venues
    })
  },
  defaultState
);
