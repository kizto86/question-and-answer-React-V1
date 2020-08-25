import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import CreateQuestionForm from "./components/CreateQuestionForm";

afterEach(cleanup);

describe("Question Form", () => {
  it("Renders <CreateQuestionForm/> component correctly", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);

    expect(getByText(/Create new question/i)).not.toBeNull();
    expect(getByLabelText(/Name/i)).not.toBeNull();
    expect(getByLabelText(/Title/i)).not.toBeNull();
    expect(getByLabelText(/Description/i)).not.toBeNull();
    expect(getByText(/Submit Question/i)).not.toBeNull();
  });

  it("checks if the Name input text updates the state correctly", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Name/i).textContent).toBe("Name:");
    fireEvent.change(getByLabelText("Name:"), { target: { value: "Text" } });
    expect(getByText(/Name/i).textContent).not.toBe("Name: ");
  });

  it("checks if the Title input text updates the state correctly", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Title/i).textContent).toBe("Title:");
    fireEvent.change(getByLabelText("Title:"), { target: { value: "Text" } });
    expect(getByText(/Title/i).textContent).not.toBe("Title: ");
  });

  it("checks if the Description input text updates the state correctly", () => {
    const { getByText, getByLabelText } = render(<CreateQuestionForm />);
    expect(getByText(/Description/i).textContent).toBe("Description:");
    fireEvent.change(getByLabelText("Description:"), {
      target: { value: "Text" },
    });
    expect(getByText(/Description/i).textContent).not.toBe("Description: ");
  });
});
