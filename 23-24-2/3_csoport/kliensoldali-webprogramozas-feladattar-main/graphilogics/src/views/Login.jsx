import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice/authSlice";
import { useLoginMutation } from "../store/api/authApiSlice/authApiSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginMutate] = useLoginMutation();
  const handleClick = async () => {
    const result = await loginMutate({ email: username, password: password }).unwrap();
    dispatch(
      login({
        email: result.user.email,
        id: result.user.id,
        token: result.accessToken,
      })
    );
  };
  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" />
      <button onClick={handleClick}>Elküld</button>
    </div>
  );
};

export default Login;
