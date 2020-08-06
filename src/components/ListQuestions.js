import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'

const Question = props

export default class ListQuestions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/questions').
        then(response =>{
          this.setState({
            questions:response.data
          })
              .catch((error)=>{
                console.log("Error while parsing response", error)
              })
    })
  }

  questionList=()=>{
    this.state.questions.map(question =>{
      <Question question={question} key={question._id}/>
    })
  }

  render() {
    return (
      <div>
        <p>List of Questions</p>
        <table className="table">
          <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
          </tr>

          </thead>
          <tbody>
          {this.questionsList()}
          </tbody>
        </table>
      </div>
    );
  }
}
