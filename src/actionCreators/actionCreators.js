import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

export const toggleVenue = create(types.TOGGLE_VENUE);

export const getCurrentGPSLocation = create(types.GET_CURRENT_GPS_LOCATION);
export const getCurrentGPSLocationSuccess = create(types.GET_CURRENT_GPS_LOCATION_SUCCESS);
export const getCurrentGPSLocationFailed = create(types.GET_CURRENT_GPS_LOCATION_FAILED);

export const getVenues = create(types.GET_VENUES);
export const getVenuesSuccess = create(types.GET_VENUES_SUCCESS);
export const getVenuesFailed = create(types.GET_VENUES_FAILED);

export const closeVenuePanel = create(types.CLOSE_VENUE_PANEL);

export const loadVenueItem = create(types.LOAD_VENUE_ITEM);
export const loadVenueItemSuccess = create(types.LOAD_VENUE_ITEM_SUCCESS);
export const loadVenueItemFailed = create(types.LOAD_VENUE_ITEM_FAILED);
