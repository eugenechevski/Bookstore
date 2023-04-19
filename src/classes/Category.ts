/**
 * Represents a category object with various properties and methods.
 */
export default class Category {
  private formattedName: string;

  /**
   * Creates a new Category object.
   * 
   * @param name - The name of the category.
   * @param books - An array of books associated with the category.
   */
  constructor(private name: string, private books: IBook[]) {
    this.formattedName = name.toLowerCase().split(' ').join('-');
  }

  /**
   * Gets the name of the category.
   * 
   * @returns - The name of the category.
   */
  getName(): string {
    return this.name;
  }

  /**
   * Gets the formatted name of the category.
   * 
   * @returns - The formatted name of the category.
   */
  getFormattedName(): string {
    return this.formattedName;
  }

  /**
   * Gets the books associated with the category.
   * 
   * @returns - An array of books associated with the category.
   */
  getBooks(): IBook[] {
    return this.books;
  }
}
