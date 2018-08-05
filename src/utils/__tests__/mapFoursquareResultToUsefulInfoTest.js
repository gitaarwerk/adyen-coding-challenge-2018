import { venues, fourSquareVenuesResult } from '../../mocks/reducerMock';

import mapFoursquareResultToUsefulInfo from '../mapFoursquareResultToUsefulInfo';

test('Sets the geo location sucessfully', () => {
  const result = mapFoursquareResultToUsefulInfo(fourSquareVenuesResult);
  expect(result).toEqual([venues[0]]);
});
