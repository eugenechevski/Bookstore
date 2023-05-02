import TrieNode from "./TrieNode";

export default class BookTrie implements IBookTrie {
  root: TrieNode;

  constructor(books: IBook[]) {
    this.root = new TrieNode();

    for (const book of books) {
      let currentNode = this.root;

      // Split the title into characters
      const chars = book.getTitle().toLowerCase().split("");

      for (const char of chars) {
        if (char === " ") {
          continue;
        }

        // Create a new node if the current node doesn't have a child for this character
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
        }

        // Move to the child node for this character
        currentNode = currentNode.children.get(char)!;

        // Add the book to the current node's list of books
        currentNode.books.add(book);
      }
    }
  }

  search(query: string): Set<IBook> {
    let currentNode = this.root;

    // Split the query into characters
    const chars = query.toLowerCase().split("");

    for (const char of chars) {
      if (char === " ") {
        continue;
      }

      // If the current node doesn't have a child for this character, the query doesn't match any books
      if (!currentNode.children.has(char)) {
        return new Set<IBook>();
      }

      // Move to the child node for this character
      currentNode = currentNode.children.get(char)!;
    }

    // Return the books stored in the final node
    // return only unique books
    const uniqueBookNames = new Set<string>();
    const uniqueBooks = new Set<IBook>();
    for (const book of currentNode.books) {
      if (!uniqueBookNames.has(book.getTitle())) {
        uniqueBookNames.add(book.getTitle());
        uniqueBooks.add(book);
      }
    }

    return uniqueBooks;
  }
}
