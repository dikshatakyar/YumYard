import RestaurantCard, { isRestaurantOpened } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurant card component with mock data", () => {
  render(<RestaurantCard {...MOCK_DATA} />);
  //   render(RestaurantCard({ ...MOCK_DATA }));

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("should render restaurant card component with Opened label", () => {
  //   render(<isRestaurantOpened {...MOCK_DATA} />);
  const OpenedRestaurant = isRestaurantOpened(RestaurantCard);

  render(<OpenedRestaurant {...MOCK_DATA} />);

  const isOpened = screen.getByText("Opened");

  expect(isOpened).toBeInTheDocument();
});
