import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import axios from "axios";

const Question = (props) => (
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

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = { questions: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3002/questions/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  questionList = () => {
    return this.state.questions.map((question) => {
      return <Question question={question} key={question._id} />;
    });
  };

  render() {
    return <div>{this.questionList()}</div>;
  }
}
