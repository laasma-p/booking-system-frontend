import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGRyaXZpbmclMjB0ZXN0fGVufDB8fHx8MTYyODQ4MTYwNg&ixlib=rb-1.2.1&q=80&w=1080')",
      }}
    >
      <div className="w-full max-w-4xl bg-gray-100 bg-opacity-50 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6 text-gray-950">
          Book a time for a theory test online
        </h1>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <button
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-gray-100 px-5 py-3 rounded-md text-lg md:text-xl transition-all"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-600 text-gray-100 px-5 py-3 rounded-md text-lg md:text-xl transition-all"
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
