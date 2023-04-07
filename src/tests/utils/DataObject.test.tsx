import DataObject from "utils/DataObject";

describe("DataObject utility", () => {
  it('it initializes all the data', async () => {
    const books = (await DataObject().then(createDataObject => createDataObject())).getBooks();
    
    expect(books.length).toBeGreaterThan(0);
  });
});
