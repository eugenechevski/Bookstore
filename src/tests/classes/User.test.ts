import { dummyUser } from "utils/constants";

describe("User factory", () => {
  it("returns the proper name", () => {
    expect(dummyUser.getName()).toBe("John Doe");
  });

  it("returns the proper email", () => {
    expect(dummyUser.getEmail()).toBe("john@example.com");
  });

  
  it("returns empty cart", () => {
    dummyUser.emptyCart();
    expect(dummyUser.getCart().length).toEqual(0);
  });
  
  it("adds an item to a cart", () => {
    dummyUser.addToCart("Harry Potter1");
    expect(dummyUser.getCart().length).toEqual(1);
  });
  
  it("returns a book from the cart", () => {
    expect(dummyUser.getBookFromCart("Harry Potter1").getTitle()).toBe("Harry Potter1");
  });

  it("removes an item from a cart", () => {
    dummyUser.removeFromCart("Harry Potter1");
    expect(dummyUser.getCart().length).toEqual(0);
  });
  
  it("returns empty wishlist", () => {
    dummyUser.emptyWishlist();
    expect(dummyUser.getWishlist().length).toEqual(0);
  });

  it("adds an item to a wishlist", () => {
    dummyUser.addToWishlist("Harry Potter1");
    expect(dummyUser.getWishlist().length).toEqual(1);
  });

  it("returns a book from the wishlist", () => {
    expect(dummyUser.getBookFromWishlist("Harry Potter1").getTitle()).toBe("Harry Potter1");
  });
  
  it("removes an item from a wishlist", () => {
    dummyUser.removeFromWishlist("Harry Potter1");
    expect(dummyUser.getWishlist().length).toEqual(0);
  });

});
