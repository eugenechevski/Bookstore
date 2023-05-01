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
   * Gets the book from the user's cart by formatted title.
   *
   * @param formattedTitle - The formatted title of the book.
   * @returns - The book from the user's cart.
   */
  getBookFromCart(formattedTitle: string): IBook | undefined {
    return this.cartMap[formattedTitle]?.book;
  }

  /**
   * Gets the book from the user's wishlist by formatted title.
   *
   * @param formattedTitle - The formatted title of the book.
   * @returns - The book from the user's wishlist.
   */
  getBookFromWishlist(formattedTitle: string): IBook | undefined {
    return this.wishlistMap[formattedTitle]?.book;
  }

  /**
   * Gets the quantity of a book in the user's cart.
   *
   * @param formattedTitle - The title of the book.
   * @returns - The quantity of the book in the user's cart.
   */
  getQuantity(formattedTitle: string): number {
    return this.cartMap[formattedTitle]?.quantity || 0;
  }

  /**
   * Updates the quantity of a book in the user's cart.
   *
   * @param formattedTitle - The formatted title of the book.
   * @param quantity - The new quantity of the book in the user's cart.
   */
  updateQuantity(formattedTitle: string, quantity: number): void {
    if (!(formattedTitle in this.cartMap)) {
      return;
    }

    if (quantity === 0) {
      delete this.cartMap[formattedTitle];
      delete this.dbCart[formattedTitle];
    } else {
      this.cartMap[formattedTitle].quantity = quantity;
      this.dbCart[formattedTitle].quantity = quantity;
    }


    if (this.updateCart) {
      this.updateCart(this.dbCart);
    }
  }

  /**
   * Adds a book to the user's wishlist.
   *
   * @param formattedTitle - The formatted title of the book.
   */
  addToWishlist(formattedTitle: string): void {
    this.wishlistMap[formattedTitle] = {
      book: this.bookMap[formattedTitle],
      timestamp: Date.now(),
    };
    this.dbWishlist[formattedTitle] = {
      timestamp: Date.now(),
    };

    if (this.updateWishlist) {
      this.updateWishlist(this.dbWishlist);
    }
  }

  /**
   * Adds a book to the user's cart.
   *
   * @param formattedTitle - The formatted title of the book.
   */
  addToCart(formattedTitle: string): void {
    this.cartMap[formattedTitle] = {
      book: this.bookMap[formattedTitle],
      timestamp: Date.now(),
      quantity: 1,
    };
    this.dbCart[formattedTitle] = {
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
   * @param formattedTitle - The formatted title of the book.
   */
  removeFromCart(formattedTitle: string): void {
    delete this.cartMap[formattedTitle];
    delete this.dbCart[formattedTitle];

    if (this.updateCart) {
      this.updateCart(this.dbCart);
    }
  }

  /**
   * Removes a book from the user's wishlist.
   *
   * @param formattedTitle - The formatted title of the book.
   */
  removeFromWishlist(formattedTitle: string): void {
    delete this.wishlistMap[formattedTitle];
    delete this.dbWishlist[formattedTitle];

    if (this.updateWishlist) {
      this.updateWishlist(this.dbWishlist);
    }
  }

  /**
   * Adds all books in the user's wishlist to the user's cart.
   */
  addAllToCart(): void {
    // Add all books in the user's wishlist to the user's cart.
    Object.keys(this.wishlistMap).forEach((formattedTitle) => {
      this.addToCart(formattedTitle);
    });

    // Empty the user's wishlist.
    this.emptyWishlist();
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
