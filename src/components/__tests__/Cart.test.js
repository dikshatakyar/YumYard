import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import MENU_DATA from "../mocks/resMenu.json";
import appStore from "../../utils/AppStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  })
);

it("Should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <RestaurantMenu />
        <Cart />
      </Provider>
    )
  );

  const accordianHeader = screen.getByText("Plum Cakes (4)");

  fireEvent.click(accordianHeader);

  const foodItem = screen.getAllByTestId("foodItem");

  expect(foodItem.length).toBe(4);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtn[0]);

  const updatedCart = screen.getByText("Cart: 1 items");

  expect(updatedCart).toBeInTheDocument();

  //checking whether cart component has items or not

  expect(screen.getAllByTestId("foodItem").length).toBe(5);

  //clear cart
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getByText("ADD SOME ITEMS FIRST!")).toBeInTheDocument();
});
