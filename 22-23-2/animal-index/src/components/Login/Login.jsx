import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import usersList from "../../data/users.json";
const Login = () => {
  const [user, setUser] = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    const foundUser = usersList.find(
      (data) => data.username === username && data.password === password
    );
    const isCorrect = !!foundUser;
    if (isCorrect) {
      setUser(foundUser.username);
    }
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          onChange={handleUsernameChange}
          className="border-2 border-yellow-500"
          value={username}
          type="text"
          name="username"
          id="username"
        />
        <input
          onChange={handlePasswordChange}
          className="border-2 border-yellow-500"
          value={password}
          type="password"
          name="password"
          id="password"
        />
        <button className="bg-yellow-600 text-yellow-50" onClick={handleClick}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
