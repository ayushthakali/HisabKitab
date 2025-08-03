import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function SideBarLink({ link, isOpen }) {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        classNames(
          "flex items-center gap-3 p-2 text-sm hover:bg-indigo-700 transition-colors mb-2 rounded-md",
          {
            "bg-indigo-400": isActive,
          }
        )
      }
    >
      {link.icon}
      {isOpen ? link.name : null}
    </NavLink>
  );
}
