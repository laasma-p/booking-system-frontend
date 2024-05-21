const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div>
          <div>
            <label>First Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Birthday</label>
            <input type="date" />
          </div>
          <div>
            <label>E-mail</label>
            <input type="email" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
            <label>Repeat Password</label>
            <input type="password" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" />
          </div>
          <div>
            <label>City</label>
            <input type="text" />
          </div>
          <div>
            <label>Post Code</label>
            <input type="text" />
          </div>
        </div>
        <button type="button">Register</button>
        <p>
          Already have an account?
          <span>
            <a href="#">Log in here</a>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
