import Book from "scripts/Book"
import Category from "scripts/Category";

const desc = `1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia`;
const bookCover = require('src/assets/images/bookcover.png');

const categories = [
    Category("Fiction", [
        Book('1984', 'George Orwell', 'Fiction', bookCover, 1, 1, desc),
        Book('1984', 'George Orwell', 'Fiction', bookCover, 2, 1, desc),
        Book('1984', 'George Orwell', 'Fiction', bookCover, 3, 1, desc),
        Book('1984', 'George Orwell', 'Fiction', bookCover, 4, 1, desc),
        Book('1984', 'George Orwell', 'Fiction', bookCover, 5, 1, desc),
    ]),
    Category("Non-fiction", [
        Book('1984', 'George Orwell', 'Non-fiction', bookCover, 1, 1, desc),
        Book('1984', 'George Orwell', 'Non-fiction', bookCover, 2, 1, desc),
        Book('1984', 'George Orwell', 'Non-fiction', bookCover, 3, 1, desc),
        Book('1984', 'George Orwell', 'Non-fiction', bookCover, 4, 1, desc),
        Book('1984', 'George Orwell', 'Non-fiction', bookCover, 5, 1, desc),
    ]),
    Category("Storytelling", [
        Book('1984', 'George Orwell', 'Storytelling', bookCover, 1, 1, desc),
        Book('1984', 'George Orwell', 'Storytelling', bookCover, 2, 1, desc),
        Book('1984', 'George Orwell', 'Storytelling', bookCover, 3, 1, desc),
        Book('1984', 'George Orwell', 'Storytelling', bookCover, 4, 1, desc),
        Book('1984', 'George Orwell', 'Storytelling', bookCover, 5, 1, desc),
    ]),
    Category("History", [
        Book('1984', 'George Orwell', 'History', bookCover, 1, 1, desc),
        Book('1984', 'George Orwell', 'History', bookCover, 2, 1, desc),
        Book('1984', 'George Orwell', 'History', bookCover, 3, 1, desc),
        Book('1984', 'George Orwell', 'History', bookCover, 4, 1, desc),
        Book('1984', 'George Orwell', 'History', bookCover, 5, 1, desc),
    ]),
    Category("Sci-Fi", [
        Book('1984', 'George Orwell', 'Sci-Fi', bookCover, 1, 1, desc),
        Book('1984', 'George Orwell', 'Sci-Fi', bookCover, 2, 1, desc),
        Book('1984', 'George Orwell', 'Sci-Fi', bookCover, 3, 1, desc),
        Book('1984', 'George Orwell', 'Sci-Fi', bookCover, 4, 1, desc),
        Book('1984', 'George Orwell', 'Sci-Fi', bookCover, 5, 1, desc),
    ]),
];

// Derive other data containers
const categoryMap = {};
const bookMap = {};
for (let i = 0; i < categories.length; i++) {
  // derive categories
  categoryMap[categories[i].getName().toLowerCase().split(' ').join('-')] = categories[i];
  
  // derive books
  const books = categories[i].getBooks();
  for (let j = 0; j < books.length; j++) {
    bookMap[books[j].getTitle().toLowerCase().split(' ').join('-')] = books[j];
  }
}


const dataObj = (): DataObject => {
    function getCategories(): Category[] {
      return categories;
    }

    function getCategoryMap(): CategoryMap {
      return categoryMap;
    }

    function getBookMap(): BookMap {
      return bookMap;
    }
    
    return {
        getCategories,
        getCategoryMap,
        getBookMap,
    }
}

export default dataObj();