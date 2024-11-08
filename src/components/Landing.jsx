import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-dvh bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?driving')",
      }}
    >
      <div className="mx-4 bg-gray-100 dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-50 p-4 md:p-8 rounded-md shadow-md">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-4 md:mb-8 text-gray-950 dark:text-gray-100">
          Book a time for a theory test online
        </h1>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <button
            type="button"
            className="bg-blue-700 dark:bg-blue-600 hover:bg-blue-800 dark:hover:bg-blue-700 text-gray-100 px-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-gray-100 px-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
