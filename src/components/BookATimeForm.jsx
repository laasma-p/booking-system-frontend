import { useState, useEffect } from "react";

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookATimeForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookingMessage, setBookingMessage] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const [hasActiveBooking, setHasActiveBooking] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBookingMessage("");
      setIsBooked(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [bookingMessage, isBooked]);

  useEffect(() => {
    const checkActiveBooking = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:3000/booking/current-booking",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          setHasActiveBooking(true);
        } else {
          setHasActiveBooking(false);
        }
      } catch (error) {
        console.error("Error checking active booking:", error);
      }
    };

    checkActiveBooking();
  }, []);

  if (hasActiveBooking) {
    return (
      <div className="p-2 bg-red-400 text-red-950">
        You already have an active booking. Please cancel it to make a new
        booking.
      </div>
    );
  }

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    return `${hours}:${minutes}`;
  };

  const dateClickHandler = async (date) => {
    setSelectedDate(date);

    try {
      const response = await fetch(
        `http://localhost:3000/booking/time-slots?date=${date}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch time slots to book");
      }

      const data = await response.json();
      data.forEach((slot) => {
        slot.time = formatTime(slot.time);
      });
      setBookings(data);
    } catch (error) {
      console.error("Error fetching time slots", error);
    }
  };

  const bookASlotHandler = async (bookingId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3000/booking/book-a-time",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({ bookingId }),
        }
      );

      if (response.ok) {
        setBookingMessage("Booking has been successfully made.");
        setIsBooked(true);
      } else {
        setBookingMessage("Error booking the desired time slot.");
        setIsBooked(false);
      }
    } catch (error) {
      console.error("Error booking a time slot:", error);
      setBookingMessage("Error booking the desired time slot.");
      setIsBooked(false);
    }
  };

  const renderCalendarDays = () => {
    const days = [];

    const startDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );

    const endDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    const startDay = startDate.getDay() === 0 ? 6 : startDate.getDay() - 1;

    const today = new Date();
    const todaysYear = today.getFullYear();
    const todaysMonth = today.getMonth();
    const todaysDate = today.getDate();

    const prevMonthEndDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    ).getDate();

    for (let i = startDay; i > 0; i--) {
      days.push(
        <div
          key={`prev-${i}`}
          className="p-2 border h-16 bg-gray-100 text-gray-400 cursor-not-allowed"
        >
          {prevMonthEndDate - i + 1}
        </div>
      );
    }

    for (let i = 1; i <= endDate.getDate(); i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );

      const dateString = date.toDateString();
      const isPastDay = date < new Date(todaysYear, todaysMonth, todaysDate);
      const isWeekend = date.getDay() === 6 || date.getDay() === 0;

      days.push(
        <div
          key={i}
          className={`p-2 border h-16 cursor-pointer ${
            selectedDate === dateString
              ? "bg-blue-500 text-gray-100"
              : isPastDay || isWeekend
              ? "bg-gray-100 cursor-not-allowed"
              : "bg-white text-gray-950"
          }`}
          onClick={() =>
            !isPastDay && !isWeekend && dateClickHandler(dateString)
          }
        >
          {i}
        </div>
      );
    }

    const daysInLastWeek = 7 - (days.length % 7);

    if (daysInLastWeek < 7) {
      for (let i = 1; i <= daysInLastWeek; i++) {
        days.push(
          <div
            key={`next-${i}`}
            className="p-2 border h-16 bg-gray-100 text-gray-400 cursor-not-allowed"
          >
            {i}
          </div>
        );
      }
    }

    return days;
  };

  const changeMonthHandler = (direction) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + direction,
        1
      )
    );
  };

  const selectingSlotHandler = (bookingId) => {
    setSelectedBooking(bookingId);
  };

  return (
    <>
      {bookingMessage && (
        <div
          className={`p-2 ${
            isBooked ? "bg-green-400 text-green-950" : "bg-red-400 text-red-950"
          }`}
        >
          {bookingMessage}
        </div>
      )}
      <div className="w-full min-h-screen px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row gap-6 bg-gray-50">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row items-start gap-6">
          <div className="w-full md:w-1/2 p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md h-fit">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-950 mb-4 text-center text-left">
              Book a time
            </h1>
            <div className="flex justify-between items-center mb-4">
              <button
                className="p-2 bg-blue-500 hover:bg-blue-600 text-gray-100 rounded-md transition-all"
                onClick={() => changeMonthHandler(-1)}
              >
                Prev
              </button>
              <h2 className="text-xl font-semibold">
                {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                {currentMonth.getFullYear()}
              </h2>
              <button
                className="p-2 bg-blue-500 hover:bg-blue-600 text-gray-100 rounded-md transition-all"
                onClick={() => changeMonthHandler(1)}
              >
                Next
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {daysOfTheWeek.map((day, index) => {
                return (
                  <div
                    key={index}
                    className="p-2 text-center border h-16 bg-gray-200"
                  >
                    {day}
                  </div>
                );
              })}
              {renderCalendarDays()}
            </div>
          </div>
          {selectedDate && bookings.length === 0 ? (
            <p className="text-center text-gray-950 text-lg">
              No theory tests for selected day.
            </p>
          ) : (
            selectedDate && (
              <div className="w-full md:w-1/2 p-4 sm:p-6 bg-gray-50 rounded-lg shadow-md h-fit">
                <>
                  {bookings.map((booking) => {
                    return (
                      <div
                        key={booking.id}
                        className={`border rounded-md p-4 mb-4 cursor-pointer transition-all ${
                          selectedBooking === booking.id ? "bg-gray-200" : ""
                        }`}
                        onClick={() => selectingSlotHandler(booking.id)}
                      >
                        <p className="font-semibold">{booking.booking_name}</p>
                        <p>Language: {booking.booking_language}</p>
                        <p>Time: {booking.time}</p>
                        <p>Available spots: {booking.available_spots}</p>
                        {selectedBooking === booking.id && (
                          <button
                            type="button"
                            className="bg-green-500 hover:bg-green-600 text-gray-100 mt-2 py-2 px-4 rounded-md transition-all"
                            onClick={() => bookASlotHandler(booking.id)}
                          >
                            Book
                          </button>
                        )}
                      </div>
                    );
                  })}
                </>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default BookATimeForm;
