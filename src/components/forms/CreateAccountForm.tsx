import Page from "components/general/Page";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
    return (
        <Page content={
            <div className="p-6 
                            w-3/4 
                            rounded-xl 
                            bg-base-100 
                            sm:w-1/4">
                <div className="form-control 
                                text-sm 
                                w-full 
                                h-full 
                                justify-center">
                    <label className="label 
                                    font-bold">Create username</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">Email</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">Create password</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">Repeat password</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <Link to={"/after-creation"} className="btn-primary 
                                                            rounded-full 
                                                            w-1/2 
                                                            self-center 
                                                            mt-12
                                                            text-center">Create</Link>
                </div>
            </div>
        } blank={true}></Page>
    );
};

export default CreateAccountForm;