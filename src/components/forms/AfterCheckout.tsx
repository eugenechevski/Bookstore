import Page from "components/general/Page";
import { Link } from "react-router-dom";

const AfterCheckout = () => {
    return (
        <Page content={
            <div className="w-72
                            h-64
                            rounded-xl
                            bg-base-100
                            flex
                            flex-col
                            justify-center
                            items-center
                            gap-12
                            sm:w-96">
                <div className="font-bold
                                text-center
                                h-12
                                mt-12">You checked-out successfully.</div>
                <Link className="btn-primary 
                                 rounded-full
                                 self-center
                                 w-1/2
                                 text-center" to={"/home"}>
                    Continue
                </Link>
            </div>
        } blank={true}></Page>
    )
};

export default AfterCheckout;