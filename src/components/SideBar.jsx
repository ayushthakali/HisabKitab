import { useState } from "react";
import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { Link } from "react-router-dom";
import {links} from "../data/SideBarLinks";
import SideBarLink from "./SideBarLink";
import SideBarToggle from "./SideBarToggle";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderedLinks = links.map((link) => {
    return <SideBarLink key={link.name} link={link} isOpen={isOpen} />;
  });

  return (
    <>
      {isOpen ? (
        <div className="container w-56 bg-gradient-to-b from-indigo-900 to-blue-800 text-white h-screen shadow p-4 transition-all">
          <div className="flex gap-4 items-center ">
            <div className="flex items-center justify-center py-4 gap-1">
              <TbCurrencyRupeeNepalese
                className="w-9 h-9 text-yellow-300"
                title="Nepalese Rupee"
              />
              <Link to="/" className="text-xl font-bold tracking-wide">
                HisabKitab
              </Link>
            </div>
            <SideBarToggle onClick={handleClick} />
          </div>
          <div className="flex flex-col mt-3 pt-5 border-t border-indigo-700">
            {renderedLinks}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-16 bg-gradient-to-b from-indigo-900 to-blue-800 text-white h-screen shadow p-2 transition-all">
          <SideBarToggle onClick={handleClick} className="mt-4" />
          <div className="flex flex-col items-center mt-5 gap-2 pt-4 border-t border-indigo-700">
            {renderedLinks}
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
