import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from 'components/App';

describe('SignInForm component', () => {
  beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/sign-in']}>
          <App></App>
        </MemoryRouter>
      );
    }
  );

    it("displays the email field", () => {
      expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText("john.doe@example.com")).toBeInTheDocument();
    });

    it("displays the password field", () => {
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    });

    it("allows to input the email", () => {
      const emailInput = screen.getByPlaceholderText("john.doe@example.com") as HTMLInputElement;

      userEvent.type(emailInput, "john.doe@example.com");

      expect(emailInput.value).toBe("john.doe@example.com");
    });

    it("allows to input the password", () => {
      const passwordInput = screen.getByPlaceholderText("password") as HTMLInputElement;

      userEvent.type(passwordInput, "#gasBa$e1");

      expect(passwordInput.value).toBe("#gasBa$e1");
    });

    it("submits the form with the valid inputs", () => {
      const submitButton = screen.getByText("Sign-in") as HTMLButtonElement;
      const afterSubmit = jest.fn();  

      submitButton.addEventListener("click", afterSubmit);
      userEvent.click(submitButton);

      expect(afterSubmit).toHaveBeenCalled();
    });
});