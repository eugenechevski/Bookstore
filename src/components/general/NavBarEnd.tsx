import IconButton from "components/general/IconButton";
import TextButton from "components/general/TextButton";

import uniqid from "uniqid";

import { Link } from "react-router-dom";
import { useContext } from "react";

import { NavBarContext } from "./NavBar";

const NavBarEnd = () => {
  const {
    navbarToolsIcon,
    setNavbarToolsIcon,
    textBtnClasses,
    userWishlist,
    removeBookFromWishlist,
    removeBookFromCart,
    userCart,
    stateUser,
    toggleLoginButton,
    loginButtonIcon,
  } = useContext(NavBarContext);

  return (
    <div
      className={`navbar-end 
                  flex 
                  flex-col 
                  bg-primary 
                  gap-3 
                  w-1/6 
                  transition-all 
                  duration-300 
                  ease-in 
                  rounded-xl 
                  z-50
                  sm:w-1/4 
                  sm:bg-inherit 
                  sm:flex-row 
                  ${
                    navbarToolsIcon === "xmark"
                      ? "mt-5 " +
                        "translate-y-28 " +
                        "p-2 " +
                        "shadow-md"
                      : ""
                  }`}
    >
      {/* Tools-collapse toggle which is displayed for smaller screens */}
      {window.screen.width < 640 && (
        <div
          data-testid="tools-toggle"
          onClick={() =>
            setNavbarToolsIcon(
              navbarToolsIcon === "xmark" ? "ellipsis" : "xmark"
            )
          }
        >
          <IconButton
            onClickListener={() => null}
            classes={""}
            iconName={navbarToolsIcon}
          ></IconButton>
        </div>
      )}
      {/* Tools elememts*/}
      {(window.screen.width > 640 || navbarToolsIcon === "xmark") && (
        <>
          {/* Wishlist dropdown */}
          <div
            className="dropdown 
                       dropdown-left 
                       sm:dropdown-bottom"
          >
            <label data-testid={"wishlist-toggle"} tabIndex={0}>
              {window.screen.width > 640 ? (
                <TextButton
                  onClickListener={() => null}
                  classes={textBtnClasses}
                  textContent={"Wishlist"}
                ></TextButton>
              ) : (
                <IconButton
                  onClickListener={() => null}
                  classes={""}
                  iconName={"heart"}
                ></IconButton>
              )}
            </label>

            <ul
              data-testid={"wishlist-dropdown"}
              tabIndex={0}
              className="dropdown-content
                         menu
                         p-2 
                         gap-1
                         shadow 
                         bg-primary
                         rounded-box
                         text-sm
                         border
                         border-secondary
                         max-h-96
                         scrollbar
                         overflow-scroll"
            >
              {(userWishlist as IBook[]).map((item) => (
                <Link
                  key={uniqid()}
                  to={`/categories/${item.getFormattedCategoryName()}/${item.getFormattedTitle()}`}
                  className="flex"
                >
                  <div
                    className="flex
                               justify-start
                               items-center
                               w-48
                               h-12
                               overflow-scroll
                               scrollbar
                               p-3
                               border
                               border-primary-focus
                               rounded-md
                               hover:bg-primary-focus"
                  >
                    {item.getTitle()}
                  </div>
                  <IconButton
                    iconName={"close"}
                    classes={"ml-2"}
                    onClickListener={removeBookFromWishlist.bind(null, item)}
                  />
                </Link>
              ))}
              </ul>
          </div>

          {/* Cart dropdown */}
          <div
            className="dropdown 
                       dropdown-left 
                       sm:dropdown-bottom"
          >
            <label data-testid={"cart-toggle"} tabIndex={0}>
              {window.screen.width > 640 ? (
                <TextButton
                  onClickListener={() => null}
                  classes={textBtnClasses}
                  textContent={"Cart"}
                ></TextButton>
              ) : (
                <IconButton
                  onClickListener={() => null}
                  classes={""}
                  iconName={"cart"}
                ></IconButton>
              )}
            </label>

            <ul
              data-testid={"cart-dropdown"}
              tabIndex={0}
              className="dropdown-content
                         menu
                         p-2 
                         gap-1
                         shadow 
                         drop-shadow-lg
                         bg-primary
                         rounded-box
                         text-sm
                         border
                         border-secondary
                         max-h-96
                         scrollbar
                         overflow-scroll"
            >
              {(userCart as IBook[]).map((item) => (
                <Link
                  key={uniqid()}
                  to={`/categories/${item.getFormattedCategoryName()}/${item.getFormattedTitle()}`}
                  className="flex"
                >
                  <div
                    className="flex
                               justify-start
                               items-center
                               w-48
                               h-12
                               overflow-scroll
                               scrollbar
                               p-3
                               border
                               border-primary-focus
                               rounded-md
                               hover:bg-primary-focus"
                  >
                    {item.getTitle()}
                  </div>
                  <IconButton
                    iconName={"close"}
                    classes={"ml-2"}
                    onClickListener={removeBookFromCart.bind(null, item)}
                  />
                </Link>
              ))}
              </ul>
          </div>

          {/* User information dropdown */}
          <div
            className="dropdown 
                                        dropdown-left 
                                        sm:dropdown-bottom"
          >
            {/* User information toggle */}
            <label data-testid={"user-toggle"} tabIndex={0}>
              <IconButton
                onClickListener={() => null}
                classes={""}
                iconName={"user"}
              ></IconButton>
            </label>
            {/* User information dropdown content */}
            <div
              tabIndex={0}
              className="dropdown-content 
                                                         p-2 
                                                         shadow 
                                                         bg-primary 
                                                         rounded-box 
                                                         w-52"
            >
              {stateUser?.getName()}
            </div>
          </div>
          {/* Sign-in/sign-out button */}
          <div data-testid="sign-toggle">
            <IconButton
              onClickListener={toggleLoginButton}
              classes={""}
              iconName={loginButtonIcon}
            ></IconButton>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBarEnd;
