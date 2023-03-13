import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import User from 'scripts/User';
import Book from 'scripts/Book';
import userEvent from '@testing-library/user-event';
import NavBar from 'components/general/NavBar';

describe("NavBar component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar userProp={User('John Doe', '', '', [Book("1984", "", 1, 1, "")], [Book("1984", "", 1, 1, "")], true)}></NavBar>
      </MemoryRouter>
    )
  })

  it("displays the hamburger button", () => {
    expect(screen.getByTestId('hamburger')).toBeInTheDocument();
  });

  it("displays the logo", () => {
    expect(screen.getByText('Garden of Books.')).toBeInTheDocument();
  });

  it("displays the search bar", () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it("displays the search button", () => {
    expect(screen.getByTestId('search-button')).toBeInTheDocument();
  });

  it("displays the toggle for tools", () => {
    expect(screen.getByTestId('tools-toggle')).toBeInTheDocument();
  });

  it("displays the wishlist button", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    expect(screen.getByTestId("wishlist-toggle")).toBeInTheDocument();
  });

  it("displays the wishlist dropdown", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    userEvent.click(screen.getByTestId("wishlist-toggle"));
    expect(screen.getByTestId("wishlist-dropdown")).toBeInTheDocument();
  });

  it("displays the wishlish item", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    userEvent.click(screen.getByTestId("wishlist-toggle"));
    expect(screen.getAllByText("1984").length).toBeGreaterThan(0);
  });

  it("displays the cart button", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    expect(screen.getByTestId("cart-toggle")).toBeInTheDocument();
  });

  it("displays the cart dropdown", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    userEvent.click(screen.getByTestId("cart-toggle"));
    expect(screen.getByTestId("cart-dropdown")).toBeInTheDocument();
  });

  it("displays the cart item", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    userEvent.click(screen.getByTestId("cart-toggle"));
    expect(screen.getAllByText("1984").length).toBeGreaterThan(0);
  });

  it("it displays the user toggle", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    expect(screen.getByTestId("user-toggle")).toBeInTheDocument();
  });

  it("it displays the user name", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("it displays the login/logout button", () => {
    userEvent.click(screen.getByTestId('tools-toggle'));
    expect(screen.getByTestId("sign-toggle")).toBeInTheDocument();
  });


});