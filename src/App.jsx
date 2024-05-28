import "./App.css";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Booking from "./components/Booking";
import BookATimeForm from "./components/BookATimeForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpiryTime = localStorage.getItem("tokenExpiryTime");

    if (token && tokenExpiryTime) {
      const expiryTime = parseInt(tokenExpiryTime, 10);
      const currentTime = new Date().getTime();

      if (currentTime >= expiryTime) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("tokenExpiryTime");
        setLoggedIn(false);
        navigate("/");
      } else {
        setLoggedIn(true);
        const remainingTime = expiryTime - currentTime;
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          localStorage.removeItem("tokenExpiryTime");
          setLoggedIn(false);
          navigate("/");
        }, remainingTime);
      }
    }
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiryTime = localStorage.getItem("tokenExpiryTime");

    setLoggedIn(token !== null && userId !== null && tokenExpiryTime !== null);

    const storageChangeHandler = () => {
      const updatedToken = localStorage.getItem("token");
      const updatedUserId = localStorage.getItem("userId");
      const updatedTokenExpiryTime = localStorage.getItem("tokenExpiryTime");
      setLoggedIn(
        updatedToken !== null &&
          updatedUserId !== null &&
          updatedTokenExpiryTime !== null
      );

      if (
        updatedToken === null ||
        updatedUserId === null ||
        updatedTokenExpiryTime === null
      ) {
        setLoggedIn(false);
        navigate("/");
      }
    };

    window.addEventListener("storage", storageChangeHandler);
    return () => {
      window.removeEventListener("storage", storageChangeHandler);
    };
  }, [navigate]);

  return (
    <>
      {loggedIn && <Navigation setLoggedIn={setLoggedIn} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        {loggedIn && <Route path="/booking" element={<Booking />} />}
        {loggedIn && <Route path="/book-a-time" element={<BookATimeForm />} />}
      </Routes>
    </>
  );
}

export default App;
