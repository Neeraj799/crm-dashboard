import React from "react";
import { BsBuildings } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FiChevronDown, FiSearch, FiSidebar } from "react-icons/fi";
import { LuCircleUserRound } from "react-icons/lu";
import { MdManageSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className="flex w-1/6 gap-4">
        <div className="flex overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm">
          <button className="flex items-center gap-4 px-2 py-2 text-sm font-medium text-teal-700 hover:bg-gray-100">
            <BsBuildings className="text-base" />
            New
          </button>

          <div className="w-px bg-gray-300"></div>

          <button className="px-3 text-teal-700 hover:bg-gray-100">
            <FiChevronDown className="text-base" />
          </button>
        </div>
        <div className="flex overflow-hidden rounded-full border border-gray-300 bg-white shadow-sm">
          <button className="flex items-center gap-4 px-2 py-2 text-sm font-medium text-teal-700 hover:bg-gray-100">
            <MdManageSearch className="text-base size-6" />
          </button>
        </div>
      </div>

      <div className="flex w-1/3 gap-4 items-center">
        <div className="flex w-full rounded-full border border-gray-300 bg-white px-4 py-2 items-center gap-4">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full bg-transparent text-sm text-gray-700 placeholder-gray-500 outline-none"
          />
        </div>
      </div>
      <div className="flex w-1/4  text-teal-700 items-center justify-between">
        <div className="flex gap-4 items-center">
          <CiBellOn className="size-7" />
          <LuCircleUserRound className="size-6" />
          <RxHamburgerMenu className="size-6" />
          <span className="">Help</span>
        </div>
        <div className="flex">
          <FiSidebar className="size-6" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
