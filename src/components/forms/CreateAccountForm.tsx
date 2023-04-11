import Page from "components/general/Page";
import { emailRegex, passwordRegex } from "utils/constants";
import useForm from "utils/useForm";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "components/App";
import User from "scripts/User";

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const doStuffOnceValid = () => {
    navigate("/after-creation");
  };

  const { signUp, setUser, bookMap } = useContext(DataContext);
  const validate = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    // Define a function that takes the state values and returns an error object
    let errors: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
      authentification?: string;
    } = {};

    const firstNameRegex = /^[a-zA-Z]{3,}$/;

    // Check if the first name is valid
    if (!firstNameRegex.test(values.firstName)) {
      errors.firstName = "First name must be at least 3 characters";
    }

    const lastNameRegex = firstNameRegex;

    // Check if the last name is valid
    if (!lastNameRegex.test(values.lastName)) {
      errors.lastName = "Last name must be at least 3 characters";
    }

    // Check if the email is valid
    if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }

    // Check if the password is valid
    if (!passwordRegex.test(values.password)) {
      errors.password =
        "Password must be at least 8 characters, include at least one uppercase letter, one lowercase letter, one number and one special character";
    }

    // Check if the passwords match
    if (values.password !== "" && values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    // Sign up the user if there are no errors
    if (Object.keys(errors).length === 0) {
      let result =
        Object.keys(signUp).length > 0 &&
        (await (
          signUp as (
            email: string,
            password: string
          ) => Promise<UserData | { errorMessage: string }>
        )(values.email, values.password));

      // If there is an error, set the error message
      // Otherwise, set the user
      if (Object.hasOwn(result, "errorMessage")) {
        errors.authentification = (
          result as { errorMessage: string }
        ).errorMessage;
      } else {
        result = result as UserData;

        setUser(User(result, bookMap));
      }
    }

    return errors; // Return the error object
  };

  const { handleSubmit, handleChange, values, errors } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    doStuffOnceValid
  );

  return (
    <Page
      content={
        <div
          className="p-6 
                            w-3/4 
                            rounded-xl 
                            bg-base-100 
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
            {/** First name */}
            <div
              className="flex
                                    flex-col"
            >
              <label
                htmlFor="firstName"
                className="label
                                        font-bold"
              >
                First Name
              </label>
              <input
                onChange={handleChange}
                id="firstName"
                type="text"
                name="firstName"
                placeholder="John"
                value={values.firstName}
                className="input-sm
                                        rounded-lg
                                        input-bordered"
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>

            {/** Last name */}
            <div
              className="flex
                                    flex-col"
            >
              <label
                htmlFor="lastName"
                className="label
                                           font-bold"
              >
                Last Name
              </label>
              <input
                onChange={handleChange}
                name="lastName"
                placeholder="Doe"
                value={values.lastName}
                id="lastName"
                type="text"
                className="input-sm
                                        rounded-lg
                                        input-bordered"
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>

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
                onChange={handleChange}
                name="email"
                value={values.email}
                placeholder="john.doe@example.com"
                id="email"
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
                onChange={handleChange}
                name="password"
                value={values.password}
                placeholder="password"
                id="password"
                type="password"
                className="input-sm
                                        rounded-lg
                                        input-bordered"
              />
              {errors.password && <p>{errors.password}</p>}
            </div>

            {/** Confirm password */}
            <div
              className="flex
                                    flex-col"
            >
              <label
                htmlFor="confirmPassword"
                className="label
                                        font-bold"
              >
                Confirm Password
              </label>
              <input
                onChange={handleChange}
                name="confirmPassword"
                value={values.confirmPassword}
                placeholder="confirm password"
                id="confirmPassword"
                type="password"
                className="input-sm
                                        rounded-lg
                                        input-bordered"
              />
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            </div>

            {/** Submit button */}
            <button
              type="submit"
              className="btn-primary 
                                                     rounded-full 
                                                     w-1/2 
                                                     self-center 
                                                     mt-12
                                                     text-center"
            >
              Create
            </button>
          </form>
        </div>
      }
      blank={true}
    ></Page>
  );
};

export default CreateAccountForm;
