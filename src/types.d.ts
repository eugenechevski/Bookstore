declare interface IBook {
  getTitle(): string;
  getFormattedTitle(): string;
  getCategoryName(): string;
  getFormattedCategoryName(): string;
  getAuthorName(): string;
  getCoverUrl(): string;
  getRank(): number;
  getSynopsis(): string;
  getBuyLinks(): { name: string; url: string }[] | undefined;
}

declare interface IUser {
  getName: () => string;
  getEmail: () => string;
  getBookFromCart: (formattedTitle: string) => IBook;
  getBookFromWishlist: (formattedTitle: string) => IBook;
  getCart: () => IBook[];
  getWishlist: () => IBook[];
  getQuantity: (formattedTitle: string) => number;
  updateQuantity: (formattedTitle: string, quantity: number) => void;
  addToWishlist: (formattedTitle: string) => void;
  addToCart: (formattedTitle: string) => void;
  removeFromCart: (formattedTitle: string) => void;
  removeFromWishlist: (formattedTitle: string) => void;
  emptyCart: () => void;
  emptyWishlist: () => void;
  addAllToCart: () => void;
  setDatabaseUpdaters: (databaseUpdater: DatabaseUpdater) => void;
}

declare interface ICategory {
  getName: () => string;
  getFormattedName: () => string;
  getBooks: () => IBook[];
}

declare interface IBookTrie {
  search: (query: string) => Set<IBook>;
}

declare type CategoryMap = { [categoryName: string]: ICategory };

declare type BookMap = { [bookName: string]: IBook };

declare type DataObject = {
  getCategories: () => ICategory[];
  getCategoryMap: () => CategoryMap;
  getBookMap: () => BookMap;
  getBooks: () => IBook[];
};

declare type UserWishList = {
  [title?: string]: {
    timestamp: number;
  };
};

declare type UserCart = {
  [title?: string]: {
    quantity: number;
    timestamp: number;
  };
};

declare type UserData = {
  firstName: string;
  lastName: string;
  email: string;
  wishlist: UserWishList;
  cart: UserCart;
};

declare type SignIn = (
  email?: string,
  password?: string
) => Promise<UserData | { errorMessage: string }>;

declare type SignOut = () => Promise<void>;

declare type SignUp = (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => Promise<UserData | { errorMessage: string }>;

declare type BookData = {
  title: string;
  author: string;
  book_image: string;
  rank: number;
  description: string;
  buy_links: {
    name: string;
    url: string;
  }[];
};

declare type ListData = {
  list_name: string;
  books: BookData[];
};

declare type NYTData = {
  results: {
    lists: ListData[];
  };
};

declare type CachedData = {
  data: NYTData;
  timestamp: number;
};

declare type DatabaseUpdater = {
  updateCart: (cart: UserCart) => Promise<void>;
  updateWishlist: (wishlist: UserWishList) => Promise<void>;
};