import { Link } from "react-router-dom";
import ImageComponent from "components/general/ImageComponent";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <div
      className="flex 
                 flex-col 
                 items-center 
                 justify-center 
                 gap-6
                 w-full
                 mr-1
                 sm:w-1/5"
    >
      <Link
        to={`/categories/${book?.getFormattedCategoryName()}/${book?.getFormattedTitle()}`}
      >
        <ImageComponent
          src={book?.getCoverUrl()}
          alt={book?.getTitle() + " cover"}
          classes="w-52
                   h-72
                   relative 
                   cursor-pointer
                   border
                   border-primary-content
                   hover:border-primary-focus
                   sm:shadow-2xl 
                   sm:drop-shadow-2xl"
          content={
            <div
              className="absolute 
                         top-0 
                         left-0 
                         translate-x-3 
                         translate-y-3 
                         text-base-100 
                         bg-primary 
                         p-2 
                         rounded-xl 
                         shadow-lg
                         border
                         border-neutral"
            >
              {book?.getRank()}
            </div>
          }
        />
      </Link>
      <div
        className="h-12
                   text-center 
                   text-secondary-content 
                   font-bold 
                   text-shadow-lg 
                   drop-shadow-lg 
                   text-2xl"
      >
        {book?.getTitle()}
      </div>
    </div>
  );
};

export default BookCard;
