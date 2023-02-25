const BookEntry = ({ rank, bookCover, description }) => {
    return (
        <div className="flex 
                        items-center 
                        flex-col 
                        gap-12 
                        h-[75vh] 
                        w-screen 
                        sm:w-full
                        sm:h-48 
                        sm:flex-row 
                        sm:justify-center 
                        sm:gap-3">
            <div className="flex 
                            gap-3">
                <div className="font-bold 
                                text-base-100
                                w-8
                                h-8 
                                p-1
                                bg-primary
                                rounded-full 
                                shadow-lg
                                drop-shadow-lg"># {rank}</div>
                <div className="w-52
                                mr-12
                                drop-shadow-lg 
                                shadow-lg
                                sm:w-32 
                                sm:mr-0">
                    <img src={bookCover} alt="bookcover" />
                </div>
            </div>
            <div className="h-1/6 
                            w-3/4 
                            text-justify 
                            whitespace-normal 
                            overflow-hidden 
                            text-shadow-lg
                            drop-shadow-lg
                            sm:text-start 
                            sm:h-3/4">{description}</div>
        </div>
    );
};

export default BookEntry;