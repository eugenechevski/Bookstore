import Book from "scripts/Book";
import User from "scripts/User";

describe("User factory", () => {
  const testUser = User('John Doe', 'password123', 'john@example.com', [], [], true);

  it("returns the proper name", () => {
    expect(testUser.getName()).toBe('John Doe');
  });

  it("returns the proper email", () => {
    expect(testUser.getEmail()).toBe('john@example.com');
  });
  
  it("returns the proper password", () => {
    expect(testUser.getPassword()).toBe('password123');
  });

  it("returns empty wishlist", () => {
    expect(testUser.getWishlist().length).toEqual(0);
  });

  it("return empty cart", () => {
    expect(testUser.getCart().length).toEqual(0);
  });

  it("returns a book from the cart", () => {
    testUser.addToCart(Book('1984', '', 1, 1, ''));
    expect(testUser.getBookFromCart('1984').getTitle()).toBe('1984');
  });

  it("sets a new name", () => {
    testUser.setName('Jane Doe');
    expect(testUser.getName()).toBe('Jane Doe');
  });

  it("sets a new password", () => {
    testUser.setPassword('password12345');
    expect(testUser.getPassword()).toBe('password12345');
  });

  it("sets a new email", () => {
    testUser.setEmail('test@example.com');
    expect(testUser.getEmail()).toBe('test@example.com');
  });

  it("adds an item to a wishlist", () => {
    testUser.addToWishList(Book('Harry Potter', "", 1, 1, ""));
    expect(testUser.getWishlist().length).toEqual(1);
  });

  it("adds an item to a cart", () => {
    testUser.addToCart(Book('Harry Potter', "", 1, 1, ""));
    expect(testUser.getCart().length).toEqual(2);
  });

  it("removes an item from a wishlist", () => {
    testUser.removeFromWishlist("Harry Potter");
    expect(testUser.getWishlist().length).toEqual(0);
  });

  it("removes an item from a cart", () => {
    testUser.removeFromCart("Harry Potter");
    expect(testUser.getCart().length).toEqual(1);
  });
  
  it("returns the user sign-in status", () => {
    expect(testUser.isSignedIn()).toBeTruthy()
  });

  it("sign-outs the user", () => {
    testUser.signOut();
    expect(testUser.isSignedIn()).toBeFalsy();
  });

  it("signs in the user", () => {
    testUser.signIn();
    expect(testUser.isSignedIn()).toBeTruthy();
  });
});