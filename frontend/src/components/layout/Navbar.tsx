"use client";
import React, { useState } from "react";
import { BsBuildings } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { FiChevronDown, FiSearch, FiSidebar } from "react-icons/fi";
import { LuCircleUserRound } from "react-icons/lu";
import { MdManageSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ onSidebarClick }: { onSidebarClick: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full px-10 pl-20 py-2">
      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex overflow-hidden rounded-full border bg-white shadow-sm">
            <button className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-teal-700 hover:bg-gray-100">
              <BsBuildings />
              <span className="hidden sm:block">New</span>
            </button>

            <div className="w-px bg-gray-300"></div>

            <button className="px-2 text-teal-700 hover:bg-gray-100">
              <FiChevronDown />
            </button>
          </div>

          <button className="flex items-center justify-center rounded-full border bg-white p-2 text-teal-700 shadow-sm hover:bg-gray-100">
            <MdManageSearch className="size-5" />
          </button>
        </div>

        {/* SEARCH (DESKTOP) */}
        <div className="hidden md:flex w-1/3">
          <div className="flex w-full items-center gap-3 rounded-full border bg-white px-4 py-2">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for anything"
              className="w-full bg-transparent text-sm placeholder-gray-500 outline-none"
            />
          </div>
        </div>

        {/* RIGHT (DESKTOP) */}
        <div className="hidden md:flex w-1/4 items-center justify-between text-teal-700">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <CiBellOn className="size-7" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold text-white">
                3
              </span>
            </div>

            <LuCircleUserRound className="size-6" />
            <RxHamburgerMenu className="size-6" />
            <span className="">Help</span>
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={onSidebarClick}
          >
            <FiSidebar className="size-6" />
          </div>
        </div>

        {/* BURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-teal-700"
        >
          <RxHamburgerMenu className="size-7" />
        </button>
      </div>

      {/* MOBILE SEARCH */}
      <div className="mt-3 md:hidden">
        <div className="flex items-center gap-3 rounded-full border bg-white px-4 py-2">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mt-3 rounded-xl border bg-white p-4 shadow-md md:hidden">
          <div className="flex flex-col gap-4 text-teal-700">
            <div className="flex items-center gap-3">
              <CiBellOn className="size-5" />
              <span>Notifications</span>
            </div>

            <div className="flex items-center gap-3">
              <LuCircleUserRound className="size-5" />
              <span>Profile</span>
            </div>

            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => {
                onSidebarClick();
                setOpen(false);
              }}
            >
              <FiSidebar className="size-5" />
              <span>Sidebar</span>
            </div>

            <span className="text-sm">Help</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
