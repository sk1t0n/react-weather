import React from 'react';
import FormBootstrap from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Form.module.css';

function Form(props) {
  return (
    <FormBootstrap className={styles.Form}>
      <FormBootstrap.Group className="mb-3" controlId="city">
        <FormBootstrap.Label>City</FormBootstrap.Label>
        <FormBootstrap.Control type="text" placeholder="Enter city" />
      </FormBootstrap.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </FormBootstrap>
  );
}

export { Form };
