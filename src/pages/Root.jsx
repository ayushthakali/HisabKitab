import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function Root() {
  return (
    <div>
      <SideBar/>
      <Outlet />
    </div>
  );
}

export default Root;
