/**
 * The User class is used to create a user object.
 * It uses the data from the user object in the database to create an interface for the user.
 * 
 * @param user - The user object from the database
 * @param bookMap - A map of all the books in the database
 * @returns - A user object
 */
export default function User(user: UserData, bookMap: BookMap): User {
  // Private variables
  const cartMap: {
    [title: string]: {
      book: Book;
      timestamp: number;
      quantity: number;
    };
  } = {};
  const wishlistMap: {
    [title: string]: {
      book: Book;
      timestamp: number;
    };
  } = {};

  // Create a map of books in the cart
  Object.keys(user.cart).forEach((cartItem) => {
    cartMap[cartItem].book = bookMap[cartItem];
    cartMap[cartItem].timestamp = user.cart[cartItem].timestamp;
    cartMap[cartItem].quantity = user.cart[cartItem].quantity;
  });

  // Create a map of books in the wishlist
  Object.keys(user.wishlist).forEach((wishlistItem) => {
    wishlistMap[wishlistItem].book = bookMap[wishlistItem];
    wishlistMap[wishlistItem].timestamp = user.wishlist[wishlistItem].timestamp;
  });

  // Public methods

  function getName(): string {
    return user.firstName + " " + user.lastName;
  }

  function getEmail(): string {
    return user.email;
  }

  function getWishlist(): Book[] {
    return Object.values(wishlistMap)
      .sort((book1, book2) => book2.timestamp - book1.timestamp)
      .map((book) => book.book);
  }

  function getCart(): Book[] {
    return Object.values(cartMap)
      .sort((book1, book2) => book2.timestamp - book1.timestamp)
      .map((book) => book.book);
  }

  function getBookFromCart(bookTitle: string): Book {
    return cartMap[bookTitle].book;
  }

  function getQuantity(bookTitle: string): number {
    return cartMap[bookTitle].quantity;
  }

  function updateQuantity(bookTitle: string, quantity: number): void {
    cartMap[bookTitle].quantity = quantity;
  }

  function addToWishList(bookTitle: string): void {
    wishlistMap[bookTitle] = {
      book: bookMap[bookTitle],
      timestamp: Date.now(),
    };
  }

  function addToCart(bookTitle: string): void {
    cartMap[bookTitle] = {
      book: bookMap[bookTitle],
      timestamp: Date.now(),
      quantity: 1,
    };
  }

  function removeFromCart(bookTitle: string): void {
    delete cartMap[bookTitle];
  }

  function removeFromWishlist(bookTitle: string): void {
    delete wishlistMap[bookTitle];
  }

  function emptyCart(): void {
    Object.assign(cartMap, {});
  }

  function emptyWishlist(): void {
    Object.assign(wishlistMap, {});
  }

  return {
    getName,
    getEmail,
    getWishlist,
    getCart,
    getBookFromCart,
    getQuantity,
    updateQuantity,
    addToWishList,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    emptyCart,
    emptyWishlist,
  };
}
