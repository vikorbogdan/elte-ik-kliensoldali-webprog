import { NavLink } from "react-router-dom";

export function MainLayout({ children }) {
  return (
    <>
      <nav className="flex justify-center gap-4 py-2">
        <NavLink
          className={
            "bg-red-400 rounded-md hover:scale-105 p-2 text-white transition-transform active:scale-95"
          }
          to="/"
        >
          Főoldal
        </NavLink>
        <NavLink
          className={
            "bg-red-400 rounded-md hover:scale-105 p-2 text-white transition-transform active:scale-95"
          }
          to="/add"
        >
          Állat hozzáadása
        </NavLink>
        <NavLink
          className={
            "bg-red-400 rounded-md hover:scale-105 p-2 text-white transition-transform active:scale-95"
          }
          to="/favorites"
        >
          Kedvencek
        </NavLink>
        <NavLink
          className={
            "bg-red-400 rounded-md hover:scale-105 p-2 text-white transition-transform active:scale-95"
          }
          to="/login"
        >
          Bejelentkezés
        </NavLink>
      </nav>
      {children}
    </>
  );
}
