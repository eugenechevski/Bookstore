import {useState} from 'react';

const useForm = (initialState: any, validate: (any) => Promise<any>, doStuffOnceValid: () => any): {
  values: any,
  errors: any,
  handleChange: (e: any) => void,
  handleSubmit: (e: any) => void
} => {
    // Declare state variables for values and errors
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    
    // Define a function that handles the input change event
    const handleChange = (event) => {
      // Get the name and value of the input element
      const { name, value } = event.target;
      // Update the state values with the new input value
      setValues({
        ...values,
        [name]: value,
      });
    };
    
    // Define a function that handles the form submit event
    const handleSubmit = async (event) => {
      // Prevent default browser behavior
      event.preventDefault();
      // Validate the state values using the validate function
      const validationErrors = await validate(values);
      // Set the state errors with the validation errors
      setErrors(validationErrors);

      // If validation was successful, do stuff
      if (Object.keys(validationErrors).length === 0) {
        doStuffOnceValid();
      }
    };
    
    return { values, errors, handleChange, handleSubmit }; // Return an object with state and handlers
};

export default useForm;