import { NavLink } from "react-router-dom";

const Layout = ({ children, totalLikeNumber, title }) => {
  return (
    <>
      <header className="flex text-2xl p-2 bg-emerald-100 items-center mb-10">
        <h1>{title}</h1>
        <nav className="flex ml-5 gap-5">
          <NavLink
            className="px-2 bg-emerald-300 rounded-md hover:scale-105 active:scale-95 transition"
            to="/"
          >
            Main page
          </NavLink>
          <NavLink
            className="px-2 bg-emerald-300 rounded-md hover:scale-105 active:scale-95 transition"
            to="/blog"
          >
            Blog posts
          </NavLink>
          <NavLink
            className="px-2 bg-emerald-300 rounded-md hover:scale-105 active:scale-95 transition"
            to="/new"
          >
            New post
          </NavLink>
        </nav>
        <h2 className="ml-auto">👍🏽 Total: {totalLikeNumber}</h2>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
