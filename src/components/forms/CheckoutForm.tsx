import Page from "components/general/Page";
import CheckoutBook from "./CheckoutBook";
import uniqid from "uniqid";
import { Link } from "react-router-dom";

const bookCover = require("src/assets/images/bookcover.png");

const CheckoutForm = () => {
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
                        {[1000, 1000, 1000, 1, 2, 3, 4].map((i) => <CheckoutBook key={uniqid()}
                                                            bookCover={bookCover}
                                                            title={'1984 asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd asdasdasd asdas'}
                                                            quantity={i} />)}
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