"use client";

import { CiFilter, CiImport } from "react-icons/ci";
import { IoIosAddCircleOutline, IoIosRefresh } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const TableActions = () => {
  const handleRefresh = () => {
    console.log("Refresh clicked");
  };

  return (
    <div
      className="
      flex flex-col gap-3
      sm:flex-row sm:items-center sm:justify-between
      px-4 py-3 text-sm text-orange-600
    "
    >
      {/* LEFT ACTIONS */}
      <div className="flex flex-wrap gap-2 sm:gap-6">
        <ActionButton icon={<IoIosAddCircleOutline />} label="Add" />
        <ActionButton icon={<RiDeleteBin5Line />} label="Delete" />
        <ActionButton icon={<CiFilter />} label="Filter" />
        <ActionButton icon={<CiImport />} label="Export" />
      </div>

      {/* REFRESH */}
      <button
        onClick={handleRefresh}
        className="
          self-end sm:self-auto
          rounded-md p-2
          hover:bg-gray-100 transition
        "
        aria-label="Refresh table"
      >
        <IoIosRefresh className="text-gray-600" size={20} />
      </button>
    </div>
  );
};

const ActionButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <button
      className="
      flex items-center gap-2
      rounded-md p-2
      hover:bg-orange-50 transition
    "
    >
      <span className="text-lg">{icon}</span>

      {/* Hide label on mobile */}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default TableActions;
