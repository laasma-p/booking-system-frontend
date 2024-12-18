import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ setLoggedIn }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const loginDataChangeHandler = (event) => {
    setLoginData({ ...loginData, [event.target.id]: event.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        const tokenExpiryTime = new Date().getTime() + 3600 * 1000;
        localStorage.setItem("tokenExpiryTime", tokenExpiryTime);
        setLoggedIn(true);
        navigate("/booking");

        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("tokenExpiryTime");
          setLoggedIn(false);
          navigate("/");
        }, 3600 * 1000);
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12 bg-gray-50">
      <div className="w-full max-w-md bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-300">
        <h1 className="text-3xl font-semibold text-center text-gray-950 mb-6">
          Log In
        </h1>
        <form className="space-y-6" onSubmit={loginHandler}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-gray-950">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={loginData.email}
              onChange={loginDataChangeHandler}
              className="w-full text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="password" className="text-gray-950">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={loginDataChangeHandler}
              className="w-full text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-gray-100 mt-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
          >
            Log In
          </button>
          <p className="mt-4 text-center text-gray-950">
            Do not have an account?
            <br />
            <Link
              to="/register"
              className="text-blue-700 hover:text-blue-800 transition-all"
            >
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Login;
