import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import CreateQuestion from "./components/CreateQuestion";
import ListQuestions from "./components/ListQuestions";
import CreateAnswer from "./components/CreateAnswer";

const App = () => {
  return (
    <Router>
        <div className="container">
            <Navbar />



      <br />
      <Route path="/" exact component={ListQuestions} />
      <Route path="/create" component={CreateQuestion} />
      <Route path="/answer/:id" component={CreateAnswer} />

        </div>
    </Router>
  );
};

export default App;
