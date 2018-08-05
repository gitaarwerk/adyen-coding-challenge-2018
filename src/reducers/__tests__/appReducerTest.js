import * as types from '../../actionTypes/actionTypes';
import reducer from '../appReducer';
import { geoLocation } from '../../mocks/reducerMock';

describe('GoOut Adyen app', () => {
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
