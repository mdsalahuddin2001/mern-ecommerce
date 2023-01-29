import { IoMdLaptop, IoMdCart } from "react-icons/io";
import { AiOutlineBarChart } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
const routes = [
  {
    id: 1,
    name: "Dashboard",
    link: "/",
    icon: <AiOutlineBarChart />,
  },
  {
    id: 2,
    name: "Users",
    link: "/users",
    icon: <HiUsers />,
  },
  {
    id: 3,
    name: "Products",
    link: "/products",
    icon: <IoMdLaptop />,
  },
  {
    id: 4,
    name: "Orders",
    link: "/orders",
    icon: <IoMdCart />,
  },
];

export default routes;
