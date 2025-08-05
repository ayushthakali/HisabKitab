import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import classNames from "classnames";

function SideBarToggle({ onClick, className, expanded }) {
  return (
    <button
      className={classNames(
        className,
        "p-2 rounded-md hover:bg-indigo-700 cursor-pointer transition-color "
      )}
      onClick={onClick}
    >
      {expanded ? (
        <MdKeyboardDoubleArrowLeft className="h-5 w-5" />
      ) : (
        <MdKeyboardDoubleArrowRight className="h-5 w-5" />
      )}
    </button>
  );
}

export default SideBarToggle;
