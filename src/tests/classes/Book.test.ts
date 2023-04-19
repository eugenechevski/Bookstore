import { mockBook } from "utils/constants";

describe('Book factory', () => {
  it('returns the title', () => {
    expect(mockBook.getTitle()).toBe('Harry Potter');
  });

  it('return the book\' category name', () => {
    expect(mockBook.getCategoryName()).toBe('Fantasy');
  });

  it('return the formatted title', () => {
    expect(mockBook.getFormattedTitle()).toBe(mockBook.getTitle().toLowerCase().split(' ').join('-'));
  });

  it('return the author', () => {
    expect(mockBook.getAuthorName()).toBe('K. Rowling');
  });

  it('return the cover', () => {
    expect(mockBook.getCoverUrl().length).toBe(0);
  });

  it('returns the rank', () => {
    expect(mockBook.getRank()).toBe(1);
  });

  it('return the synopsis', () => {
    expect(mockBook.getSynopsis()).toBe('');
  });
});