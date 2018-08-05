import { handleActions } from 'redux-actions';
import * as types from '../actionTypes/actionTypes';

const defaultState = {
  selectedVenues: []
};

export default handleActions(
  {
    [types.TOGGLE_VENUE]: (state, { payload: selectedVenue }) => ({
      ...state,
      selectedVenues: selectedVenue
    }) // reducer placeholder
  },

  defaultState
);
