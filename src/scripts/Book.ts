/**
 * A factory function that returns a book object.
 * It uses the data from the book object in the database to create an interface for the book.
 * 
 * @param title - The title of the book
 * @param authorName - The name of the author
 * @param categoryName - The name of the category
 * @param coverUrl - The url of the cover image
 * @param rank - The rank of the book
 * @param description - The synopsis of the book
 * @returns - A book object
 */
export default function Book(
  title: string,
  authorName: string,
  categoryName: string,
  coverUrl: string,
  rank: number,
  description: string
): Book {
  // Private variables
  const formattedTitle = title.toLowerCase().split(" ").join("-");
  const formattedCategoryName = categoryName.toLowerCase().split(" ").join("-");

  // Public methods

  function getTitle(): string {
    return title;
  }

  function getFormattedTitle(): string {
    return formattedTitle;
  }

  function getCategoryName(): string {
    return categoryName;
  }

  function getFormattedCategoryName(): string {
    return formattedCategoryName;
  }

  function getAuthorName(): string {
    return authorName;
  }

  function getCoverUrl(): string {
    return coverUrl;
  }

  function getRank(): number {
    return rank;
  }

  function getSynopsis(): string {
    return description;
  }

  return {
    getTitle,
    getFormattedTitle,
    getFormattedCategoryName,
    getCategoryName,
    getAuthorName,
    getCoverUrl,
    getRank,
    getSynopsis,
  };
}
