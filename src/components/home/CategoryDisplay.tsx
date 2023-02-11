import BookCard from "./BookCard";

const CategoryDisplay = () => {
    return (
        <div className="p-6
                        gap-12 
                        flex 
                        flex-col 
                        justify-center 
                        items-center 
                        sm:gap-3 
                        sm:mb-0 
                        sm:h-full">
            <div className="text-xl 
                            text-secondary-content 
                            font-bold 
                            text-shadow-lg 
                            drop-shadow-lg 
                            w-full 
                            sm:text-2xl">Combined Print & E-Book Fiction</div>
            <div className="carousel 
                            w-64 
                            sm:p-12 
                            sm:w-full">
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
                <BookCard></BookCard>
            </div>
        </div>
    )
};

export default CategoryDisplay;