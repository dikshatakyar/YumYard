import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases : ", () => {
  test("Should load Contact Page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //getByRole - roles defined by jest

    expect(heading).toBeInTheDocument();
  });

  test("Should load Contact Page text", () => {
    render(<Contact />);

    const msg = screen.getByText("Submit");
    //getByRole - roles defined by jest

    expect(msg).toBeInTheDocument();
  });

  it("should load all the input in Contact Page", () => {
    render(<Contact />);

    //querying
    const input = screen.getAllByRole("textbox");

    // console.log(input);

    expect(input.length).toBe(2);
  });
});
