import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Home from 'components/home/Home';
import dataFetch from 'src/utils/dataFetch';

describe("Home component", () => {
    const categories = dataFetch.getCategories();

    beforeEach(() => {
        render(
            <MemoryRouter>
                <Home categories={dataFetch.getCategories()}></Home>
            </MemoryRouter>
        )
    });

    it("renders category names", () => {
        for (let i = 0; i < categories.length; i++) {
            expect(screen.getAllByText(categories[i].getName()).length).toBeGreaterThan(0);
        }
    });

    it("displays bookcovers", () => {
        for (let i = 0; i < categories.length; i++) {
            const books = categories[i].getBooks();
            for (let j = 0; j < books.length; j++) {
                expect(screen.getAllByAltText(books[j].getTitle() + " image").length).toBeGreaterThan(0);
            }
        }
    });

    it("redirects to a book's page", () => {
        const redirect = jest.fn();
        for (let i = 0; i < categories.length; i++) {
            for (let j = 0; j < categories[i].getBooks().length; j++) {
                const book = screen.getAllByAltText(categories[i].getBooks()[j].getTitle() + " image")[0];

                book.addEventListener("click", () => redirect());
                userEvent.click(book);

                expect(redirect).toHaveBeenCalled();
            }
        }
    });

});