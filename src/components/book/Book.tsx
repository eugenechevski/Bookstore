import Page from "components/general/Page";
import BookDescription from "./BookDescription";
import Providers from "./Providers";

const Book = () => {
    return (
        <Page content={(
            <div className="h-full 
                            w-full
                            flex 
                            flex-col
                            items-center
                            gap-12">
                <BookDescription></BookDescription>
                <Providers></Providers>
            </div>
        )}></Page>
    );
};

export default Book;