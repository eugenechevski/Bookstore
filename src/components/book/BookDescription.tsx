import TextButton from "components/general/TextButton";
import IconButton from "components/general/IconButton";
import { useState } from "react";

const BookDescription = () => {
    const image = require('src/assets/images/bookcover.png');
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
                <div className="w-48
                                shadow-2xl
                                drop-shadow-2xl 
                                sm:w-64">
                    <img src={image} alt="bookcover" />
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
                <div className="text-5xl 
                                font-bold 
                                w-full 
                                text-shadow-lg 
                                drop-shadow-lg 
                                text-center 
                                overflow-hidden
                                sm:text-start">
                    1984
                </div>
                {/* Author */}
                <div className="text-center 
                                text-2xl 
                                w-full
                                text-shadow-lg-
                                drop-shadow-lg 
                                overflow-hidden
                                sm:text-start">
                    by George Orwell
                </div>
                {/* Synopsis */}
                <div className={`${expandedDescription ? 'h-full' : 'h-32 sm:h-80'} 
                                text-justify
                                whitespace-normal 
                                text-shadow-lg 
                                drop-shadow-lg 
                                overflow-hidden`}>
                    1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia, 
                    1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia, ...
                    1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia, ...
                    1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia, ...
                    1984, published in 1949, is a dystopian and satirical novel. It revolves around Winston Smith, who lives in a nation called Oceania, in a province called Airstrip One, which represents present-day England. This state is controlled by the Party, headed by a mysterious leader who is addressed as Emmanuel Goldstein, also known as the Big Brother. The Party watches every single move that Smith and other citizens make. The nation's language and history is forcefully changed for the benefit of the Party. A new language, Newspeak, is being compulsively implemented to ensure works that have anything to do with political rebellion are omitted. In Oceania, even rebellious thoughts are illegal and are said to be the worst of all crimes. The people are suppressed and any form of individuality is not tolerated, including love and sex. Smith works as a low-ranking member of the Party who alters historical records. He hates the Party and thus buys an illegal diary in which he pens down his thoughts. He meets Julia, ...
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