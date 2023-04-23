export default class TrieNode {
  children: Map<string, TrieNode>;
  books: Set<IBook>;

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.books = new Set<IBook>();
  }
}
