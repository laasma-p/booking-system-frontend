import { useState } from "react";

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookATimeForm = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderCalendarDays = () => {
    const days = [];

    const endDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    const today = new Date();
    const todaysYear = today.getFullYear();
    const todaysMonth = today.getMonth();
    const todaysDate = today.getDate();

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

    return days;
  };

  return (
    <div className="p-6 max-w-lg bg-white rounded-md shadow-md space-y-4">
      <h1 className="text-3xl font-semibold text-gray-950 mb-6">Book a time</h1>
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
