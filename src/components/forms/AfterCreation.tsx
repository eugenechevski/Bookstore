import Page from "components/general/Page";
import { Link } from "react-router-dom";

const AfterCreation = () => {
    return (
        <Page content={
            <div className="p-12 
                            w-3/4 
                            rounded-xl 
                            bg-base-100
                            sm:w-1/4">
                <div className="w-full 
                                h-full 
                                flex 
                                flex-col 
                                items-center 
                                justify-end 
                                gap-12">
                    <div className="font-bold 
                                    text-center 
                                    mt-6">The account has been created.</div>
                    
                    <Link to={"/home"} className="btn-primary 
                                                  rounded-full 
                                                  w-3/4 
                                                  text-center">Procceed</Link>
                </div>
            </div>
        } blank={true}></Page>
    )
};

export default AfterCreation;