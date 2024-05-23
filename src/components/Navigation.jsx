const Navigation = () => {
  return (
    <header className="bg-blue-700 dark:bg-blue-600 transition-all">
      <nav className="p-4 flex justify-between items-center">
        <div>
          <a
            href="#"
            className="text-gray-950 hover:text-gray-100 mr-4 transition-all"
          >
            Bookings
          </a>
          <a
            href="#"
            className="text-gray-950 hover:text-gray-100 transition-all"
          >
            Book a time
          </a>
        </div>
        <div>
          <button className="text-gray-950 hover:text-gray-100 transition-all">
            Log out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
