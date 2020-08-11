import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CreateAnswerForm = (props) => {
const { questionId } = useParams();
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = {
      content: content,
      question: questionId,
    };
    axios
      .post(`http://localhost:3002/questions/${questionId}/answer`, answer)
      .then((res) => console.log(res.data));

    console.log(answer)
    //window.location = "/";
    setContent("")
  };


  return (
    <div>
      <h3>Create a new question {questionId}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Answer:</label>
          <textarea
            name="answer"
            id="answer"
            rows="5"
            cols="5"
            required
            placeholder="Answer"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Submit Answer"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateAnswerForm;
