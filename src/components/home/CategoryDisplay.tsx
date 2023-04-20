import BookCard from "./BookCard";
import uniqid from "uniqid";

const CategoryDisplay = ({ category }: { category: ICategory }) => {
  return (
    <div
      className="p-6
                 gap-12 
                 flex 
                 flex-col 
                 justify-center 
                 items-center 
                 sm:gap-3 
                 sm:mb-0"
    >
      <div
        className="text-xl 
                            text-secondary-content 
                            font-bold 
                            text-shadow-lg 
                            drop-shadow-lg 
                            w-full 
                            sm:text-2xl"
      >
        {category.getName()}
      </div>
      <div
        className={`flex
                    flex-col
                    gap-6
                    sm:flex-row
                    sm:p-12 
                    sm:w-full`}
      >
        {category
          .getBooks()
          .slice(0, 5)
          .map((book) => (
            <BookCard key={uniqid()} book={book}></BookCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryDisplay;
