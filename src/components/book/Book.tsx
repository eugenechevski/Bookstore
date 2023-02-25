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
                            text-secondary-content 
                            gap-5
                            mt-12
                            sm:mt-0
                            sm:gap-12">
                <BookDescription></BookDescription>
                <Providers></Providers>
            </div>
        )} blank={false}></Page>
    );
};

export default Book;