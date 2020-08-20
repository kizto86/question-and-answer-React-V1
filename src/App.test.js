import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, cleanup } from "@testing-library/react";
import CreateQuestionForm from "./components/CreateQuestionForm";
import CreateAnswerForm from "./components/CreateAnswerForm";

afterEach(cleanup);
describe("Question Form", () => {
  it("Ensures that  the correct content is rendered", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);

    expect(getByText(/Create new question/i)).not.toBeNull();
    expect(getByLabelText(/Name/i)).not.toBeNull();
    expect(getByLabelText(/Title/i)).not.toBeNull();
    expect(getByLabelText(/Description/i)).not.toBeNull();
    expect(getByText(/Submit Question/i)).not.toBeNull();
  });

  it("checks if the input text updates the state", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Name/i).textContent).toBe("Name:");
    fireEvent.change(getByLabelText("Name:"), { target: { value: "Text" } });
    expect(getByText(/Name/i).textContent).toBe("Name:");
  });
});

describe("Answer Form", () => {
  it("Ensures that  the correct content is rendered", () => {
    const history = createMemoryHistory();
    const route = "/create-answer-to/:questionId";
    history.push(route);
    const { getByText, getByLabelText } = render(
      <Router history={history}>
        <CreateAnswerForm />
      </Router>
    );

    expect(getByText(/Create a new answer/i)).not.toBeNull();
    expect(getByLabelText(/Answer/i)).not.toBeNull();
    expect(getByText(/Submit Answer/i)).not.toBeNull();
  });
});
