import { BsLayoutSidebar } from "react-icons/bs";
import classNames from "classnames";

function SideBarToggle({ onClick, className }) {
  return (
    <button
      className={classNames(
        className,
        "p-2 rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
      )}
      onClick={onClick}
    >
      <BsLayoutSidebar className="h-5 w-5" />
    </button>
  );
}

export default SideBarToggle;
