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
