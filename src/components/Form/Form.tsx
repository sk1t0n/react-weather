import React, { useState, useRef } from 'react';
import FormBootstrap from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Result } from '../Result';

type ErrorMessages = {
  [key: string]: string;
};

export type Temperature = {
  temp_c: number;
  temp_f: number;
};

export const Form: React.FC = () => {
  const API_KEY = process.env['REACT_APP_WEATHER_KEY'];
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=`;
  const errorMessages: ErrorMessages = {
    '400': 'City not found, maybe you entered the wrong city name. Correct the error and try again.'
  };

  let [isLoading, setLoading] = useState(false);
  let [temperature, setTemperature] = useState<Temperature | null>(null);
  let [error, setError] = useState<string | null>(null);
  let inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setTemperature(null);

    let value = inputRef?.current?.value;
    if (value && value.length > 0) {
      try {
        const response = await fetch(url + value);

        if (!response.ok) {
          setError(errorMessages[response.status.toString()]);
          setLoading(false);
        } else {
          const json = await response.json();
          const temp_c = json.current?.temp_c;
          const temp_f = json.current?.temp_f;
          setTemperature({ temp_c, temp_f });
          setLoading(false);
        }
      } catch(e: any) {
        setError(e.message);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }

  function handleReset() {
    setError(null);
    setTemperature(null);
  }

  return (
    <div className="max-width-600_center">
      <FormBootstrap className="border rounded p-4">
        <FormBootstrap.Group className="mb-3" controlId="city">
          <FormBootstrap.Label>City</FormBootstrap.Label>
          <FormBootstrap.Control ref={inputRef} type="text" placeholder="Enter city" />
        </FormBootstrap.Group>

        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
        <Button onClick={handleReset} variant="warning" className="mx-3" type="reset">
          Reset
        </Button>

      </FormBootstrap>
      <Result isLoading={isLoading} error={error} temperature={temperature} />
    </div>
  );
}
