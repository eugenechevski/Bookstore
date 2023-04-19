import BookCard from "./BookCard";
import uniqid from "uniqid";

const CategoryDisplay = ({ category }: { category: ICategory }) => {
    return (
        <div className="p-6
                        gap-12 
                        flex 
                        flex-col 
                        justify-center 
                        items-center 
                        w-full
                        sm:gap-3 
                        sm:mb-0 
                        sm:h-full">
            <div className="text-xl 
                            text-secondary-content 
                            font-bold 
                            text-shadow-lg 
                            drop-shadow-lg 
                            w-full 
                            sm:text-2xl">{category.getName()}</div>
            <div className={`${window.screen.width > 768 ? 'flex' : 'carousel'}
                             sm:p-12 
                             sm:w-full`}>
                {
                    category.getBooks().slice(0, 5).map((book) => <BookCard key={uniqid()} 
                                                                            book={book}></BookCard>
                             )
                }
            </div>
        </div>
    )
};

export default CategoryDisplay;