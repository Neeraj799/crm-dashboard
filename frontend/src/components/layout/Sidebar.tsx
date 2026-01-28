import { BsBuildings, BsCalendarDateFill } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { FaRegClipboard, FaTachometerAlt } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";

const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-40 h-screen w-16 bg-emerald-900 text-white
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex flex-col items-center py-4 space-y-6">
        <div className="text-xl font-bold">L</div>

        <nav className="flex flex-col space-y-6 text-sm">
          <FaTachometerAlt className="size-6 cursor-pointer" />
          <BsBuildings className="size-6 cursor-pointer" />
          <LuCircleUserRound className="size-6 cursor-pointer" />
          <BsCalendarDateFill className="size-6 cursor-pointer" />
          <CiDollar className="size-6 cursor-pointer" />
          <FaRegClipboard className="size-6 cursor-pointer" />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
