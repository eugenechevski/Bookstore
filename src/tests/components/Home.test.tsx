import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import DataObject from 'utils/DataObject';
import { App } from 'components/App';

describe("Home component", () => {
    const categories = DataObject.getCategories();
    
    beforeEach(() => {
        render(
          <MemoryRouter initialEntries={['/home']}>
            <App></App>
          </MemoryRouter>
        );
    });    
    
    it("renders category names", () => {
        for (let i = 0; i < categories.length; i++) {
            expect(screen.getAllByText(categories[i].getName()).length).toBe(2);
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