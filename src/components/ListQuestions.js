import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Question = (props) => (
  <tr>
    <td>{props.question._id}</td>
    <td>{props.question.title}</td>
    <td>{props.question.description}</td>
  </tr>
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
    return (
      <div>
        <p>List of Questions</p>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>{this.questionList()}</tbody>
        </table>
      </div>
    );
  }
}
