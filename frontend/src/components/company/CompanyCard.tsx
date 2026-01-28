"use client";
import React, { useState } from "react";
import CompanyTabs from "./CompanyTabs";
import CompanyDetails from "./CompanyDetails";
import { CiStar } from "react-icons/ci";
import {
  PiDotsThreeCircleVerticalThin,
  PiPencilSimpleLight,
} from "react-icons/pi";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { TabType } from "./types";

const CompanyCard = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Company");
  return (
    <div className="w-full max-w-5xl rounded-xl border bg-white p-4 shadow-sm overflow-x-auto">
      <div className="flex items-center justify-between">
        <div className="flex w-1/2 items-center gap-3 ">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="font-bold text-indigo-600 ">SC</span>
          </div>

          <div className="flex flex-col">
            <div className="flex gap-6">
              <h2 className="text-xl text-[#141414]">SuperCompany Ltd ASA</h2>
              <CiStar className="text-orange-500 size-6" />
            </div>
            <p className="text-sm text-[#141414]">Department Stockholm</p>
          </div>
        </div>
        <div className="flex w-1/6 gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
            <PiPencilSimpleLight className="h-6 w-6 text-white" />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full text-teal-700 hover:bg-gray-100">
            <PiDotsThreeCircleVerticalThin className="h-10 w-10" />
          </button>
        </div>
      </div>

      <CompanyTabs activeTab={activeTab} onChange={setActiveTab} />

      <CompanyDetails activeTab={activeTab} />

      <div className="mt-4 border-t border-gray-200" />

      <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
        <div className="flex w-full items-center gap-4 justify-between">
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" />
              <span>Stop</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="size-4" />
              <span>No mailings</span>
            </label>
          </div>
          <div className="flex">
            <span>Updated: 18/09/2023 OG</span>
          </div>

          <div className="flex gap-2">
            <button className="flex h-8 w-8 items-center justify-center">
              <IoIosArrowDropleft className="h-8 w-8" />
            </button>

            <button className="flex h-8 w-8 items-center justify-center">
              <IoIosArrowDropright className="h-8 w-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
