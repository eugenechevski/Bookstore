declare type Book = {
  getTitle: () => string,
  getCover: () => any,
  getRank: () => number,
  getSynopsis: () => string,
};

declare type Category = {
 getName: () => string,
 getBooks: () => Book[],
};

declare type User = {
  getFirstName: () => string,
  getLastName: () => string,
  getPassword: () => string,
  getEmail: () => string,
  getWishlist: () => Set<Book>,
  getCart: () => Set<Book>,
  setFirstName: (first: string) => void,
  setLastName: (last: string) => void,
  setPassword: (newPassword: string) => void,
  setEmail: (newEmail: string) => void,
  addToWishList: (book: Book) => void,
  addToCart: (book: Book) => void,
  removeFromCart: (book: Book) => void,
  removeFromWishlist: (book: Book) => void,
}
