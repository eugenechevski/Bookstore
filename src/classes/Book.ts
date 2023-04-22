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
   * @param buyLinks - The buy links of the book
   */
  constructor(
    private title: string,
    private authorName: string,
    private categoryName: string,
    private coverUrl: string,
    private rank: number,
    private description: string,
    private buyLinks?: { name: string, url: string }[]
  ) {
    this.title = title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    this.formattedTitle = title.toLowerCase().split(" ").join("-");
    this.formattedCategoryName = categoryName.toLowerCase().split(" ").join("-");

    // Only include Amazon, Barnes and Noble, and Apple Books
    if (buyLinks) {
      this.buyLinks = [];

      for (const link of buyLinks) {
        if (link.name === 'Amazon' || 
            link.name === 'Barnes and Noble' ||
            link.name === 'Apple Books') {
              this.buyLinks.push(link);
            }
      }
    }
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

  /**
   * Gets the buy links of the book.
   * 
   * @returns - The buy links of the book
  */

  getBuyLinks(): { name: string; url: string; }[] | undefined {
    return this.buyLinks;
  }
}