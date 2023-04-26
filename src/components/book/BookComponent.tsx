import { DataContext } from "components/App";
import Page from "components/general/Page";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookDescription from "./BookDescription";
import Providers from "./Providers";

const BookPage = ({ testBook }: { testBook?: IBook }) => {
  const { bookTitle } = useParams();

  const { bookMap, user } = useContext(DataContext);
  
  const [book, setBook] = useState<IBook | {}>((testBook && testBook) || {});
  const [buyLinks, setBuyLinks] = useState<{ name: string; url: string }[]>([]);
  
  // Load the book data
  useEffect(() => {
    if (bookMap && Object.keys(bookMap).length > 0) {
      setBook(bookMap[bookTitle]);
      setBuyLinks((bookMap[bookTitle] as IBook).getBuyLinks());
    }
  }, [bookMap, bookTitle]);

  return (
    <Page
      content={
        <div
          className="h-full 
                            w-full
                            flex 
                            flex-col
                            items-center
                            text-secondary-content 
                            gap-5
                            mt-12
                            sm:mt-0
                            sm:gap-12"
        >
          <BookDescription
            book={book}
            user={user}
          ></BookDescription>
          <Providers buyLinks={buyLinks}></Providers>
        </div>
      }
      blank={false}
    ></Page>
  );
};

export default BookPage;
