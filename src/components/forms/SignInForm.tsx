import Page from "components/general/Page";
import useForm from "utils/useForm";
import { useNavigate } from "react-router-dom";
import { emailRegex, passwordRegex } from "utils/constants";

const validate = (values: {
  email: string,
  password: string
}): {
  email?: string,
  password?: string
} => {
  let errors: {
    email?: string,
    password?: string
  } = {};

  if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!passwordRegex.test(values.password)) {
    errors.password = "Invalid password";
  }

  return errors;
};

const SignInForm = () => {
    const navigate = useNavigate();
    const afterValidation = () => {
      // Do the database matching here
      navigate("/after-sign-in");
    };
    const { handleChange, handleSubmit, values, errors } = useForm({
      email: '',
      password: ''
    }, validate, afterValidation);

    return (
        <Page content={
            <div className="p-6 
                            w-3/4 
                            bg-base-100 
                            rounded-xl 
                            sm:w-1/4">
                <form onSubmit={handleSubmit}
                      className="form-control
                                 text-sm
                                 w-full
                                 h-full
                                 justify-center">
                    {/** Email */}
                    <div className="flex
                                    flex-col">
                        <label htmlFor="email"
                               className="label 
                                          font-bold">E-mail</label>
                        <input id="email"
                               onChange={handleChange}
                               name="email"
                               value={values.email}
                               placeholder="john.doe@example.com"
                               type="text" 
                               className="input-sm
                                          rounded-lg
                                          input-bordered" />
                        {errors.email && <p>{errors.email}</p>}
                    </div>

                    {/** Password */}
                    <div className="flex
                                    flex-col">
                        <label htmlFor="password"
                               className="label 
                                          font-bold">Password</label>
                        <input id="password"
                               onChange={handleChange}
                               value={values.password}
                               name="password"
                               placeholder="password"
                               type="password" 
                               className="input-sm
                                          rounded-lg
                                          input-bordered" />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    
                    {/** Submit */}
                    <button type="submit" className="btn-primary 
                                                     rounded-full 
                                                     w-1/2 
                                                     self-center 
                                                     mt-6
                                                     text-center">Sign-in</button>
                </form>
            </div>
        } blank={true}></Page>
    )
};

export default SignInForm;