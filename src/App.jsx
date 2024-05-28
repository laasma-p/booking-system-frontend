import "./App.css";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Booking from "./components/Booking";
import BookATimeForm from "./components/BookATimeForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
