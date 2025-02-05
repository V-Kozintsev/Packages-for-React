// src/components/Sum.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Sum from "./Sum";

test("renders the correct sum of two positive numbers", () => {
  render(<Sum a={5} b={3} />);
  const sumElement = screen.getByText(/The sum of 5 and 3 is: 8/i);
  expect(sumElement).toBeInTheDocument();
});

test("renders the correct sum of a positive and a negative number", () => {
  render(<Sum a={5} b={-2} />);
  const sumElement = screen.getByText(/The sum of 5 and -2 is: 3/i);
  expect(sumElement).toBeInTheDocument();
});

test("renders the correct sum of two negative numbers", () => {
  render(<Sum a={-5} b={-3} />);
  const sumElement = screen.getByText(/The sum of -5 and -3 is: -8/i);
  expect(sumElement).toBeInTheDocument();
});

test("renders the correct sum when one number is zero", () => {
  render(<Sum a={5} b={0} />);
  const sumElement = screen.getByText(/The sum of 5 and 0 is: 5/i);
  expect(sumElement).toBeInTheDocument();
});
