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

  const registerDataChangeHandler = (event) => {
    setRegisterData({
      ...registerData,
      [event.target.id]: event.target.value,
    });
  };

  const registerDataHandler = (event) => {
    event.preventDefault();
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="first_name"
              className="text-gray-950 dark:text-gray-100"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              value={registerData.first_name}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="last_name"
              className="text-gray-950 dark:text-gray-100"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              value={registerData.last_name}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label
              htmlFor="birthday"
              className="text-gray-950 dark:text-gray-100"
            >
              Birthday
            </label>
            <input
              type="date"
              id="birthday"
              value={registerData.birthday}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-950 dark:text-gray-100">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={registerData.email}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="phone_number"
              className="text-gray-950 dark:text-gray-100"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              value={registerData.phone_number}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="password"
              className="text-gray-950 dark:text-gray-100"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={registerData.password}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="repeat_password"
              className="text-gray-950 dark:text-gray-100"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="repeat_password"
              value={registerData.repeat_password}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="address"
              className="text-gray-950 dark:text-gray-100"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={registerData.address}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="city" className="text-gray-950 dark:text-gray-100">
              City
            </label>
            <input
              type="text"
              id="city"
              value={registerData.city}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="post_code"
              className="text-gray-950 dark:text-gray-100"
            >
              Post Code
            </label>
            <input
              type="text"
              id="post_code"
              value={registerData.post_code}
              onChange={registerDataChangeHandler}
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
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
