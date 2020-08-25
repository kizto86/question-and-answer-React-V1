import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "@testing-library/react";
import CreateAnswerForm from "./components/CreateAnswerForm";

afterEach(cleanup);

describe("Answer Form", () => {
  it("Renders <CreateAnswerForm/> component correctly", () => {
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
  it("Checks if the Input text updates the state correctly", () => {
    const history = createMemoryHistory();
    const route = "/create-answer-to/:questionId";
    history.push(route);
    const { getAllByText, getByLabelText } = render(
      <Router history={history}>
        <CreateAnswerForm />
      </Router>
    );
    expect(getAllByText(/Answer/i).textContent).toBe("Answer");
    fireEvent.change(getByLabelText("Answer:"), { target: { value: "Text" } });
    expect(getAllByText(/Answer/i).textContent).not.toBe("Answer: ");
  });
});
