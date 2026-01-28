"use client";
import { Deal, DealTab } from "@/types/deal";
import DealDetails from "./DealDetails";
import DealActivities from "./DealActivities";
import DealStakeholders from "./DealStakeholders";
import DealTabs from "./DealTabs";
import { useState } from "react";

const DealCard = ({ deal }: { deal: Deal }) => {
  const [activeTab, setActiveTab] = useState<DealTab>("search");

  return (
    <div className="w-full max-w-md sm:max-w-lg rounded-xl border bg-white p-4 sm:p-5 shadow-sm space-y-4">
      <DealTabs activeTab={activeTab} onChange={setActiveTab} />

      {/* Tab Content */}
      <div className="border-t pt-3 text-sm text-gray-500">
        {activeTab === "search" && <p>PREVIEW</p>}
        {activeTab === "amount" && <p>Amount: {deal.amount}</p>}
        {activeTab === "date" && <p>Date tab content</p>}
        {activeTab === "notes" && <p>Notes tab content</p>}
        {activeTab === "priority" && <p>Priority tab content</p>}
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
          <span className="font-bold text-indigo-600">SC</span>
        </div>

        <div className="min-w-0">
          <h2 className="text-lg sm:text-xl text-[#141414] truncate">
            {deal.title}
          </h2>
          <p className="text-sm text-[#141414]">{deal.amount}</p>
        </div>
      </div>

      <DealDetails deal={deal} />

      <div className="border-t border-gray-200 pt-4">
        <DealActivities activities={deal.activities} />
      </div>

      <DealStakeholders stakeholders={deal.stakeholders} />
    </div>
  );
};

export default DealCard;
