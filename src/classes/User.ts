/**
 * Represents a User object with various properties and methods.
 */
export default class User implements IUser {
  private cartMap: {
    [title: string]: {
      book: IBook;
      timestamp: number;
      quantity: number;
    };
  } = {};
  private wishlistMap: {
    [title: string]: {
      book: IBook;
      timestamp: number;
    };
  } = {};

  // Stores a copy of the user's cart and wishlist from the database
  private dbCart = {} as UserCart;
  private dbWishlist = {} as UserWishList;

  // Stores the functions to update the database
  private updateCart: (cart: UserCart) => Promise<void>;
  private updateWishlist: (wishlist: UserWishList) => Promise<void>;

  /**
   * Creates a new User object.
   *
   * @param user - The user object from the database
   * @param bookMap - A map of all the books in the database
   */
  constructor(private user: UserData, private bookMap: BookMap) {
    // Create a map of books in the cart
    Object.keys(user.cart).forEach((cartItem) => {
      if (cartItem in bookMap) {
        this.cartMap[cartItem] = {
          book: bookMap[cartItem],
          quantity: user.cart[cartItem].quantity,
          timestamp: user.cart[cartItem].timestamp,
        };
      }
    });

    // Create a map of books in the wishlist
    Object.keys(user.wishlist).forEach((wishlistItem) => {
      if (wishlistItem in bookMap) {
        this.wishlistMap[wishlistItem] = {
          book: bookMap[wishlistItem],
          timestamp: user.wishlist[wishlistItem].timestamp,
        };
      }
    });

    this.dbCart = user.cart;
    this.dbWishlist = user.wishlist;
  }

  /**
   * Gets the name of the user.
   *
   * @returns - The name of the user.
   */
  getName(): string {
    return this.user.firstName + " " + this.user.lastName;
  }

  /**
   * Gets the email of the user.
   *
   * @returns - The email of the user.
   */
  getEmail(): string {
    return this.user.email;
  }

  /**
   * Gets the wishlist of the user.
   *
   * @returns - An array of books in the user's wishlist.
   */
  getWishlist(): IBook[] {
    return Object.values(this.wishlistMap)
      .sort((book1, book2) => book2.timestamp - book1.timestamp)
      .map((book) => book.book);
  }

  /**
   * Gets the cart of the user.
   *
   * @returns - An array of books in the user's cart.
   */
  getCart(): IBook[] {
    return Object.values(this.cartMap)
      .sort((book1, book2) => book2.timestamp - book1.timestamp)
      .map((book) => book.book);
  }

  /**
   * Gets the book from the user's cart by title.
   *
   * @param bookTitle - The title of the book.
   * @returns - The book from the user's cart.
   */
  getBookFromCart(bookTitle: string): IBook | undefined {
    return this.cartMap[bookTitle]?.book;
  }

  /**
   * Gets the book from the user's wishlist by title.
   *
   * @param bookTitle - The title of the book.
   * @returns - The book from the user's wishlist.
   */
  getBookFromWishlist(bookTitle: string): IBook | undefined {
    return this.wishlistMap[bookTitle]?.book;
  }

  /**
   * Gets the quantity of a book in the user's cart.
   *
   * @param bookTitle - The title of the book.
   * @returns - The quantity of the book in the user's cart.
   */
  getQuantity(bookTitle: string): number {
    return this.cartMap[bookTitle]?.quantity || 0;
  }

  /**
   * Updates the quantity of a book in the user's cart.
   *
   * @param bookTitle - The title of the book.
   * @param quantity - The new quantity of the book in the user's cart.
   */
  updateQuantity(bookTitle: string, quantity: number): void {
    this.cartMap[bookTitle].quantity = quantity;
    this.dbCart[bookTitle].quantity = quantity;

    if (this.updateCart) {
      this.updateCart(this.dbCart);
    }
  }

  /**
   * Adds a book to the user's wishlist.
   *
   * @param bookTitle - The title of the book.
   */
  addToWishlist(bookTitle: string): void {
    this.wishlistMap[bookTitle] = {
      book: this.bookMap[bookTitle],
      timestamp: Date.now(),
    };
    this.dbWishlist[bookTitle] = {
      timestamp: Date.now(),
    };

    if (this.updateWishlist) {
      this.updateWishlist(this.dbWishlist);
    }
  }

  /**
   * Adds a book to the user's cart.
   *
   * @param bookTitle - The title of the book.
   */
  addToCart(bookTitle: string): void {
    this.cartMap[bookTitle] = {
      book: this.bookMap[bookTitle],
      timestamp: Date.now(),
      quantity: 1,
    };
    this.dbCart[bookTitle] = {
      timestamp: Date.now(),
      quantity: 1,
    };

    if (this.updateCart) {
      this.updateCart(this.dbCart);
    }
  }

  /**
   * Removes a book from the user's cart.
   *
   * @param bookTitle - The title of the book.
   */
  removeFromCart(bookTitle: string): void {
    delete this.cartMap[bookTitle];
    delete this.dbCart[bookTitle];

    if (this.updateCart) {
      this.updateCart(this.dbCart);
    }
  }

  /**
   * Removes a book from the user's wishlist.
   *
   * @param bookTitle - The title of the book.
   */
  removeFromWishlist(bookTitle: string): void {
    delete this.wishlistMap[bookTitle];
    delete this.dbWishlist[bookTitle];

    if (this.updateWishlist) {
      this.updateWishlist(this.dbWishlist);
    }
  }

  /**
   * Empties the user's cart.
   */
  emptyCart(): void {
    this.cartMap = {};
    this.dbCart = {};

    if (this.updateCart) {
      this.updateCart(this.dbCart);
    }
  }

  /**
   * Empties the user's wishlist.
   */
  emptyWishlist(): void {
    this.wishlistMap = {};
    this.dbWishlist = {};

    if (this.updateWishlist) {
      this.updateWishlist(this.dbWishlist);
    }
  }

  /**
   * Sets the database updater object if the user is logged in.
   *
   * @param databaseUpdater - The database updater object.
   */
  setDatabaseUpdaters(databaseUpdater: DatabaseUpdater | null): void {
    if (databaseUpdater) {
      const { updateCart, updateWishlist } = databaseUpdater;
      this.updateCart = updateCart;
      this.updateWishlist = updateWishlist;
    }
  }
}
