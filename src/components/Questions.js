import React, { Component } from "react";

import axios from "axios";

import DisplayQuestion from "./DisplayQuestion";

export default class ListQuestions extends Component {
  state = { questions: [] };

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
  render() {
    return (
      <div>
        {this.state.questions.map((question) => (
          <DisplayQuestion question={question} key={question._id} />
        ))}
      </div>
    );
  }
}
