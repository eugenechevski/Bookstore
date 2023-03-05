export default function Category(name: string, books: Book[]): Category { 
    function getName(): string {
        return name;
    }

    function getBooks(): Book[] {
        return books;
    }

    return {
        getName,
        getBooks,
    }
}