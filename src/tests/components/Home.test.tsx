import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import DataObject from 'utils/DataObject';
import Home from 'components/home/Home';

describe("Home component", () => {
    let categories: Category[];
    
    beforeAll(async () => {
      categories = (await DataObject()).getCategories();
    });

    beforeEach(async () => {
        cleanup();
        render(
          <MemoryRouter>
            <Home testCategories={categories}/>
          </MemoryRouter>
        );
    });

    it("renders category names", () => {
        for (let i = 0; i < categories.length; i++) {
            expect(screen.getByText(categories[i].getName())).toBeInTheDocument();
        }
    });

    it("displays bookcovers", () => {
        for (let i = 0; i < categories.length; i++) {
            const books = categories[i].getBooks();
            for (let j = 0; j < books.length; j++) {
                expect(screen.getAllByAltText(books[j].getTitle() + " cover").length).toBeGreaterThan(0);
            }
        }
    });
});