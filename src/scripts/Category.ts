export default function Category(name: string, books: Book[]): Category { 
    const formattedName = name.toLowerCase().split(' ').join('-');

    function getName(): string {
      return name;
    }

    function getFormattedName(): string {
      return formattedName;
    }

    function getBooks(): Book[] {
      return books;
    }

    return {
        getName,
        getFormattedName,
        getBooks,
    }
}