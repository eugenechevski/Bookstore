import Book from 'scripts/Book';

describe('Book factory', () => {
  const testBook = Book('1984', 'George Orwell', 'Fiction', 'cover', 1, 1, 'synopsis');

  it('returns the title', () => {
    expect(testBook.getTitle()).toBe('1984');
  });

  it('return the book\' category name', () => {
    expect(testBook.getCategoryName()).toBe('Fiction');
  });

  it('return the formatted title', () => {
    expect(testBook.getFormattedTitle()).toBe(testBook.getTitle().toLowerCase().split(' ').join('-'));
  });

  it('return the author', () => {
    expect(testBook.getAuthorName()).toBe('George Orwell');
  });

  it('return the cover', () => {
    expect(testBook.getCover()).toBe('cover');
  });

  it('returns the rank', () => {
    expect(testBook.getRank()).toBe(1);
  });

  it('returns the quantity', () => {
    expect(testBook.getQuantity()).toBe(1);
  });

  it('return the synopsis', () => {
    expect(testBook.getSynopsis()).toBe('synopsis');
  });
});