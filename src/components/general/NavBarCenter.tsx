import uniqid from "uniqid";
import IconButton from "./IconButton";
import { NavBarContext } from "./NavBar";

import { Link } from "react-router-dom";
import { useContext } from "react";

const NavBarCenter = () => {
  const { searchBook, searchResult } = useContext(NavBarContext);

  return (
    <div
      className="navbar-center 
                            w-2/3 
                            sm:w-1/2"
    >
      {/* Search input */}
      <div
        className="form-control 
                                w-full 
                                mr-2 
                                peer/search"
      >
        <input
          onChange={(e) => searchBook(e.target.value)}
          type="text"
          className="dropdown-toggle 
                                                                                                  input 
                                                                                                  rounded-none 
                                                                                                  border-0 
                                                                                                  border-b-2 
                                                                                                  border-b-base-100 
                                                                                                  bg-transparent 
                                                                                                  focus:outline-none"
        />
      </div>
      {/* Search icon */}
      <div
        className="hidden 
                                sm:block"
        data-testid="search-button"
      >
        <IconButton
          onClickListener={() => null}
          classes={""}
          iconName={"search"}
        ></IconButton>
      </div>
      {/* Search results */}
      {searchResult.length > 0 && (
        <div
          className="absolute 
                       dropdown 
                       dropdown-open 
                       mt-16
                       w-1/2 
                       sm:mt-12 
                       sm:w-1/3"
        >
          <ul
            tabIndex={0}
            className="dropdown-content 
                                                      menu 
                                                      p-2 
                                                      bg-primary 
                                                      w-full 
                                                      rounded-xl 
                                                      shadow-md"
          >
            {searchResult.map((book) => (
              <Link
                to={`/categories/${book.getFormattedCategoryName()}/${book.getFormattedTitle()}`}
                key={uniqid()}
              >
                <li className="menu-item">{book.getTitle()}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarCenter;
