// Components
import { DataContext } from "components/App";
import NavBarStart from "components/general/NavBarStart";
import NavBarCenter from "components/general/NavBarCenter";
import NavBarEnd from "components/general/NavBarEnd";

// Classes
import BookTrie from "classes/BookTrie";

// React stuff
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect, createContext } from "react";

// Context container
const NavBarContext = createContext(
  {} as {
    stateUser: IUser;
    userWishlist: [] | IBook[];
    userCart: [] | IBook[];
    searchResult: IBook[];
    textBtnClasses: string;
    offCanvasToggleIcon: string;
    navbarToolsIcon: string;
    loginButtonIcon: string;
    searchBook: (searchText: string) => void;
    setOffCanvasToggleIcon: React.Dispatch<React.SetStateAction<string>>;
    setNavbarToolsIcon: React.Dispatch<React.SetStateAction<string>>;
    removeBookFromCart: (book: IBook) => void;
    removeBookFromWishlist: (book: IBook) => void;
    toggleOffcanvasAndIcon: () => void;
    toggleLoginButton: () => void;
    handleAddAllToCart: () => void;
    handleCheckout: () => void;
  }
);

/**
 * A high-level component that contains the navbar.
 */
const NavBar = ({
  testUser,
  toggleOffcanvas,
}: {
  testUser?: IUser;
  toggleOffcanvas: () => void;
}) => {
  const textBtnClasses = "bg-transparent " + "hover:bg-primary-focus";

  const navigate = useNavigate();

  // Context
  const { user, userCart, userWishlist, setUserCart, setUserWishlist, books } =
    useContext(DataContext);

  // State
  const [stateUser, setUser] = useState<IUser>(
    testUser ? testUser : (user as IUser)
  );
  const [offCanvasToggleIcon, setOffCanvasToggleIcon] = useState("bars");
  const [navbarToolsIcon, setNavbarToolsIcon] = useState("ellipsis");
  const [loginButtonIcon, setLoginButtonIcon] = useState(
    stateUser?.getName() === "Guest User" ? "sign-in" : "sign-out"
  );
  const [bookSearchTrie, setBookSearchTrie] = useState<BookTrie>(null);
  const [searchResult, setSearchResult] = useState<IBook[]>([]);

  // Load the user data
  useEffect(() => {
    // test if the user object is defined
    if (user && Object.keys(user).length > 0) {
      setUser(user as IUser);
    } else if (testUser) {
      setUser(testUser);
    }
  }, [user, testUser]);

  // Load the book data
  useEffect(() => {
    if (books && books.length > 0) {
      setBookSearchTrie(new BookTrie(books));
    }
  }, [books]);

  // Update the login button icon
  useEffect(() => {
    if (stateUser?.getName() === "Guest User") {
      setLoginButtonIcon("sign-in");
    } else {
      setLoginButtonIcon("sign-out");
    }
  }, [stateUser]);

  const toggleLoginButton = () => {
    if (stateUser?.getName() === "Guest User") {
      navigate("/sign-in");
    } else {
      navigate("/sign-out");
    }
  };

  const toggleOffcanvasAndIcon = () => {
    toggleOffcanvas();
    setOffCanvasToggleIcon(offCanvasToggleIcon === "bars" ? "xmark" : "bars");
  };

  const searchBook = (searchTerm: string) => {
    if (searchTerm.length > 0) {
      const result = bookSearchTrie.search(searchTerm);
      setSearchResult([...result.values()]);
    }
  };

  const removeBookFromWishlist = (book: IBook) => {
    (user as IUser).removeFromWishlist(book.getFormattedTitle());
    setUserWishlist((user as IUser).getWishlist());
  };

  const removeBookFromCart = (book: IBook) => {
    (user as IUser).removeFromCart(book.getFormattedTitle());
    setUserCart((user as IUser).getCart());
  };

  const handleAddAllToCart = () => {
    (user as IUser).addAllToCart();
    setUserCart((user as IUser).getCart());
    setUserWishlist((user as IUser).getWishlist());
  };

  const handleCheckout = () => {
    navigate("/checkout");
  }

  return (
    <NavBarContext.Provider value={{
      stateUser,
      userWishlist,
      userCart,
      searchResult,
      textBtnClasses,
      offCanvasToggleIcon,
      navbarToolsIcon,
      loginButtonIcon,
      setOffCanvasToggleIcon,
      setNavbarToolsIcon,
      searchBook,
      removeBookFromCart,
      removeBookFromWishlist,
      toggleOffcanvasAndIcon,
      toggleLoginButton,
      handleAddAllToCart,
      handleCheckout
    }}
    > <div
        className="navbar
                   h-12
                   w-[360px]
                   fixed
                   bg-primary
                   text-base-100
                   rounded-xl
                   shadow-lg
                   z-50
                   sm:w-[99%]
                   mt-2"
      >
        {/* Navbar start */}
        <NavBarStart/>

        {/* Navbar center */}
        <NavBarCenter/>

        {/* Navbar end */}
        <NavBarEnd/>
      </div>
    </NavBarContext.Provider>
  );
};

export { NavBarContext };
export default NavBar;
