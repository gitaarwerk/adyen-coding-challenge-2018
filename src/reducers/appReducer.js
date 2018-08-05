import { handleActions } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

const defaultState = {
  location: 'not obtained yet...'
};

export default handleActions(
  {
    [types.GET_CURRENT_GPS_LOCATION_SUCCESS]: (state, { payload: { latitude, longitude } }) => ({
      ...state,
      location: { latitude, longitude }
    })
  },
  defaultState
);
