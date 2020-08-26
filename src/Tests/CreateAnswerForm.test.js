import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup } from "@testing-library/react";
import CreateAnswerForm from "../Tests/CreateAnswerForm.test";

afterEach(cleanup);

describe("Answer Form", () => {
  it("Renders CreateAnswerForm component correctly", () => {
    const history = createMemoryHistory();
    const route = "/create-answer-to/:questionId";
    history.push(route);
    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <CreateAnswerForm />
      </Router>
    );

    expect(getByText(/Create a new answer/i).textContent).toBe(
      "Create a new answer"
    );
    expect(getByLabelText(/Answer/i)).not.toBeNull();
    expect(getByText(/Submit Answer/i)).not.toBeNull();
  });
});
