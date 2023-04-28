import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
const Navbar = () => {
  const userData = useContext(UserContext);
  return (
    <nav className="flex gap-5 px-5 bg-yellow-700 font-nunito text-yellow-50 text-3xl">
      <Link className="mr-auto" to="/">
        AniDex
      </Link>
      <NavLink to="/list">Animal List</NavLink>
      {userData[0] !== "" && <NavLink to="/add">Add Animal</NavLink>}
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Navbar;
