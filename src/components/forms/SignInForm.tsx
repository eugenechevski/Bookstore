import Page from "components/general/Page";

const SignInForm = () => {
    return (
        <Page content={
            <div className="p-6 
                            w-3/4 
                            bg-base-100 
                            rounded-xl 
                            sm:w-1/4">
                <div className="form-control 
                                text-sm 
                                w-full 
                                h-full 
                                justify-center">
                    <label className="label 
                                    font-bold">Username/email</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <label className="label 
                                    font-bold">Password</label>
                    <input type="text" className="input-sm 
                                                rounded-lg 
                                                input-bordered" />
                    <button className="btn-primary 
                                    rounded-full 
                                    w-1/2 
                                    self-center 
                                    mt-6">Sign-in</button>
                </div>
            </div>
        } blank={true}></Page>
    )
};

export default SignInForm;