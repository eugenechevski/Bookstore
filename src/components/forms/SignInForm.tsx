// Components
import Page from "components/general/Page";
import { DataContext } from "components/App";

// Classes
import User from "classes/User";

// React stuff
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// Utilities
import useForm from "utils/useForm";
import { emailRegex, passwordRegex } from "utils/constants";

/**
 * A form that allows the user to sign in
 */
const SignInForm = () => {
  const navigate = useNavigate();
  const afterValidation = () => {
    navigate("/after-sign-in");
  };

  // Context
  const { signIn, setUser, bookMap } = useContext(DataContext);

  // Validation function
  const validate = async (values: { email: string; password: string }) => {
    let errors: {
      email?: string;
      password?: string;
      authentification?: string;
    } = {};

    // Check if the email and password are valid
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Check if the password is valid
    if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password";
    }

    // If there are no errors, check if the user exists in the database
    if (Object.keys(errors).length === 0) {
      let result = await (
        signIn as (
          email: string,
          password: string
        ) => Promise<UserData | { errorMessage: string }>
      )(values.email, values.password);

      // If the user exists, set the user
      if (Object.hasOwn(result, "errorMessage")) {
        errors.authentification = (
          result as { errorMessage: string }
        ).errorMessage;
      } else {
        result = result as UserData;

        setUser(new User(result, bookMap));
      }
    }

    return errors;
  };

  // Form stuff
  const { handleChange, handleSubmit, values, errors } = useForm(
    {
      email: "",
      password: "",
    },
    validate,
    afterValidation
  );

  return (
    <Page
      content={
        <div
          className="p-6
                     w-3/4
                     bg-base-100
                     rounded-xl
                     sm:w-1/4"
        >
          <form
            onSubmit={handleSubmit}
            className="form-control
                       text-sm
                       w-full
                       h-full
                       justify-center"
          >
            {/** Email */}
            <div
              className="flex
                         flex-col"
            >
              <label
                htmlFor="email"
                className="label
                           font-bold"
              >
                E-mail
              </label>
              <input
                id="email"
                onChange={handleChange}
                name="email"
                value={values.email}
                placeholder="john.doe@example.com"
                type="text"
                className="input-sm
                           rounded-lg
                           input-bordered"
              />
              {errors.email && <p>{errors.email}</p>}
            </div>

            {/** Password */}
            <div
              className="flex
                         flex-col"
            >
              <label
                htmlFor="password"
                className="label
                           font-bold"
              >
                Password
              </label>
              <input
                id="password"
                onChange={handleChange}
                value={values.password}
                name="password"
                placeholder="password"
                type="password"
                className="input-sm
                           rounded-lg
                           input-bordered"
              />
              {errors.password && <p>{errors.password}</p>}
            </div>

            {errors.authentification && (errors.authentification as string)}

            {/** Submit */}
            <button
              type="submit"
              className="btn-primary
                         rounded-full
                         w-1/2
                         self-center
                         mt-6
                         text-center"
            >
              Sign-in
            </button>
          </form>
        </div>
      }
      blank={true}
    ></Page>
  );
};

export default SignInForm;
