import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Icon from './Icon';

test('<Icon/>', () => {
  const { container } = render(<Icon />);
  expect(container.firstChild).toMatchSnapshot();
});
