import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import classNames from "classnames";

function SideBarToggle({ onClick, className, change }) {
  return (
    <button
      className={classNames(
        className,
        "p-2 rounded-md hover:bg-indigo-700 cursor-pointer transition-colors"
      )}
      onClick={onClick}
    >
      {change ? (
        <MdKeyboardDoubleArrowRight className="h-5 w-5" />
      ) : (
        <MdKeyboardDoubleArrowLeft className="h-5 w-5" />
      )}
    </button>
  );
}

export default SideBarToggle;
