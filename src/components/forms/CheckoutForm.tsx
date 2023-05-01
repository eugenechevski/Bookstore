import Page from "components/general/Page";
import { DataContext } from "components/App";
import CheckoutBook from "./CheckoutBook";
import TextButton from "components/general/TextButton";

import generateAddToCartLink from "utils/cartLinkGenerator";

import uniqid from "uniqid";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const CheckoutForm = ({ testUser }: { testUser?: IUser }) => {
  const { user, userCart, setUserCart } = useContext(DataContext);
  const navigate = useNavigate();

  const stateUser = testUser !== undefined ? testUser : user;
  const [cartItems, setCartItems] = useState<IBook[]>(
    testUser !== undefined ? (stateUser as IUser).getCart() : userCart
  );
  const [addToCartLink, setAddToCartLink] = useState<string>("");

  // Load cart items
  useEffect(() => {
    if (userCart !== undefined) {
      setCartItems(userCart);
    }
  }, [userCart]);

  // Create add to cart link
  useEffect(() => {
    if (cartItems.length > 0 && user && Object.keys(user).length > 0) {
      setAddToCartLink(generateAddToCartLink(cartItems, user as IUser));
    }
  }, [cartItems, user])

  const openInNewTab = (url: string) => {
    const newTab = window.open(url, '_blank');
    if (newTab) {
      newTab.focus();
    }
  }

  const handleCheckout = () => {
    if (addToCartLink.length > 0) {
      openInNewTab(addToCartLink);
      navigate("/after-checkout");
      (user as IUser).emptyCart();
      setUserCart((user as IUser).getCart());
    } else {
      navigate("/home");
    }
  };

  return (
    <Page
      content={
        <div
          className="p-6 
                            w-[85%] 
                            h-3/4
                            rounded-xl 
                            bg-base-100 
                            sm:w-1/4"
        >
          {/* Main container */}
          <div
            className="flex
                                flex-col
                                items-center
                                justify-center"
          >
            <div
              className="flex
              flex-col
              gap-6
              scrollbar
              max-h-[444px]
              sm:max-h-[540px]
              overflow-y-scroll"
              >
              {/* Items */}
              {cartItems?.map((book: IBook) => (
                <CheckoutBook
                  key={uniqid()}
                  book={book}
                  quantity={(user as IUser).getQuantity(
                    book.getFormattedTitle()
                  )}
                  updateQuantity={(user as IUser)?.updateQuantity.bind(
                    user,
                    book?.getFormattedTitle()
                  )}
                  updateUserCart={() => setUserCart((user as IUser).getCart())}
                />
              ))}
            </div>

            {/* Checkout button */}
            <TextButton
              textContent={"Checkout"}
              onClickListener={handleCheckout}
              classes="btn-primary 
                       rounded-full 
                       w-1/2 
                       self-center 
                       mt-12
                       text-center"
            />
          </div>
        </div>
      }
      blank={true}
    ></Page>
  );
};

export default CheckoutForm;
