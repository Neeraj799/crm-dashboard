import { DealTab } from "@/types/deal";
import { BsStars } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { PiClipboardTextLight } from "react-icons/pi";

interface DealTabsProps {
  activeTab: DealTab;
  onChange: (tab: DealTab) => void;
}

const DealTabs = ({ activeTab, onChange }: DealTabsProps) => {
  const tabWrapper = (tab: DealTab) =>
    `flex h-8 w-8 items-center justify-center rounded-full cursor-pointer transition
     ${activeTab === tab ? "bg-teal-100" : "hover:bg-gray-100"}`;

  const iconClass = (tab: DealTab) =>
    `w-5 h-5 ${activeTab === tab ? "text-teal-700" : "text-gray-400"}`;

  return (
    <div className="flex justify-between">
      {/* Tabs */}
      <div className="flex items-center gap-3">
        <div
          className={tabWrapper("search")}
          onClick={() => onChange("search")}
        >
          <MdManageSearch className={iconClass("search")} />
        </div>

        <div
          className={tabWrapper("amount")}
          onClick={() => onChange("amount")}
        >
          <CiDollar className={iconClass("amount")} />
        </div>

        <div className={tabWrapper("date")} onClick={() => onChange("date")}>
          <IoCalendarNumberOutline className={iconClass("date")} />
        </div>

        <div className={tabWrapper("notes")} onClick={() => onChange("notes")}>
          <PiClipboardTextLight className={iconClass("notes")} />
        </div>

        <div
          className={tabWrapper("priority")}
          onClick={() => onChange("priority")}
        >
          <BsStars className={iconClass("priority")} />
        </div>
      </div>

      {/* Dropdown */}
      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400">
        <IoIosArrowDown className="w-5 h-5 text-teal-700" />
      </button>
    </div>
  );
};

export default DealTabs;
