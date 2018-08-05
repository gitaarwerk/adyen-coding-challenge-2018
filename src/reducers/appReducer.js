import { handleActions } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

const defaultState = {
  location: 'not obtained yet...',
  isLoading: false,
  nearbyVenues: [],
  isLoadingVenueItem: false,
  venueItemPaneIsOpen: false,
  venueItem: {}
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
    }),

    [types.LOAD_VENUE_ITEM]: state => ({
      ...state,
      isLoadingVenueItem: true,
      venueItemPaneIsOpen: false
    }),

    [types.LOAD_VENUE_ITEM_SUCCESS]: (state, { payload: venueItem }) => ({
      ...state,
      isLoadingVenueItem: false,
      venueItemPaneIsOpen: true,
      venueItem: { ...venueItem }
    }),

    [types.LOAD_VENUE_ITEM_FAILED]: state => ({
      ...state,
      isLoadingVenueItem: false,
      venueItemPaneIsOpen: false
    }),

    [types.CLOSE_VENUE_PANEL]: state => ({
      ...state,
      venueItemPaneIsOpen: false
    })
  },
  defaultState
);
