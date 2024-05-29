import { useState, useEffect } from "react";

const Booking = () => {
  const [booking, setBooking] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrorMessage("");
      setSuccessMessage("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [errorMessage, successMessage]);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/current-booking", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBooking(data);
        } else {
          setBooking(null);
        }
      } catch (error) {
        console.error("Error fetching booking:", error);
      }
    };

    fetchBooking();
  }, []);

  const cancelBookingHandler = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/cancel-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setBooking(null);
        setErrorMessage("");
        setSuccessMessage("Booking has been successfully cancelled.");
      } else {
        setSuccessMessage("");
        setErrorMessage(
          "Failed to cancel the booked time slot. Try again later."
        );
      }

      setIsModalOpen(false);
    } catch (error) {
      console.error("Error cancelling booking:", error);
      setErrorMessage("Failed to cancel booking.");
      setSuccessMessage("");
      setIsModalOpen(false);
    }
  };

  return (
    <>
      {errorMessage && (
        <div className="p-2 bg-red-400 text-red-950">{errorMessage}</div>
      )}
      {successMessage && (
        <div className="p-2 bg-green-400 text-green-950">{successMessage}</div>
      )}
      <h1 className="text-3xl px-4 pt-4 font-semibold text-gray-950 mb-6">
        Booking
      </h1>
      {booking ? (
        <div
          key={booking.id}
          className="border max-w-lg rounded-md mx-4 p-4 transition-all"
        >
          <p className="font-semibold">Booking Name: {booking.booking_name}</p>
          <p>Language: {booking.booking_language}</p>
          <p>Time: {booking.time}</p>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-600 text-gray-100 mt-2 py-2 px-4 rounded-md transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <p className="pl-4">No bookings have been made.</p>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-950 bg-opacity-50 flex items-center justify-center"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-md shadow-md"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-4">
              Confirm booking cancellation
            </h2>
            <p>Are you sure you want to cancel the booking?</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-950 py-2 px-4 rounded-md mr-2 transition-all"
                onClick={() => setIsModalOpen(false)}
              >
                No
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-gray-100 py-2 px-4 rounded-md transition-all"
                onClick={cancelBookingHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Booking;