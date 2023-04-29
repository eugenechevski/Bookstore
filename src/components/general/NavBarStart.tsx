import { Link } from "react-router-dom";
import IconButton from "./IconButton";
import { NavBarContext } from "./NavBar";

import { useContext } from "react";

const NavBarStart = () => {
  const { toggleOffcanvasAndIcon, offCanvasToggleIcon } = useContext(NavBarContext);

  return (
    <>
      {/* Navbar start */}
      <div
        className="navbar-start 
                   w-1/6 
                   sm:w-1/4"
      >
        {/* Hamburger */}
        <IconButton
          onClickListener={toggleOffcanvasAndIcon}
          classes={""}
          iconName={offCanvasToggleIcon}
        ></IconButton>

        {/* Title */}
        <Link
          to={"/home"}
          className="ml-2 
                                hidden 
                                text-shadow-lg 
                                shadow-gray-600
                                sm:block 
                                sm:text-2xl"
        >
          Bookstore.
        </Link>
      </div>
    </>
  );
};

export default NavBarStart;