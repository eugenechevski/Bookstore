import DataObject from "utils/DataObject";

describe("DataObject utility", () => {
  it('it initializes all the data', async () => {
    const data = await DataObject();
    const books = data.getBooks();
    
    expect(books.length).toBeGreaterThan(0);
  });
});
