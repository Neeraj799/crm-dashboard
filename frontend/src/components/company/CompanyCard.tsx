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
    <div className="w-full max-w-5xl rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="font-bold text-indigo-600">SC</span>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg md:text-xl text-[#141414]">
                SuperCompany Ltd ASA
              </h2>
              <CiStar className="text-orange-500 size-5 md:size-6" />
            </div>
            <p className="text-sm text-[#141414]">Department Stockholm</p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-orange-500">
            <PiPencilSimpleLight className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </button>

          <button className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full text-teal-700 hover:bg-gray-100">
            <PiDotsThreeCircleVerticalThin className="h-8 w-8" />
          </button>
        </div>
      </div>

      <CompanyTabs activeTab={activeTab} onChange={setActiveTab} />

      <CompanyDetails activeTab={activeTab} />

      <div className="mt-4 border-t border-gray-200" />

      <div className="mt-3 flex flex-col gap-3 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
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

        <span className="text-xs md:text-sm">Updated: 18/09/2023 OG</span>

        <div className="flex gap-2">
          <button className="flex h-8 w-8 items-center justify-center">
            <IoIosArrowDropleft className="h-7 w-7" />
          </button>

          <button className="flex h-8 w-8 items-center justify-center">
            <IoIosArrowDropright className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
