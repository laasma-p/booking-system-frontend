import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    email: "",
    phone_number: "",
    password: "",
    repeat_password: "",
    address: "",
    city: "",
    post_code: "",
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (field, value) => {
    let error;
    switch (field) {
      case "first_name":
      case "last_name":
      case "address":
      case "city":
      case "birthday":
      case "email":
      case "phone_number":
      case "password":
      case "repeat_password":
      case "post_code":
        if (!value) {
          error = `${field.replace("_", " ")} is required.`;
        }
        break;
      default:
        break;
    }
    return error;
  };

  const validateAllFields = () => {
    const newErrors = {};
    for (const field in registerData) {
      const error = validateField(field, registerData[field]);
      if (error) {
        newErrors[field] = error;
      }
    }
    setErrors(newErrors);
    return newErrors;
  };

  const registerDataChangeHandler = (event) => {
    const { id, value } = event.target;
    setRegisterData({
      ...registerData,
      [id]: value,
    });

    if (touchedFields[id]) {
      const error = validateField(id, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: error,
      }));
    }
  };

  const registerDataHandler = async (event) => {
    event.preventDefault();
    const currentErrors = validateAllFields();

    if (Object.keys(currentErrors.length > 0)) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      if (!response.ok) {
        setErrorMessage("Registration failed.");
        setSuccessMessage("");
      } else {
        setSuccessMessage("You have successfully registered.");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  return (
    <div className="min-h-dvh flex items-center flex-col justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-gray-950 dark:text-gray-100 text-center mb-6">
        Register
      </h1>
      <form
        className="w-5/6 max-w-lg bg-white dark:bg-gray-800 p-6 md:p-8 rounded-md shadow-md"
        onSubmit={registerDataHandler}
      >
        {successMessage && (
          <p className="my-2 text-lg text-green-500 dark:text-green-400">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="my-2 text-lg text-red-500 dark:text-red-400">
            {errorMessage}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { id: "first_name", label: "First Name" },
            { id: "last_name", label: "Last Name" },
            { id: "birthday", label: "Birthday" },
            { id: "email", label: "E-mail" },
            { id: "phone_number", label: "Phone Number" },
            { id: "password", label: "Password" },
            { id: "repeat_password", label: "Repeat Password" },
            { id: "address", label: "Address" },
            { id: "city", label: "City" },
            { id: "post_code", label: "Post Code" },
          ].map((field) => {
            return (
              <div key={field.id} className="flex flex-col space-y-2">
                <label
                  htmlFor={field.id}
                  className="text-gray-950 dark:text-gray-100"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  value={registerData[field.id]}
                  onChange={registerDataChangeHandler}
                  className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors[field.id] && (
                  <span className="text-red-500 dark:text-red-400">
                    {errors[field.id]}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 mt-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-950 dark:text-gray-100">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-700 dark:text-blue-600 hover:text-blue-800 dark:hover:text-blue-700 transition-all"
          >
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
