import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import DataObject from 'utils/DataObject';
import Category from 'components/category/Category';

describe("Category component", () => {
  it('renders categories', async () => {
    const categories = (await DataObject().then(createDataObject => createDataObject())).getCategories();

    for (let i = 0; i < categories.length; i++) {
      render(
        <MemoryRouter>
          <Category testCategory={categories[i]}/>
        </MemoryRouter>
      );

      // Checking the category name
      expect(screen.getByText(categories[i].getName())).toBeInTheDocument();

      // Checking the books
      const books = categories[i].getBooks();
      for (let j = 0; j < books.length; j++) {
        expect(screen.getByAltText(books[j].getTitle() + ' cover')).toBeInTheDocument();
        expect(screen.getByText('# ' + books[j].getRank())).toBeInTheDocument();
        expect(screen.getAllByTestId("synopsis")[j].textContent).toBe(books[j].getSynopsis());
      }

      cleanup();
    }
  });
});