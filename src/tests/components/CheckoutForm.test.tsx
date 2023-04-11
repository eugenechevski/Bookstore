import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "components/forms/CheckoutForm";
import { dummyUser } from "utils/constants";

describe("CheckoutForm component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CheckoutForm testUser={dummyUser}></CheckoutForm>
      </MemoryRouter>
    );
  });

  it("displays the checkout button", () => {
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  });

  it("displays the bookcovers of the cart items", () => {
    expect(screen.getAllByAltText(/Harry Potter\d cover/i).length).toBe(5);
  });

  it("displays the titles of the cart items", () => {
    expect(screen.getAllByText(/Harry Potter\d/i)).toHaveLength(5);
  });

  it("displays the quantity of the cart items", () => {
    expect(screen.getAllByText("Q-ty").length).toBe(5);
    expect(screen.getByText("1x")).toBeInTheDocument();
    expect(screen.getByText("2x")).toBeInTheDocument();
    expect(screen.getByText("3x")).toBeInTheDocument();
    expect(screen.getByText("4x")).toBeInTheDocument();
    expect(screen.getByText("5x")).toBeInTheDocument();
  });

  it("redirects to the after-checkout page when the checkout button is clicked", () => {
    const checkout = jest.fn();
    const checkoutButton = screen.getByText(/Checkout/i);

    checkoutButton.addEventListener("click", checkout);
    userEvent.click(checkoutButton);

    expect(checkout).toHaveBeenCalled();
  });
});
