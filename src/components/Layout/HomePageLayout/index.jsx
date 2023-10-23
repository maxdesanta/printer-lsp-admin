import { Outlet } from "react-router-dom";
import Profile from "../../Profile";

// import component
import SideBar from "../../SideBar";

// import css
import "./_style.scss";

export default function HomePageLayout() {
  return (
    <div className="layout">
      <div className="h-comopnent">
        <SideBar />
      </div>
      <div className="p-component">
        <Profile />
      </div>
      <Outlet />
    </div>
  );
}