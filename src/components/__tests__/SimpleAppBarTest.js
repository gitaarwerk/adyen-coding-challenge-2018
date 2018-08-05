import React from 'react';
import { shallow } from 'enzyme';

import SimpleAppBar from '../SimpleAppBar';

describe('Simple App Bar', () => {
  test('renders correctly', () => {
    const component = shallow(<SimpleAppBar />);

    expect(component).toMatchSnapshot();
  });
});
