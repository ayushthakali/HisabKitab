import { TbCurrencyRupeeNepalese } from "react-icons/tb";
import { Link } from "react-router-dom";
import { links } from "../data/SideBarLinks";
import SideBarLink from "../components/SideBarComponents/SideBarLink";
import SideBarToggle from "../components/SideBarComponents/SideBarToggle";

function SideBar({ isOpen, onClick }) {
  const renderedLinks = links.map((link) => {
    return <SideBarLink key={link.name} link={link} isOpen={isOpen} />;
  });

  return (
    <>
      {isOpen ? (
        <div className="container w-56 bg-[#181b22] border-r border-gray-600 text-white h-screen shadow p-4 transition-all fixed top-0 left-0 ">
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
            <SideBarToggle onClick={onClick} expanded={true} />
          </div>
          <div className="flex flex-col mt-3 pt-5 border-t  border-gray-600 ">
            {renderedLinks}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-16 bg-[#181b22] border-r border-gray-600 text-white h-screen shadow p-2 transition-all fixed top-0 left-0">
          <SideBarToggle onClick={onClick} className="mt-4" />
          <div className="flex flex-col items-center mt-5 gap-2 pt-4 border-t  border-gray-600 ">
            {renderedLinks}
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
