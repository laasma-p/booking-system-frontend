import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiryTime");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="w-full bg-blue-700 dark:bg-blue-600 flex transition-all">
      <nav className="w-full mx-auto p-2 px-2 flex items-center">
        <div className="w-16 h-16 flex justify-center items-center ml-2 mr-4">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex w-full">
          <div className="w-10/12 border-red-200 text-lg space-x-6">
            <NavLink
              to="/booking"
              className="text-gray-950 hover:text-gray-100 transition-all"
            >
              Booking
            </NavLink>
            <NavLink
              to="/book-a-time"
              className="text-gray-950 hover:text-gray-100 transition-all"
            >
              Book a time
            </NavLink>
          </div>
          <div className="flex w-2/12 justify-end mr-2">
            <button
              className="text-gray-950 text-lg hover:text-gray-100 transition-all"
              onClick={logoutHandler}
            >
              Log out
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navigation.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Navigation;
