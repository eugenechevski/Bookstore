import uniqid from "uniqid";
import { NavBarContext } from "./NavBar";

import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import IconButton from "./IconButton";

const NavBarCenter = () => {
  const { searchBook, searchResult } = useContext(NavBarContext);
  const [searchText, setSearchText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    searchBook(e.target.value);
  };

  const handleClearSearch = () => {
    // clear the search result
    setSearchText("");
    searchBook("");

    // clear the search input
    document.querySelector<HTMLInputElement>(".form-control input").value = "";
  };

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
                   peer/search
                   relative"
      >
        <input
          onChange={handleChange}
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

      {/* Clear search button */}
      {searchText.length > 0 && (
        <IconButton
          iconName={"close"}
          onClickListener={handleClearSearch}
          classes={"absolute right-16 sm:relative sm:right-0"}
        />
      )}

      {/* Search results */}
      <div
        className={`absolute
                   dropdown
                   dropdown-open
                   mt-16
                   w-1/2 
                   sm:mt-12 
                   sm:w-1/3
                   ${searchText.length > 0 ? "block" : "hidden"}`}
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
    </div>
  );
};

export default NavBarCenter;
