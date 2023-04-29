import IconButton from "components/general/IconButton";
import { useEffect, useState } from "react";
import ImageComponent from "components/general/ImageComponent";

const BookDescription = ({
  book,
  userData,
}: {
  book: IBook | {};
  userData?: {
    user: IUser | {};
    userCart: IBook[];
    userWishlist: IBook[];
    setUserCart: React.Dispatch<React.SetStateAction<IBook[]>>;
    setUserWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
  };
}) => {
  const iconButtonCLasses = "text-secondary-content ";
  const { user, setUserCart, setUserWishlist, userCart, userWishlist } =
    userData;

  const [coverUrl, setCoverUrl] = useState("");
  const [bookTitle, setTitle] = useState("");
  const [formattedTitle, setFormattedTitle] = useState("");
  const [bookAuthor, setAuthor] = useState("");
  const [bookSynopsis, setSynopsis] = useState("");

  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Load the book data
  useEffect(() => {
    if (Object.keys(book).length > 0) {
      setCoverUrl((book as IBook).getCoverUrl());
      setTitle((book as IBook).getTitle());
      setFormattedTitle((book as IBook).getFormattedTitle());
      setAuthor((book as IBook).getAuthorName());
      setSynopsis((book as IBook).getSynopsis());
    }
  }, [book]);

  // Determine the initial state of the buttons
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      setIsInCart(
        (user as IUser).getBookFromCart(formattedTitle) !== undefined
      );
      setIsInWishlist(
        (user as IUser).getBookFromWishlist(formattedTitle) !== undefined
      );
    }
  }, [user, formattedTitle]);

  // Update the state of the buttons when the state of the cart changes
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      return;
    }

    setIsInCart((user as IUser).getBookFromCart(formattedTitle) !== undefined);
  }, [userCart]);

  // Update the state of the buttons when the state of the wishlist changes
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      return;
    }

    setIsInWishlist(
      (user as IUser).getBookFromWishlist(formattedTitle) !== undefined
    );
  }, [userWishlist]);
  

  const toggleCartButton = () => {
    if (Object.keys(user).length === 0) {
      return;
    }

    if (isInCart) {
      (user as IUser).removeFromCart(formattedTitle);
    } else {
      (user as IUser).addToCart(formattedTitle);
    }

    setIsInCart(!isInCart);
    setUserCart((user as IUser).getCart());
  };

  const toggleWishlistButton = () => {
    if (Object.keys(user).length === 0) {
      return;
    }

    if (isInWishlist) {
      (user as IUser).removeFromWishlist(formattedTitle);
    } else {
      (user as IUser).addToWishlist(formattedTitle);
    }

    setIsInWishlist(!isInWishlist);
    setUserWishlist((user as IUser).getWishlist());
  };

  return (
    <div
      className="h-1/2
                 w-3/4
                 sm:h-5/6 
                 sm:w-2/3
                 flex
                 flex-col
                 justify-center
                 items-center
                 sm:gap-16 
                 sm:flex-row"
    >
      {/* Bookcover and buttons */}
      <div
        className="h-1/2
                   flex 
                   flex-col 
                   gap-3"
      >
        {/* Bookcover */}
        <ImageComponent
          src={coverUrl}
          alt={bookTitle + " cover"}
          classes="shadow-2xl
                   drop-shadow-2xl
                   w-32
                   h-48
                   sm:w-64
                   sm:h-96"
        />
        {/* Buttons */}
        <div
          data-testid="add-buttons"
          className="flex
                     items-center 
                     justify-center 
                     gap-3"
        >
          {/* Add to cart button */}
          <IconButton
            onClickListener={toggleCartButton}
            classes={iconButtonCLasses}
            iconName={isInCart ? "check" : "cart"}
          />

          {/* Add to wishlist button */}
          <IconButton
            onClickListener={toggleWishlistButton}
            classes={iconButtonCLasses}
            iconName={isInWishlist ? "check" : "heart"}
          />
        </div>
      </div>
      {/* Title, author, and synopsis */}
      <div
        className="h-1/2
                   flex
                   flex-col
                   gap-3"
      >
        {/* Title */}
        <div
          data-testid="title"
          className="text-xl
                     sm:text-5xl 
                     font-bold 
                     w-full 
                     text-shadow-lg 
                     drop-shadow-lg 
                     text-center 
                     overflow-hidden
                     sm:text-start"
        >
          {bookTitle}
        </div>
        {/* Author */}
        <div
          data-testid="author"
          className="text-center 
                     text-xl 
                     w-full
                     text-shadow-lg-
                     drop-shadow-lg 
                     overflow-hidden
                     sm:text-start"
        >
          {bookAuthor}
        </div>
        {/* Synopsis */}
        <div
          data-testid="synopsis"
          className="text-sm
                     sm:text-lg
                     text-justify
                     whitespace-normal
                     text-shadow-lg
                     drop-shadow-lg
                     overflow-hidden"
        >
          {bookSynopsis}
        </div>
      </div>
    </div>
  );
};

export default BookDescription;
