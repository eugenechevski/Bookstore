/**
 * Represents a book object with various properties and methods.
 */
export default class Book implements IBook{
  private formattedTitle: string;
  private formattedCategoryName: string;

  /**
   * Constructs a new `Book` object.
   * 
   * @param title - The title of the book
   * @param authorName - The name of the author
   * @param categoryName - The name of the category
   * @param coverUrl - The URL of the cover image
   * @param rank - The rank of the book
   * @param description - The synopsis of the book
   */
  constructor(
    private title: string,
    private authorName: string,
    private categoryName: string,
    private coverUrl: string,
    private rank: number,
    private description: string
  ) {
    this.formattedTitle = title.toLowerCase().split(" ").join("-");
    this.formattedCategoryName = categoryName.toLowerCase().split(" ").join("-");
  }

  /**
   * Gets the title of the book.
   * 
   * @returns - The title of the book
   */
  getTitle(): string {
    return this.title;
  }

  /**
   * Gets the formatted title of the book.
   * 
   * @returns - The formatted title of the book
   */
  getFormattedTitle(): string {
    return this.formattedTitle;
  }

  /**
   * Gets the category name of the book.
   * 
   * @returns - The category name of the book
   */
  getCategoryName(): string {
    return this.categoryName;
  }

  /**
   * Gets the formatted category name of the book.
   * 
   * @returns - The formatted category name of the book
   */
  getFormattedCategoryName(): string {
    return this.formattedCategoryName;
  }

  /**
   * Gets the author name of the book.
   * 
   * @returns - The author name of the book
   */
  getAuthorName(): string {
    return this.authorName;
  }

  /**
   * Gets the cover URL of the book.
   * 
   * @returns - The cover URL of the book
   */
  getCoverUrl(): string {
    return this.coverUrl;
  }

  /**
   * Gets the rank of the book.
   * 
   * @returns - The rank of the book
   */
  getRank(): number {
    return this.rank;
  }

  /**
   * Gets the synopsis of the book.
   * 
   * @returns - The synopsis of the book
   */
  getSynopsis(): string {
    return this.description;
  }
}