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
                                    font-bold">First Name</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">Last Name</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">E-mail</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">Password</label>
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