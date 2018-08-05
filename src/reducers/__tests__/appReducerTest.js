import * as types from '../../actionTypes/actionTypes';
import reducer from '../appReducer';
import { geoLocation, venues } from '../../mocks/reducerMock';

describe('GoOut Adyen app', () => {
  describe('Getting the GEO location', () => {
    test('Sets the geo location sucessfully', () => {
      const action = {
        type: types.GET_CURRENT_GPS_LOCATION_SUCCESS,
        payload: geoLocation
      };

      const state = {
        location: {}
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        location: { ...geoLocation }
      });
    });
  });

  describe('Getting the venues', () => {
    test('Set loading state when obtaining venues', () => {
      const action = {
        type: types.GET_VENUES
      };

      const state = {
        isLoading: false
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        isLoading: true
      });
    });

    test('Set loading false and not replace anything when something failed', () => {
      const action = {
        type: types.GET_VENUES_FAILED
      };

      const state = {
        isLoading: true
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        isLoading: false
      });
    });

    test('Getting venues sucessfully', () => {
      const action = {
        type: types.GET_VENUES_SUCCESS,
        payload: venues
      };

      const state = {
        isLoading: true,
        nearbyVenues: []
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        isLoading: false,
        nearbyVenues: venues
      });
    });
  });
});
