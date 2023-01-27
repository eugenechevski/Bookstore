import BookCard from "./BookCard";

const CategoryDisplay = () => {
    return (
        <div className="flex gap-3">
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
            <BookCard></BookCard>
        </div>
    )
};

export default CategoryDisplay;