import BookCard from "./BookCard";

const CategoryDisplay = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="h-1 text-2xl">Combined Print & E-Book Fiction</div>
            <div className="carousel rounded-box gap-3 p-12">
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