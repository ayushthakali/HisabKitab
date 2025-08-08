import { HiOutlineHome } from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";


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
    
  ];