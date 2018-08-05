import * as types from '../../actionTypes/actionTypes';
import reducer from '../appReducer';
import { geoLocation, venues, venueItem } from '../../mocks/reducerMock';

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

  describe('Venue details', () => {
    test('start to load venue item', () => {
      const action = {
        type: types.LOAD_VENUE_ITEM
      };

      const state = {
        isLoadingVenueItem: false,
        venueItemPaneIsOpen: false
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        isLoadingVenueItem: true,
        venueItemPaneIsOpen: false
      });
    });

    test('load venue item success', () => {
      const action = {
        type: types.LOAD_VENUE_ITEM_SUCCESS,
        payload: venueItem
      };

      const state = {
        isLoadingVenueItem: true,
        venueItemPaneIsOpen: true,
        venueItem: {}
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        isLoadingVenueItem: false,
        venueItemPaneIsOpen: true,
        venueItem
      });
    });

    test('load venue item failed', () => {
      const action = {
        type: types.LOAD_VENUE_ITEM_FAILED
      };

      const state = {
        isLoadingVenueItem: true,
        venueItemPaneIsOpen: false,
        venueItem: {}
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        isLoadingVenueItem: false,
        venueItemPaneIsOpen: false,
        venueItem: {}
      });
    });

    test('close venue panel', () => {
      const action = {
        type: types.CLOSE_VENUE_PANEL
      };

      const state = {
        venueItemPaneIsOpen: true
      };

      const actual = reducer(state, action);

      expect(actual).toEqual({
        venueItemPaneIsOpen: false
      });
    });
  });
});
