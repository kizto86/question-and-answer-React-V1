import React, { Component } from "react";
import axios from "axios";

export default class CreateQuestionForm extends Component {
  state = {
    name: "",
    title: "",
    description: "",
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
      name: this.state.name,
      title: this.state.title,
      description: this.state.description,
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
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Username"
              className="form-control"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              placeholder="Title of Question"
              className="form-control"
              value={this.state.title}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              id="description"
              rows="5"
              cols="5"
              required
              placeholder="Description of Question"
              className="form-control"
              value={this.state.description}
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
