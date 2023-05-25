import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../state/auth/authSlice";
import { useLoginMutation } from "../../api/authApiSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [authLogin] = useLoginMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await authLogin({
      strategy: "local",
      email,
      password,
    }).unwrap();
    dispatch(login({ user: result.user, token: result.token }));
    console.log(email, password);
  };
  return (
    <form>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
      <button onClick={handleSubmit} type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
