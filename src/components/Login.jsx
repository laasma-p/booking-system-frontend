import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-dvh flex items-center flex-col justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-semibold text-gray-950 dark:text-gray-100 text-center mb-6">
        Log In
      </h1>
      <form className="w-5/6 max-w-lg bg-white dark:bg-gray-800 p-6 md:p-8 rounded-md shadow-md">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950 dark:text-gray-100">E-mail</label>
            <input
              type="email"
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950 dark:text-gray-100">Password</label>
            <input
              type="password"
              className="text-gray-950 dark:text-gray-100 dark:bg-gray-700 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 mt-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
        >
          Log In
        </button>
        <p className="mt-4 text-center text-gray-950 dark:text-gray-100">
          Do not have an account?{" "}
          <Link
            to="/register"
            className="text-blue-700 dark:text-blue-600 hover:text-blue-800 dark:hover:text-blue-700 transition-all"
          >
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
