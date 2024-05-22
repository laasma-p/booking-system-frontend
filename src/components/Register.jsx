const Register = () => {
  return (
    <div className="min-h-dvh flex items-center flex-col justify-center bg-gray-100">
      <h1 className="text-3xl font-semibold text-gray-950 text-center mb-6">
        Register
      </h1>
      <form className="w-5/6 max-w-lg bg-white p-6 md:p-8 rounded-md shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">First Name</label>
            <input
              type="text"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">Last Name</label>
            <input
              type="text"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label className="text-gray-950">Birthday</label>
            <input
              type="date"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">E-mail</label>
            <input
              type="email"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">Phone Number</label>
            <input
              type="text"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">Password</label>
            <input
              type="password"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">Repeat Password</label>
            <input
              type="password"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">Address</label>
            <input
              type="text"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">City</label>
            <input
              type="text"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-950">Post Code</label>
            <input
              type="text"
              className="text-gray-950 px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-blue-700 hover:bg-blue-800 text-gray-100 mt-6 py-3 rounded-md md:text-lg lg:text-xl transition-all"
        >
          Register
        </button>
        <p className="mt-4 text-center text-gray-950">
          Already have an account?{" "}
          <span>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-800 transition-all"
            >
              Log in here
            </a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
