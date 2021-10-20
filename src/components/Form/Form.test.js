import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Form } from './index';

test('renders correctly form component', () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('submit valid data', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    json: jest.fn().mockResolvedValue({ temp_c: 0, temp_f: 32 })
  });

  render(<Form />);
  fireEvent.input(screen.getByPlaceholderText('Enter city'), {
    target: {
      value: 'Moscow'
    }
  });
  await waitFor(() => {
    fireEvent.click(screen.getByText('Submit'));
  });

  expect(screen.getByRole('alert')).toHaveTextContent('Temperature');
});

test('submit invalid data', async () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: false,
    status: '400'
  });

  render(<Form />);
  fireEvent.input(screen.getByPlaceholderText('Enter city'), {
    target: {
      value: 'Invalid city'
    }
  });
  await waitFor(() => {
    fireEvent.click(screen.getByText('Submit'));
  });

  expect(screen.getByRole('alert')).toHaveTextContent('City not found');
});

test('click the reset button', async () => {
  render(<Form />);
  fireEvent.input(screen.getByPlaceholderText('Enter city'), {
    target: {
      value: 'Moscow'
    }
  });
  
  expect(screen.getByDisplayValue('Moscow')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Reset'));
  expect(screen.queryByDisplayValue('Moscow')).toBeNull();
});
