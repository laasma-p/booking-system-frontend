import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ setLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiryTime");
    setLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const resizeHandler = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <header className="w-full bg-blue-400 shadow-md">
      <nav className="w-full max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>

        {windowWidth < 768 && (
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        )}

        {windowWidth >= 768 && (
          <div className="flex space-x-4 items-center text-lg">
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100"
                  : "text-gray-950 hover:text-gray-100 transition-all"
              }
            >
              Booking
            </NavLink>
            <NavLink
              to="/book-a-time"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-100"
                  : "text-gray-950 hover:text-gray-100 transition-all"
              }
            >
              Book a time
            </NavLink>
            <button
              className="text-gray-950 hover:text-gray-100 transition-all"
              onClick={logoutHandler}
            >
              Log out
            </button>
          </div>
        )}
      </nav>

      {isMenuOpen && windowWidth < 768 && (
        <div className="flex flex-col bg-blue-400 py-2 px-4 space-y-2 text-lg">
          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100"
                : "text-gray-950 hover:text-gray-100 transition-all"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Booking
          </NavLink>
          <NavLink
            to="/book-a-time"
            className={({ isActive }) =>
              isActive
                ? "text-gray-100"
                : "text-gray-950 hover:text-gray-100 transition-all"
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Book a time
          </NavLink>
          <button
            className="text-gray-950 hover:text-gray-100 text-left transition-all"
            onClick={logoutHandler}
          >
            Log out
          </button>
        </div>
      )}
    </header>
  );
};

Navigation.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
};

export default Navigation;
