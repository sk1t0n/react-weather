import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { Loader } from '../Loader';

function Result(props) {
  const { isLoading, error, temperature } = props;

  return (
    <div className="mt-5">
      { isLoading ? <Loader/> : null }
      
      { error !== null ? (
        <Alert variant="danger">{ error }</Alert>
      ) : null }
      
      { temperature !== null ? (
        <Alert variant="info">
          <p>Temperature in degrees: 
            <span className="float-end">{ temperature.temp_c } &#8451;</span>
          </p>
          <p>Temperature in fahrenheit: 
            <span className="float-end">{ temperature.temp_f } &#8457;</span>
          </p>
        </Alert>
      ) : null }
    </div>
  );
}

export { Result };
