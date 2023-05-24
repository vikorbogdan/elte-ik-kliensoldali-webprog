import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
        name="password"
      />
      <button onClick={handleSubmit} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
