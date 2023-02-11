const BookCard = () => {
    const image = require('src/assets/images/bookcover.png');

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
            <div className="relative 
                            sm:shadow-2xl 
                            sm:drop-shadow-2xl">
                <div className="absolute 
                                top-0 
                                left-0 
                                translate-x-3 
                                translate-y-3 
                                text-base-100 
                                bg-primary 
                                p-2 
                                rounded-xl 
                                shadow-lg">#1</div>
                <img src={image} alt="book" />
            </div>
            <div className="text-center 
                            text-secondary-content 
                            font-bold 
                            text-shadow-lg 
                            drop-shadow-lg 
                            text-2xl">1984</div>
        </div>
    )
};

export default BookCard;