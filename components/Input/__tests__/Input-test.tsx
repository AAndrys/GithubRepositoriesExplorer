import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import debounce from 'lodash/debounce';

import Input from '../Input';

const placeholder = 'Enter username';

jest.mock('lodash/debounce', () =>
  //eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  jest.fn((fn: Function) => {
    const debouncedFn = (...args: any[]) => fn(...args);
    debouncedFn.cancel = jest.fn();
    return debouncedFn;
  })
);

describe('Input Component', () => {
  it('renders correctly with given label', () => {
    const { getByText } = render(
      <Input placeholder={placeholder} setValueChange={jest.fn()} />
    );
    const inputLabel = getByText('Search');

    expect(inputLabel).toBeTruthy();
  });

  it('renders correctly with a placeholder', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} setValueChange={jest.fn()} />
    );
    const inputElement = getByPlaceholderText(placeholder);

    expect(inputElement).toBeTruthy();
  });

  it('updates the text input value', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} setValueChange={jest.fn()} />
    );
    const inputElement = getByPlaceholderText(placeholder);
    const newValue = 'New value';

    fireEvent.changeText(inputElement, newValue);

    expect(inputElement.props.value).toBe(newValue);
  });

  it('calls setValueChange with debounced function on text input change', async () => {
    const setValueChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input placeholder={placeholder} setValueChange={setValueChangeMock} />
    );
    const inputElement = getByPlaceholderText(placeholder);
    const newValue = 'New value';

    fireEvent.changeText(inputElement, newValue);

    await waitFor(() => {
      expect(setValueChangeMock).toHaveBeenCalledWith(newValue);
    });
  });

  it('calls cancel method of debounced function on component unmount', () => {
    const mockSetValueChange = jest.fn();

    const { unmount } = render(
      <Input placeholder={placeholder} setValueChange={mockSetValueChange} />
    );

    const mockDebounceInstance = (debounce as jest.Mock).mock.results[0].value;

    unmount();

    expect(mockDebounceInstance.cancel).toHaveBeenCalled();
  });
});
