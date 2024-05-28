import { useState } from "react";

const Booking = () => {
  const [booking, setBooking] = useState(true);

  return (
    <>
      <h1 className="text-3xl px-4 pt-4 font-semibold text-gray-950 mb-6">
        Booking
      </h1>
      {booking ? (
        <div
          key="1"
          className="border max-w-lg rounded-md mx-4 p-4 transition-all"
        >
          <p className="font-semibold">Booking Name</p>
          <p>Language: English</p>
          <p>Time: 10:00</p>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-gray-100 mt-2 py-2 px-4 rounded-md transition-all"
          >
            Cancel
          </button>
        </div>
      ) : (
        <p>No bookings have been made.</p>
      )}
    </>
  );
};

export default Booking;
