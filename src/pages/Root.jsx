import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function Root() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div >
      <SideBar isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      <div className={isOpen ? "ml-56" : "ml-16"}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
