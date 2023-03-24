import Page from "components/general/Page";
import CheckoutBook from "./CheckoutBook";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { DataContext } from "components/App";
import { useContext, useRef } from "react";

const CheckoutForm = ({ cartItemsProp }: { cartItemsProp?: Book[] }) => {
    const cartItemsContext = useContext(DataContext).user;
    const cartItems = useRef(Object.keys(cartItemsContext).length === 0 ? cartItemsProp : cartItemsContext.getCart());

    return (
        <Page content={
            <div className="p-6 
                            w-[85%] 
                            h-3/4
                            rounded-xl 
                            bg-base-100 
                            sm:w-1/4">
                {/* Main container */}
                <div className="flex
                                flex-col
                                items-center
                                justify-center">
                    {/* Items */}
                    <div className="flex
                                    flex-col
                                    gap-6
                                    scrollbar
                                    h-[444px]
                                    sm:h-[540px]
                                    overflow-y-scroll">
                        {cartItems.current.map((book: Book) => <CheckoutBook key={uniqid()}
                                                                             book={book} />)}
                    </div>
                    {/* Checkout button */}
                    <Link to={"/after-checkout"} className="btn-primary 
                                                            rounded-full 
                                                            w-1/2 
                                                            self-center 
                                                            mt-12
                                                            text-center">Checkout</Link>
                </div>
            </div>
        } blank={true}></Page>
    )
};

export default CheckoutForm;