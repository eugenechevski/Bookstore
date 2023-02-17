import TextButton from "components/general/TextButton";
import IconButton from "components/general/IconButton";

const BookDescription = () => {
    const image = require('src/assets/images/bookcover.png');

    return (
        <div className="h-5/6 
                        w-2/3
                        flex
                        justify-center
                        items-center
                        gap-16">
            {/* Bookcover and buttons */}
            <div className="h-1/2
                            flex 
                            flex-col 
                            gap-3">
                {/* Bookcover */}
                <div className="w-64
                                shadow-2xl
                                drop-shadow-2xl">
                    <img src={image} alt="bookcover" />
                </div>
                {/* Buttons */}
                <div className="flex
                                flex-col
                                items-center
                                justify-center
                                gap-3">
                    {
                        window.screen.width > 640 ? (
                            <>
                                <TextButton textContent={'Add to Cart'} classes={''}></TextButton>
                                <TextButton textContent={'Add to Wishlist'} classes={''}></TextButton>
                            </>
                        ) : (
                            <>
                                <IconButton iconName={'cart'}></IconButton>     
                                <IconButton iconName={'wishlist'}></IconButton>     
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
                <div className="text-5xl 
                                font-bold
                                text-shadow-lg
                                drop-shadow-lg">
                    1984
                </div>
                {/* Author */}
                <div className="text-2xl
                                text-shadow-lg-
                                drop-shadow-lg">
                    by George Orwell
                </div>
                {/* Synopsis */}
                <div className="whitespace-normal
                                text-shadow-lg
                                drop-shadow-lg">
                    1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia, ...
                </div>
                {/* Show more button */}
                <TextButton textContent={'Show More'} classes={''}></TextButton>
            </div>
        </div>
    );
};

export default BookDescription;