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
    <div className="w-90 rounded-xl border bg-white p-4 shadow-sm space-y-4">
      <DealTabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="border-t pt-4 text-sm text-gray-500">
        {activeTab === "search" && <p>PREVIEW</p>}
        {activeTab === "amount" && <p>Amount: {deal.amount}</p>}
        {activeTab === "date" && <p>Date tab content</p>}
        {activeTab === "notes" && <p>Notes tab content</p>}
        {activeTab === "priority" && <p>Priority tab content</p>}
      </div>

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="font-bold text-indigo-600">SC</span>
        </div>

        <div>
          <h2 className="text-xl text-[#141414]">{deal.title}</h2>
          <p className="text-sm text-[#141414]">{deal.amount}</p>
        </div>
      </div>

      <DealDetails deal={deal} />

      <div className="mt-4 border-t border-gray-200" />

      <DealActivities activities={deal.activities} />
      <DealStakeholders stakeholders={deal.stakeholders} />
    </div>
  );
};

export default DealCard;
