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

    const capitalizedField = field
      .replace("_", " ")
      .replace(/^\w/, (capitalized) => capitalized.toUpperCase());

    switch (field) {
      case "first_name":
      case "last_name":
      case "address":
      case "city":
        if (!value) {
          error = `${capitalizedField} is required.`;
        }
        break;
      case "birthday":
        if (!value) {
          error = "Birthday is required.";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid.";
        }
        break;
      case "phone_number":
        if (!value) {
          error = "Phone number is required.";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required.";
        } else if (value.length < 8) {
          error = "Password must be at least 8 characters.";
        }
        break;
      case "repeat_password":
        if (!value) {
          error = "Repeat password.";
        } else if (value !== registerData.password) {
          error = "Passwords do not match.";
        }
        break;
      case "post_code":
        if (!value) {
          error = "Post code is required.";
        } else if (!/^\d{4}$/.test(value)) {
          error = "Post code is invalid.";
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

  const inputBlurHandler = (event) => {
    const { id, value } = event.target;
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [id]: true,
    }));

    const error = validateField(id, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: error,
    }));
  };

  const registerDataHandler = async (event) => {
    event.preventDefault();
    const currentErrors = validateAllFields();

    if (Object.keys(currentErrors).length > 0) {
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
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12 bg-gray-50">
      <div className="w-full max-w-2xl bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-gray-950 mb-6">
          Register
        </h1>
        <form className="space-y-6" onSubmit={registerDataHandler}>
          {successMessage && (
            <p className="my-2 text-lg text-green-500">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="my-2 text-lg text-red-500">{errorMessage}</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { id: "first_name", label: "First Name" },
              { id: "last_name", label: "Last Name" },
              { id: "birthday", label: "Birthday", type: "date" },
              { id: "email", label: "E-mail", type: "email" },
              { id: "phone_number", label: "Phone Number" },
              { id: "password", label: "Password", type: "password" },
              {
                id: "repeat_password",
                label: "Repeat Password",
                type: "password",
              },
              { id: "address", label: "Address" },
              { id: "city", label: "City" },
              { id: "post_code", label: "Post Code" },
            ].map((field) => {
              return (
                <div key={field.id} className="flex flex-col space-y-2">
                  <label htmlFor={field.id} className="text-gray-950">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    id={field.id}
                    value={registerData[field.id]}
                    onChange={registerDataChangeHandler}
                    onBlur={inputBlurHandler}
                    className={`w-full text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      errors[field.id]
                        ? "border-red-400 focus:ring-red-400"
                        : ""
                    }`}
                  />
                  {errors[field.id] && (
                    <span className="text-red-500">{errors[field.id]}</span>
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-gray-100 mt-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
          >
            Register
          </button>
          <p className="mt-4 text-center text-gray-950">
            Already have an account?
            <br />
            <Link
              to="/login"
              className="text-blue-700 hover:text-blue-800 transition-all"
            >
              Log in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
