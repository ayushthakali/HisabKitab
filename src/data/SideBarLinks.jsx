import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

  const classes = "h-5 w-5";

  export const links = [
    {
      name: "Dashboard",
      icon: <HiOutlineHome className={classes} />,
      path: "/",
    },
    {
      name: "Category",
      icon: <MdOutlineCategory className={classes} />,
      path: "/category",
    },
    {
      name: "Transaction",
      icon: <GrTransaction className={classes} />,
      path: "/transaction",
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline className={classes} />,
      path: "/settings",
    },
  ];