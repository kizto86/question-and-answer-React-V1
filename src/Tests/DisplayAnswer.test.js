import React from "react";
import DisplayAnswers from "../components/DisplayAnswers";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

const answer = {
  content: "test",
};
describe("Display Answer", () => {
  it("renders without no prop", () => {
    act(() => {
      render(<DisplayAnswers />, container);
    });
    expect(container.textContent).toBe("No prop passed to the component");
  });
  it("renders the prop passed to it", () => {
    act(() => {
      render(<DisplayAnswers answer={answer} />, container);
    });
    expect(container.textContent).toBe("test");
  });
});
