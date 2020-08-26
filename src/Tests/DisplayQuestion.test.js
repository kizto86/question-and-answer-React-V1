import React from "react";
import DisplayQuestions from "../components/DisplayQuestions";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const question = {
  question_title: "test",
  question_description: "test",
};

describe("Display Question", () => {
  it("renders without a prop", () => {
    act(() => {
      render(<DisplayQuestions />, container);
    });
    expect(container.textContent).toBe("No question specified.");
  });

  it("renders the prop passed to it", () => {
    act(() => {
      render(
        <Router>
          <DisplayQuestions question={question} />
        </Router>,
        container
      );
    });
    expect(container.textContent).toBe("testtestCreate answer");
  });
});
