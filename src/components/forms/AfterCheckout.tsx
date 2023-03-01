import Page from "components/general/Page";

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
                <button className="btn-primary 
                                   rounded-full 
                                   w-1/2 
                                   self-center">Continue</button>
            </div>
        } blank={true}></Page>
    )
};

export default AfterCheckout;