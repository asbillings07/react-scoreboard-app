import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from './Context/index';
import App from './App';

afterEach(cleanup);

test('<App />', () => {
  const { container } = render(
    <Provider>
      <App />
    </Provider>
  );
  expect(container.firstChild).toMatchSnapshot();
});
