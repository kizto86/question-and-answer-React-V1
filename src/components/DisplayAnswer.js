import React from "react";
import { Card } from "react-bootstrap";

const DisplayAnswer = (props) => (
  <div>
    <Card>
      <Card.Body>{props.answer.content}</Card.Body>
    </Card>
  </div>
);

export default DisplayAnswer;
