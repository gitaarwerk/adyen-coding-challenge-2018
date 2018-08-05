import { createAction as create } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

export const toggleVenue = create(types.TOGGLE_VENUE);

export const getCurrentGPSLocation = create(types.GET_CURRENT_GPS_LOCATION);
export const getCurrentGPSLocationSuccess = create(types.GET_CURRENT_GPS_LOCATION_SUCCESS);
export const getCurrentGPSLocationFailed = create(types.GET_CURRENT_GPS_LOCATION_FAILED);
