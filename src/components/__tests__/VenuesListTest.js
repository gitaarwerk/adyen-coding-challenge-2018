import React from 'react';
import { shallow } from 'enzyme';
import { venues } from '../../mocks/reducerMock';

import VenuesList from '../VenuesList';

describe('VenuesList', () => {
  test('renders correctly with venues', () => {
    const component = shallow(<VenuesList isLoading={false} nearbyVenues={venues}/>);

    expect(component).toMatchSnapshot();
  });

  test('renders correctly without venues and loading', () => {
    const component = shallow(<VenuesList isLoading={true} nearbyVenues={[]}/>);

    expect(component).toMatchSnapshot();
  });
});
