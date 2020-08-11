import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateQuestionForm from "./components/CreateQuestionForm";
import Questions from "./components/Questions";
import CreateAnswerForm from "./components/CreateAnswerForm";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Questions} />
        <Route path="/create-question" component={CreateQuestionForm} />
        <Route path="/create-answer-to/:questionId" component={CreateAnswerForm} />
      </div>
    </Router>
  );
};

export default App;
