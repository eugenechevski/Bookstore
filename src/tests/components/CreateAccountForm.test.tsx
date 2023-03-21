import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { App } from 'components/App';

describe("CreateAccountForm component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/create-account']}>
              <App></App>
            </MemoryRouter>
        )
    });

    it("displays the first name field", () => {
      expect(screen.getByLabelText("First Name")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("John")).toBeInTheDocument();
    });

    it("displays the last name field", () => {
        expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Doe")).toBeInTheDocument();        
    });

    it("displays the email field", () => {
        expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("john.doe@example.com")).toBeInTheDocument();
    });

    it("displays the password field", () => {
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
    });

    it("displays the confirm password field", () => {
        expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    });

    it("allows to input the first name", () => {
       const firstNameInput = screen.getByPlaceholderText("John") as HTMLInputElement;

       userEvent.type(firstNameInput, "John");

       expect(firstNameInput.value).toBe("John");
    });

    it("allows to input the last name", () => {
      const lastNameInput = screen.getByPlaceholderText("Doe") as HTMLInputElement;
      
      userEvent.type(lastNameInput, "Doe");

      expect(lastNameInput.value).toBe("Doe");
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

    it("allows to input the confirm password", () => {
      const confirmPasswordInput = screen.getByPlaceholderText("confirm password") as HTMLInputElement;

      userEvent.type(confirmPasswordInput, "#gasBa$e1");

      expect(confirmPasswordInput.value).toBe("#gasBa$e1");
    });

    it("submits the form with the valid inputs", () => {
      const submitButton = screen.getByText("Create") as HTMLButtonElement;
      const afterSubmit = jest.fn();  

      submitButton.addEventListener("click", afterSubmit);
      userEvent.click(submitButton);

      expect(afterSubmit).toHaveBeenCalled();
    });
});