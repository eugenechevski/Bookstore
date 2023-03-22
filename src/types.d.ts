declare type Book = {
  getTitle: () => string,
  getFormattedTitle: () => string,
  getCategoryName: () => string,
  getAuthorName: () => string,
  getQuantity: () => number,
  getCover: () => any,
  getRank: () => number,
  getSynopsis: () => string,
  updateQuantity: (newQuantity: number) => void
};

declare type Category = {
 getName: () => string,
 getBooks: () => Book[],
};

declare type User = {
  getName: () => string,
  getPassword: () => string,
  getEmail: () => string,
  getWishlist: () => Book[],
  getBookFromCart: (bookTitle: string) => Book,
  getCart: () => Book[],
  setName(newName: string): void,
  setPassword: (newPassword: string) => void,
  setEmail: (newEmail: string) => void,
  addToWishList: (book: Book) => void,
  addToCart: (book: Book) => void,
  removeFromCart: (bookTitle: string) => void,
  removeFromWishlist: (bookTitle: string) => void,
  isSignedIn: () => boolean,
  signIn: () => void,
  signOut: () => void
  emptyCart: () => void,
}

declare type CategoryMap = { [categoryName: string]: Category }

declare type BookMap = { [bookName: string]: Book }

declare type DataObject = {
  getCategories: () => Category[]
  getCategoryMap: () => CategoryMap
  getBookMap: () => BookMap
};
