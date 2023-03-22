import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import DataObject from 'utils/DataObject';
import { App } from 'components/App';
import userEvent from '@testing-library/user-event';

describe("Category component", () => {
    const categories = DataObject.getCategories();
    
    beforeEach(() => {
        render(
          <MemoryRouter initialEntries={['/home']}>
            <App></App>
          </MemoryRouter>
        );
    });

    it('renders categories', () => {
      for (let i = 0; i < categories.length; i++) {
        userEvent.click(screen.getAllByText(categories[i].getName())[0]);
        
        // Checking the category name
        expect(screen.getAllByText(categories[i].getName()).length).toBeGreaterThanOrEqual(2);

        const books = categories[i].getBooks();
        for (let j = 0; j < books.length; j++) {
          // Checking the books
          expect(screen.getAllByAltText(books[j].getTitle() + ' cover').length).toBe(books.length);
          expect(screen.getByText('# ' + books[j].getRank())).toBeInTheDocument();
          expect(screen.getAllByText(books[j].getSynopsis()).length).toBe(books.length);
        }
      }
    });
});