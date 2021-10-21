import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './index';

it('renders correctly form component', () => {
  const { asFragment } = render(<Form />);
  expect(asFragment()).toMatchSnapshot();
});

describe('Testing DOM', () => {
  global.fetch = jest.fn();

  afterEach(() => {
    fetch.mockClear();
  });

  it('submit valid data', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ temp_c: 0, temp_f: 32 })
    }));

    render(<Form />);
    userEvent.type(
      screen.getByPlaceholderText('Enter city'),
      'Moscow'
    );
    await waitFor(() => {
      userEvent.click(screen.getByText('Submit'));
    });

    expect(screen.getByRole('alert')).toHaveTextContent('Temperature');
  });

  it('submit invalid data', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      status: '400'
    }));

    render(<Form />);
    userEvent.type(
      screen.getByPlaceholderText('Enter city'),
      'Invalid city'
    );
    await waitFor(() => {
      userEvent.click(screen.getByText('Submit'));
    });

    expect(screen.getByRole('alert')).toHaveTextContent('City not found');
  });

  it('click the reset button', async () => {
    render(<Form />);
    userEvent.type(
      screen.getByPlaceholderText('Enter city'),
      'Moscow'
    );
    
    expect(screen.getByDisplayValue('Moscow')).toBeInTheDocument();
    userEvent.click(screen.getByText('Reset'));
    expect(screen.queryByDisplayValue('Moscow')).toBeNull();
  });
});
