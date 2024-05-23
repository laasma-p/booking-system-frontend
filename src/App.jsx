import "./App.css";
import Landing from "./components/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Bookings from "./components/Bookings";
import BookATimeForm from "./components/BookATimeForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="book-a-time" element={<BookATimeForm />} />
      </Routes>
    </>
  );
}

export default App;
