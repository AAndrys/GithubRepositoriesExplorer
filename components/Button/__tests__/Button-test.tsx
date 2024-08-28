import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import Button from '../Button';

describe('Test <Button />', () => {
  it('renders correctly with given label', () => {
    const { getByText } = render(
      <Button label="Click Me" onPress={jest.fn()} />
    );
    const buttonLabel = getByText('Click Me');

    expect(buttonLabel).toBeTruthy();
  });

  it('calls onPress when button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button label="Click Me" onPress={onPressMock} />
    );
    const button = getByText('Click Me');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
