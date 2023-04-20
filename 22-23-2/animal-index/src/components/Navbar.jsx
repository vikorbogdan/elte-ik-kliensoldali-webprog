import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-5 px-5 bg-yellow-700 font-nunito text-yellow-50 text-3xl">
      <Link className="mr-auto" to="/">
        AniDex
      </Link>
      <NavLink to="/list">Animal List</NavLink>
      <NavLink to="/add">Add Animal</NavLink>
    </nav>
  );
};

export default Navbar;
