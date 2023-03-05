import React from 'react';
import { getByText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from 'components/App';

describe("App component", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
    });

    it("displays the welcome message", () => {
        expect(screen.getByText(/Welcome to Garden of Books/)).toBeInTheDocument()
    });

    it("displays the Create account button", () => {
        expect(screen.getByText(/Create Account/)).toBeInTheDocument();
    });

    it("redirects to the Create Accont page after the button is clicked", () => {
        const redirect = jest.fn(); // mocks the redirect function
        const createAccountButton = screen.getByText(/Create Account/); // gets the button
        createAccountButton.addEventListener('click', () => redirect()); 

        userEvent.click(createAccountButton); // fires the click event
        expect(redirect).toHaveBeenCalledTimes(1); // tests that the redirect function was called once
    });

    it("displays the Returning user? button", () => {
        expect(screen.getByText(/Returning user?/)).toBeInTheDocument();
    });

    it("redirects to the Login page after the button is clicked", () => {
        const redirect = jest.fn(); // mocks the redirect function
        const returningUserButton = screen.getByText(/Returning user?/); // gets the button
        returningUserButton.addEventListener('click', () => redirect()); 
        
        userEvent.click(returningUserButton); // fires the click event
        expect(redirect).toHaveBeenCalledTimes(1); // tests that the redirect function was called once
    });

    it("displays the Procceed as Guest button", () => {
        expect(screen.getByText(/Procceed as Guest/)).toBeInTheDocument();
    })

    it("redirects to the Home page after the button is clicked", () => {
        const redirect = jest.fn(); // mocks the redirect function
        const procceedAsGuestButton = screen.getByText(/Procceed as Guest/); // gets the button
        procceedAsGuestButton.addEventListener('click', () => redirect()); 
        
        userEvent.click(procceedAsGuestButton); // fires the click event
        expect(redirect).toHaveBeenCalledTimes(1); // tests that the redirect function was called once
    });

    it("displays the Powered by New York Times text", () => {
        expect(screen.getByText(/Powered by New York Times/)).toBeInTheDocument();  
    });
});