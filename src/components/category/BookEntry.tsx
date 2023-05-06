import { Link } from "react-router-dom";
import ImageComponent from "components/general/ImageComponent";

/**
 * A component for displaying a line with book information on a category page.
 */
const BookEntry = ({ book }: { book: IBook }) => {
  return (
    <div
      className="flex
                 items-center
                 flex-col
                 gap-12
                 h-[75vh]
                 w-screen 
                 sm:w-full
                 sm:h-48
                 sm:flex-row
                 sm:justify-center
                 sm:gap-3"
    >
      <div
        className="flex
                   gap-3"
      >
        {/** Book rank */}
        <div
          className="flex
                     justify-center
                     items-center
                     font-bold
                     text-base-100
                     text-center
                     w-10
                     h-10
                     p-1
                     bg-primary
                     rounded-full
                     shadow-lg
                     drop-shadow-lg"
        >
          # {book?.getRank()}
        </div>

        {/** Book image */}
        <Link
          to={`/categories/${book?.getFormattedCategoryName()}/${book?.getFormattedTitle()}`}
        >
          <ImageComponent
            src={book?.getCoverUrl()}
            alt={book?.getTitle() + " cover"}
            classes="w-52
                     h-72
                     mr-12
                     drop-shadow-lg
                     shadow-lg
                     sm:w-32
                     sm:h-48
                     sm:mr-0"
          />
        </Link>

      </div>

      {/** Book synopsys */}
      <div
        data-testid="synopsis"
        className="w-3/4
                   text-justify
                   whitespace-normal
                   overflow-hidden
                   text-shadow-lg
                   drop-shadow-lg
                   sm:text-start"
      >
        {book?.getSynopsis()}
      </div>
    </div>
  );
};

export default BookEntry;
