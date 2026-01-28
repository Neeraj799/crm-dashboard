"use client";

import { SaleStatus } from "../../types/sales";

const styles: Record<SaleStatus, string> = {
  Open: "bg-teal-100 text-teal-700",
  Lost: "bg-red-100 text-red-700",
  Sold: "bg-green-100 text-green-700",
  Stalled: "bg-orange-100 text-orange-700",
};

const StatusBadge = ({ status }: { status: SaleStatus }) => {
  return (
    <span className={`rounded-full px-3 py-1 text-xs ${styles[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
