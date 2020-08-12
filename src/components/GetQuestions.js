import React, { Component } from "react";

import axios from "axios";

import DisplayQuestion from "./DisplayQuestions";

export default class GetQuestions extends Component {
  state = {
    questions: [],
    answers: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:3002/questions/")
      .then((response) => {
        this.setState({ questions: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    const ans = this.state.questions;
    ans.forEach((question) => {
      axios
        .get(`http://localhost:3002/questions/${question._id}/answers`)
        .then((response) => {
          this.setState((state) => state.answers.push(response.data));
        })

        .catch((error) => {
          console.log(error);
        });
    });
  }
  render() {
    return (
      <div>
        {this.state.questions.map((question) => (
          <DisplayQuestion
            question={question}
            key={question._id}
            answer={this.state.answers}
          />
        ))}
      </div>
    );
  }
}
