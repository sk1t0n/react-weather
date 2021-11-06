import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

export const InfoPage: React.FC = () => {
  return (
    <div className="max-width-600_center">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Weather source</Accordion.Header>
          <Accordion.Body>
            <h4>Free Weather API</h4>
            <a href="https://www.weatherapi.com/">https://www.weatherapi.com/</a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
