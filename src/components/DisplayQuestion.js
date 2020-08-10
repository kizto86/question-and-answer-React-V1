import React from "react";

import { Accordion, Card } from "react-bootstrap";

const DisplayQuestion = (props) => (
  <div>
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            {props.question.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{props.question.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </div>
);

export default DisplayQuestion;
