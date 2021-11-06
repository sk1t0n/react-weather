import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';
import fetch from 'jest-fetch-mock';

describe('Form component', () => {
  it('check the snapshot', () => {
    const { asFragment } = render(<Form />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('Testing DOM', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('submit valid data', async () => {
      fetch.mockResponse(
        JSON.stringify({ temp_c: 0, temp_f: 32 }),
        { status: 200 }
      );
      fetch('http://example-api.local');

      render(<Form />);
      userEvent.type(
        screen.getByPlaceholderText('Enter city'),
        'Moscow'
      );
      userEvent.click(screen.getByText('Submit'));
      expect(await screen.findByRole('alert')).toHaveTextContent('Temperature');
    });

    it('submit invalid data', async () => {
      fetch.mockResponse('', { status: 400 });
      fetch('http://example-api.local');

      render(<Form />);
      userEvent.type(
        screen.getByPlaceholderText('Enter city'),
        'Invalid city'
      );
      userEvent.click(screen.getByText('Submit'));
      expect(await screen.findByRole('alert')).toHaveTextContent('City not found');
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
});
