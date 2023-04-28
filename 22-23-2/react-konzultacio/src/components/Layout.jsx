import { NavLink } from "react-router-dom";

const Layout = (props) => {
  return (
    <div className="h-screen">
      <header className="flex items-center border-b-indigo-400 border-b-2 text-5xl bg-indigo-200 text-indigo-900 p-10">
        <h1 className="">{props.blogTitle}</h1>
        <nav className="ml-5 flex items-center gap-5">
          <NavLink
            className="w-24 active:scale-95 text-center hover:scale-105 transition text-xl bg-indigo-500 text-indigo-50 rounded-lg p-1"
            to="/"
          >
            Főoldal
          </NavLink>
          <NavLink
            className="w-24 active:scale-95 text-center hover:scale-105 transition text-xl bg-indigo-500 text-indigo-50 rounded-lg p-1"
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            className="w-24 active:scale-95 text-center hover:scale-105 transition text-xl bg-indigo-500 text-indigo-50 rounded-lg p-1"
            to="/new"
          >
            Új poszt
          </NavLink>
        </nav>
        <span className="ml-auto">{props.totalLike}👍🏽</span>
      </header>
      <div className="bg-indigo-300 flex flex-col items-center gap-10 p-10 overflow-auto">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
