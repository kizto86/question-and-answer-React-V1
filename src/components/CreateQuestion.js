import React, { Component } from "react";
import axios from "axios";

export default class CreateQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
    };
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const question = {
      title: this.state.title,
      description: this.state.description,
    };
    axios
      .post("http://localhost:3002/questions", question)
      .then((res) => console.log(res.data));
    window.location = "/";
    this.setState("");
  };

  render() {
    return (
      <div>
        <h3>Create new question</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
          <div className="form-group">
            <label>Question</label>
            <input
              type="text"
              name="question"
              id="question"
              placeholder="Question"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create question"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
