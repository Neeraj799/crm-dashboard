import { BsBuildings, BsCalendarDateFill } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { FaRegClipboard, FaTachometerAlt } from "react-icons/fa";
import { LuCircleUserRound } from "react-icons/lu";

const Sidebar = () => {
  return (
    <>
      <div className="w-16 bg-emerald-900 text-white min-h-screen flex flex-col items-center py-4 space-y-6">
        <div className="text-xl font-bold">L</div>

        <nav className="flex flex-col space-y-6 text-sm">
          <span>
            <FaTachometerAlt className="size-6" />
          </span>
          <span>
            <BsBuildings className="size-6" />
          </span>
          <span>
            {" "}
            <LuCircleUserRound className="size-6" />
          </span>
          <span>
            <BsCalendarDateFill className="size-6" />
          </span>
          <span>
            <CiDollar className="size-6" />
          </span>
          <span>
            <FaRegClipboard className="size-6" />
          </span>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
