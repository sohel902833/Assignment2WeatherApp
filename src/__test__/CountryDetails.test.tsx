import React from "react";
import { render, screen } from "@testing-library/react";
import CountryDetails from "../components/pages/CountryDetails";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
test("Country details render test", () => {
  const history = createMemoryHistory();
  history.push("/details/bd");

  render(
    <Router history={history}>
      <CountryDetails />
    </Router>
  );
  const countryDetails = screen.getByTestId("countryDetails");
  expect(countryDetails).toBeInTheDocument();
});
