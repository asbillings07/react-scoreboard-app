import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from './Context/index';
import Header from './Header';

test('<Header/>', () => {
  const { queryByLabelText } = render(
    <Provider>
      <Header />
    </Provider>
  );
  expect(queryByLabelText('the title of the app is')).toBeTruthy();
});
