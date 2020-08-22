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

  it("checks if the Name input text updates the state", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Name/i).textContent).toBe("Name:");
    fireEvent.change(getByLabelText("Name:"), { target: { value: "Text" } });
    expect(getByText(/Name/i).textContent).not.toBe("Name: ");
  });

  it("checks if the Title input text updates the state", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Title/i).textContent).toBe("Title:");
    fireEvent.change(getByLabelText("Title:"), { target: { value: "Text" } });
    expect(getByText(/Title/i).textContent).not.toBe("Title: ");
  });

  it("checks if the Description input text updates the state", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Description/i).textContent).toBe("Description:");
    fireEvent.change(getByLabelText("Description:"), {
      target: { value: "Text" },
    });
    expect(getByText(/Description/i).textContent).not.toBe("Description: ");
  });
});

describe("Answer Form", () => {
  it("render the correct content", () => {
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
  it("Input text updates the state", () => {
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
