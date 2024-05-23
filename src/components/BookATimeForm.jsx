import { useState } from "react";

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookATimeForm = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderCalendarDays = () => {
    const days = [];

    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    for (let i = 1; i <= date.getDate(); i++) {
      days.push(
        <div key={i} className="p-2 border h-16 cursor-pointer">
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div>
      <h1>Book a time</h1>
      <div>
        {daysOfTheWeek.map((day, index) => {
          return <div key={index}>{day}</div>;
        })}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default BookATimeForm;
