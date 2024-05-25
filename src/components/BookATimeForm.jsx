import { useState } from "react";

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookATimeForm = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        -i + 1
      );

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

      const isPastDay = date < new Date(todaysYear, todaysMonth, todaysDate);

      days.push(
        <div
          key={i}
          className={`p-2 border h-16 ${
            isPastDay ? "bg-gray-100" : "bg-white text-gray-950"
          }`}
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

  return (
    <div className="p-6 max-w-lg bg-white rounded-md shadow-md space-y-4">
      <h1 className="text-3xl font-semibold text-gray-950 mb-6">Book a time</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          className="p-2 bg-blue-500 text-gray-100 rounded-md"
          onClick={() => changeMonthHandler(-1)}
        >
          Prev
        </button>
        <h2 className="text-xl font-semibold">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </h2>
        <button
          className="p-2 bg-blue-500 text-gray-100 rounded-md"
          onClick={() => changeMonthHandler(1)}
        >
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfTheWeek.map((day, index) => {
          return (
            <div key={index} className="p-2 border h-16 bg-gray-200">
              {day}
            </div>
          );
        })}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default BookATimeForm;
