import { Link } from "react-router-dom";

export default function SideBarLink({link, isOpen}) {
  return (
    <Link
      key={link.name}
      to={link.path}
      className="flex items-center gap-3 p-2 text-sm hover:bg-indigo-700 transition-colors mb-2 rounded-md"
    >
      {link.icon}
      {isOpen ? link.name : null}
    </Link>
  );
}
