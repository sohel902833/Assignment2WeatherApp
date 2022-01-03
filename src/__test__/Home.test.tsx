import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/pages/Home";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
test("Country details render test", () => {
  const history = createMemoryHistory();
  history.push("/");

  render(
    <Router history={history}>
      <Home />
    </Router>
  );
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});
