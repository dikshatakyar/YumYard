import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/fetchData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should search restaurant list with burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  //screen should load 3 cards

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(3);
});

it("should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const listBeforeTopRated = screen.getAllByTestId("resCard");

  expect(listBeforeTopRated.length).toBe(20);

  const topRatedBtn = screen.getByTestId("topRated");

  fireEvent.click(topRatedBtn);

  const listAfterTopRated = screen.getAllByTestId("resCard");

  expect(listAfterTopRated.length).toBe(17);
});
