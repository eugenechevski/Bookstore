import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import DataObject from 'utils/DataObject';
import { App } from 'components/App';
import userEvent from '@testing-library/user-event';

describe("Book component", () => {
  
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/home']}>
            <App></App>
          </MemoryRouter>
        );
      });
      
      it('renders individual book profiles', () => {
        const books = DataObject.getBooks();
        for (let i = 0; i < books.length; i++) {
          const matchingBook = screen.getAllByAltText(books[i].getTitle() + ' cover')[0];

          userEvent.click(matchingBook);

          expect(screen.getByText(books[i].getTitle())).toBeInTheDocument(); // title
          expect(screen.getByText(books[i].getAuthorName())).toBeInTheDocument(); // author
          expect(screen.getByAltText(books[i].getTitle() + ' cover')).toBeInTheDocument(); // cover
          expect(screen.getByText(books[i].getSynopsis())).toBeInTheDocument(); // summary

          expect(screen.getByText(/Show More/i)).toBeInTheDocument();
          expect(screen.getByTestId("add-buttons")).toBeInTheDocument(); // add buttons
          expect(screen.getByText('Buy at these providers')).toBeInTheDocument();
          expect(screen.getByText('AMZN')).toBeInTheDocument();
          expect(screen.getByText('APPLE')).toBeInTheDocument();
          expect(screen.getByText('B & N')).toBeInTheDocument();
        }
    });
});
