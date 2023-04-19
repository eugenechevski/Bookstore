// This test renders the Book component with a given book as a prop and checks that the component is rendering the correct information.
// It also checks that the component is rendering the correct buttons and text.
// The test checks the book's title, author, cover, and summary, as well as the buttons and text that should be present on the page.

import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import DataObject from 'utils/DataObject';
import userEvent from '@testing-library/user-event';
import BookComponent from 'components/book/BookComponent';

describe("Book component", () => {
  it('renders individual book profiles', async () => {
    const books = (await DataObject().then(createDataObject => createDataObject())).getBooks();
    const testedBooks = new Set<string>([books[0].getTitle()]);
    
    render(
      <MemoryRouter>
        <BookComponent testBook={books[0]}/>
      </MemoryRouter>
    )

    expect(screen.getByTestId("add-buttons")).toBeInTheDocument(); // add buttons
    expect(screen.getByText('Buy at these providers')).toBeInTheDocument();
    expect(screen.getByText('AMZN')).toBeInTheDocument();
    expect(screen.getByText('B & N')).toBeInTheDocument();
    expect(screen.getByText('APPLE')).toBeInTheDocument();

    cleanup();

    // Check the book's information
    for (let i = 0; i < books.length; i++) {
      if (testedBooks.has(books[i].getTitle())) continue;
      testedBooks.add(books[i].getTitle());

      render(
        <MemoryRouter>
          <BookComponent testBook={books[i]}/>
        </MemoryRouter>
      )

      userEvent.click(screen.getByText(/Show More/i));

      expect(screen.getByTestId('title').textContent).toBe(books[i].getTitle()); // title
      expect(screen.getByTestId('author').textContent).toBe(books[i].getAuthorName()); // author
      expect(screen.getByAltText(books[i].getTitle() + ' cover')).toBeInTheDocument(); // cover
      expect(screen.getByTestId('synopsis').textContent).toBe(books[i].getSynopsis()); // synopsis

      userEvent.click(screen.getByText(/Show Less/i));

      cleanup()
    }
  });
});
