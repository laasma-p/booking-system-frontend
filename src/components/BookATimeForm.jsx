const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const BookATimeForm = () => {
  return (
    <div>
      <h1>Book a time</h1>
      <div>
        {daysOfTheWeek.map((day, index) => {
          return <div key={index}>{day}</div>;
        })}
      </div>
    </div>
  );
};

export default BookATimeForm;
