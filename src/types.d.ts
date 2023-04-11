declare type Book = {
  getTitle: () => string,
  getFormattedTitle: () => string,
  getCategoryName: () => string,
  getFormattedCategoryName: () => string,
  getAuthorName: () => string,
  getCoverUrl: () => string,
  getRank: () => number,
  getSynopsis: () => string,
};

declare type Category = {
 getName: () => string,
 getFormattedName: () => string,
 getBooks: () => Book[],
};

declare type CategoryMap = { [categoryName: string]: Category }

declare type BookMap = { [bookName: string]: Book }

declare type DataObject = {
  getCategories: () => Category[]
  getCategoryMap: () => CategoryMap
  getBookMap: () => BookMap,
  getBooks: () => Book[]
};

declare type UserWishList = {
  [title?: string]: {
    timestamp: number
  };
}

declare type UserCart = {
  [title?: string]: {
    quantity: number,
    timestamp: number
  };
}

declare type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  wishlist: UserWishList;
  cart: UserCart;
}

declare type User = {
  getName: () => string,
  getEmail: () => string,
  getBookFromCart: (bookTitle: string) => Book,
  getBookFromWishlist: (bookTitle: string) => Book,
  getCart: () => Book[],
  getWishlist: () => Book[],
  getQuantity: (bookTitle: string) => number,
  updateQuantity: (bookTitle: string, quantity: number) => void,
  addToWishList: (bookTitle: string) => void,
  addToCart: (bookTitle: string) => void,
  removeFromCart: (bookTitle: string) => void,
  removeFromWishlist: (bookTitle: string) => void,
  emptyCart: () => void,
  emptyWishlist: () => void
}
