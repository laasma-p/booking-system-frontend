const Landing = () => {
  return (
    <div
      className="h-dvh bg-cover bg-center flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?driving')",
      }}
    >
      <div>
        <h1>Book a time for a theory test online</h1>
        <div>
          <button type="button">Log In</button>
          <button type="button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
