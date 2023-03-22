import TextButton from "components/general/TextButton";
import IconButton from "components/general/IconButton";
import { useState } from "react";

const BookDescription = ({book}: {book: Book}) => {
    const textButtonClasses = 'btn-accent ' +
                              'btn-sm ' +
                              'rounded-full ' +
                              'shadow-lg ' +
                              'text-xs ' +
                              'w-1/2 ' +
                              'hover:bg-accent-focus';
    const iconButtonCLasses = 'text-secondary-content ';
    
                

    const [expandedDescription, setExpandedDescription] = useState(false);

    return (
        <div className="h-5/6 
                        w-2/3
                        flex
                        flex-col
                        justify-center
                        items-center
                        sm:gap-16 
                        sm:flex-row">
            {/* Bookcover and buttons */}
            <div className="h-1/2
                            flex 
                            flex-col 
                            gap-3">
                {/* Bookcover */}
                <div className="w-36
                                shadow-2xl
                                drop-shadow-2xl 
                                sm:w-64">
                    <img src={book.getCover()} alt={`${book.getTitle()} cover`} />
                </div>
                {/* Buttons */}
                <div className="flex
                                flex-row 
                                items-center 
                                justify-center 
                                gap-3 
                                sm:flex-col">
                    {
                        window.screen.width > 640 ? (
                            <>
                                <TextButton onClickListener={() => null} textContent={'Add to Cart'} classes={textButtonClasses}></TextButton>
                                <TextButton onClickListener={() => null} textContent={'Add to Wishlist'} classes={textButtonClasses}></TextButton>
                            </>
                        ) : (
                            <>
                                <IconButton onClickListener={() => null} classes={iconButtonCLasses} iconName={'cart'}></IconButton>     
                                <IconButton onClickListener={() => null} classes={iconButtonCLasses} iconName={'heart'}></IconButton>     
                            </>
                        )
                    }
                </div>
            </div>
            {/* Title, author, and synopsis */}
            <div className="h-1/2
                            flex 
                            flex-col
                            items-start
                            gap-3">
                {/* Title */}
                <div className="text-3xl
                                sm:text-5xl 
                                font-bold 
                                w-full 
                                text-shadow-lg 
                                drop-shadow-lg 
                                text-center 
                                overflow-hidden
                                sm:text-start">
                    {book.getTitle()}
                </div>
                {/* Author */}
                <div className="text-center 
                                text-2xl 
                                w-full
                                text-shadow-lg-
                                drop-shadow-lg 
                                overflow-hidden
                                sm:text-start">
                    {book.getAuthorName()}
                </div>
                {/* Synopsis */}
                <div className={`${expandedDescription ? 'h-full' : 'h-16 sm:h-80'} 
                                text-justify
                                whitespace-normal 
                                text-shadow-lg 
                                drop-shadow-lg 
                                overflow-hidden`}>
                    {book.getSynopsis()}
                </div>
                {/* Show more button */}
                <div onClick={() => setExpandedDescription(!expandedDescription)} className={'btn ' +
                                                                                             'border-none ' +
                                                                                             'text-shadow-lg' + 
                                                                                             'bg-neutral ' +
                                                                                             'btn-sm ' +
                                                                                             'rounded-full ' +
                                                                                             'shadow-lg ' +
                                                                                             'self-center ' +
                                                                                             'hover:bg-neutral-focus ' + 
                                                                                             'sm:self-start'}>
                        {expandedDescription? 'Show Less' : 'Show More'}
                </div>
            </div>
        </div>
    );
};

export default BookDescription;