import Book from "scripts/Book";
import User from "scripts/User";

/**
 * User
 */

const dummyUser = User('Guest', '', '', [1, 2, 3, 4, 5].map((i) => Book('1984', 'George Orwell', 'Fiction', require('src/assets/images/bookcover.png'), i, i, 'synopsis')),
  [1, 2, 3, 4, 5].map((i) => Book('1984', 'George Orwell', 'Fiction', require('src/assets/images/bookcover.png'), i, i, 'synopsis')), false)


/**
 * Regex
 */
const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$^#!%*()+-?&])[a-zA-Z\d@$()+-^#!%*?&]{8,}/;

export {
  dummyUser,
  emailRegex,
  passwordRegex
}