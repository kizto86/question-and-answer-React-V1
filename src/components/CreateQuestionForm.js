import React, { Component } from "react";
import axios from "axios";

export default class CreateQuestionForm extends Component {
  state = {
    username: "",
    question_title: "",
    question_description: "",
  };

  changeHandler = (e) => {
    e.persist();
    let value = e.target.value;

    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: value,
    }));
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const question = {
      username: this.state.username,
      question_title: this.state.question_title,
      question_description: this.state.question_description,
    };
    axios
      .post("http://localhost:3002/questions", question)
      .then((res) => console.log(res.data));
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create new question</h3>
        <form data-testid="form" onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              name="username"
              id="username"
              required
              placeholder="Username"
              className="form-control"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="question_title">Title:</label>
            <input
              type="text"
              name="question_title"
              id="question_title"
              required
              placeholder="Title of Question"
              className="form-control"
              value={this.state.question_title}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="question_description">Description:</label>
            <textarea
              name="question_description"
              id="question_description"
              rows="5"
              cols="5"
              required
              placeholder="Description of Question"
              className="form-control"
              value={this.state.question_description}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit Question"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
