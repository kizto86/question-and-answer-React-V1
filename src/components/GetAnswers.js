import React, { Component } from "react";
import { withRouter } from "react-router";

import axios from "axios";

import DisplayAnswer from "./DisplayAnswers";

class GetAnswers extends Component {
  state = { data: {} };

  componentDidMount() {
    const questionId = this.props.question;
    axios
      .get(`http://localhost:3002/questions/${questionId}/answers`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const length =
      this.state.data.answers !== undefined
        ? this.state.data.answers.length
        : 0;
    if (length > 0) {
      return (
        <div>
          {this.state.data.answers.map((answer) => (
            <DisplayAnswer answer={answer} key={answer._id} />
          ))}
        </div>
      );
    } else return <p></p>;
  }
}

export default withRouter(GetAnswers);
