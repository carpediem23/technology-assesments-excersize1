import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

test('App rendering', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
