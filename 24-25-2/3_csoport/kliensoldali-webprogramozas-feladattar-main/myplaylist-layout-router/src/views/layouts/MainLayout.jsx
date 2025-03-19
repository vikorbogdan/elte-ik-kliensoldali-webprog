import { Outlet } from "react-router-dom";
import { Menu } from "../menu/Menu";

export function MainLayout() {
  return (
    <div className="ui container">
      <Menu />
      <Outlet />
    </div>
  );
}
