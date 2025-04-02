import { NavLink } from "react-router-dom";

export function MainLayout({ children }) {
  return (
    <>
      <nav className="flex justify-center items-center gap-6">
        <NavLink
          className="bg-blue-400 text-white hover:bg-blue-500 p-2 rounded-lg"
          to="/"
        >
          Főoldal
        </NavLink>
        <NavLink
          className="bg-blue-400 text-white hover:bg-blue-500 p-2 rounded-lg"
          to="/add"
        >
          Állat hozzáadása
        </NavLink>
      </nav>
      {children}
    </>
  );
}
