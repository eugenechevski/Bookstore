import { DataContext } from "components/App";
import Page from "components/general/Page";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import BookDescription from "./BookDescription";
import Providers from "./Providers";

const Book = () => {
    const { bookTitle } = useParams();
    const book = useContext(DataContext).getBookMap()[bookTitle];

    return (
        <Page content={(
            <div className="h-full 
                            w-full
                            flex 
                            flex-col
                            items-center
                            text-secondary-content 
                            gap-5
                            mt-12
                            sm:mt-0
                            sm:gap-12">
                <BookDescription book={book}></BookDescription>
                <Providers></Providers>
            </div>
        )} blank={false}></Page>
    );
};

export default Book;