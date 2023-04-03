import { Link } from "react-router-dom";

const BookCard = ({ book }: { book: Book }) => {
    return (
        <div className="carousel-item 
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        gap-8 
                        w-full 
                        mr-1 
                        sm:w-1/5">
            <Link to={`/categories/${book.getFormattedCategoryName()}/${book.getFormattedTitle()}`}>
                <div className="relative 
                                sm:shadow-2xl 
                                sm:drop-shadow-2xl
                                cursor-pointer">
                    <div className="absolute 
                                    top-0 
                                    left-0 
                                    translate-x-3 
                                    translate-y-3 
                                    text-base-100 
                                    bg-primary 
                                    p-2 
                                    rounded-xl 
                                    shadow-lg">{book.getRank()}</div>
                    <img src={book.getCoverUrl()} alt={book.getTitle() + ' cover'} />
                </div>
            </Link>
            <div className="text-center 
                            text-secondary-content 
                            font-bold 
                            text-shadow-lg 
                            drop-shadow-lg 
                            text-2xl">{book.getTitle()}</div>
        </div>
    )
};

export default BookCard;