import User from "classes/User";
import Book from "classes/Book";

const mockBook = new Book(`Harry Potter`, "K. Rowling", "Fantasy", "", 1, "");

// Mock the book map
const mockBookMap: BookMap = {};
for (let i = 1; i <= 5; i++) {
  mockBookMap[`Harry Potter${i}`] = new Book(
    `Harry Potter${i}`,
    "K. Rowling",
    "Fantasy",
    "",
    1,
    ""
  );
}

// Mock the user cart
const mockCart: UserCart = {};
for (let i = 1; i <= 5; i++) {
  mockCart[`Harry Potter${i}`] = { quantity: i, timestamp: 0 };
}

// Mock the user wishlist
const mockWishlist: UserWishList = {};
for (let i = 1; i <= 5; i++) {
  mockWishlist[`Harry Potter${i}`] = { timestamp: 0 };
}

// Mock the user
const dummyUser = new User(
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    wishlist: mockWishlist,
    cart: mockCart,
  },
  mockBookMap
);

// Guest user
const guestUser = new User(
  {
    firstName: "Guest",
    lastName: "User",
    email: "",
    wishlist: {},
    cart: {},
  },
  {}
);

// Regex for email
const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

// Regex for password
const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$^#!%*()+-?&])[a-zA-Z\d@$()+-^#!%*?&]{8,}/;

export { dummyUser, guestUser, mockBookMap, mockBook, emailRegex, passwordRegex };
