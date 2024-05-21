const Login = () => {
  return (
    <div>
      <h1>Log In</h1>
      <div>
        <form>
          <label>E-mail</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button type="button">Log In</button>
        </form>
        <p>
          Do not have an account?{" "}
          <span>
            <a href="#">Register here</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
