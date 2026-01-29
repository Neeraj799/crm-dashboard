"use client";

import { useState } from "react";
import { CiFilter, CiImport } from "react-icons/ci";
import { IoIosAddCircleOutline, IoIosRefresh } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import AddSaleModal from "./AddSalesModal";

const TableActions = ({ onRefresh }: { onRefresh: () => void }) => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <>
      {/* ACTION BAR */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-sm text-orange-600">
        {/* LEFT BUTTONS */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-6">
          <ActionButton
            icon={<IoIosAddCircleOutline />}
            label="Add"
            onClick={() => setOpenAddModal(true)}
          />
          <ActionButton icon={<RiDeleteBin5Line />} label="Delete" />
          <ActionButton icon={<CiFilter />} label="Filter" />
          <ActionButton icon={<CiImport />} label="Export" />
        </div>

        {/* REFRESH BUTTON */}
        <button
          onClick={onRefresh}
          className="rounded-md p-2 hover:bg-gray-100 transition"
          aria-label="Refresh table"
        >
          <IoIosRefresh size={20} className="text-gray-600" />
        </button>
      </div>

      {/* ADD SALE MODAL */}
      <AddSaleModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
        onSuccess={onRefresh}
      />
    </>
  );
};

const ActionButton = ({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-md p-2 hover:bg-orange-50 transition"
    >
      <span className="text-lg">{icon}</span>

      {/* Label hidden only on very small screens */}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default TableActions;
