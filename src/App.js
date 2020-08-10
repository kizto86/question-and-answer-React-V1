import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import CreateQuestionForm from "./components/CreateQuestionForm";
import Questions from "./components/Questions";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Questions} />
        <Route path="/create-question" component={CreateQuestionForm} />
      </div>
    </Router>
  );
};

export default App;
