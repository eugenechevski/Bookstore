import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Book from 'scripts/Book';
import CheckoutForm from 'components/forms/CheckoutForm';

describe("CheckoutForm component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CheckoutForm cartItemsProp={[1, 2, 3, 4, 5].map((i) => Book("Harry Potter" + i, require("src/assets/images/bookcover.png"), i, i, "synopsis"))}></CheckoutForm>
      </MemoryRouter>
    )
  });

  it("displays the checkout button", () => {
    expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  });

  it("displays the bookcovers of the cart items", () => {
    expect(screen.getAllByAltText(/harry-potter\d-image/i).length).toBe(5);
  });

  it("displays the titles of the cart items", () => {
    expect(screen.getAllByText(/Harry Potter\d/i)).toHaveLength(5);
  });

  it("displays the quantity of the cart items", () => {
    expect(screen.getAllByText("Q-ty")).toHaveLength(5);
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