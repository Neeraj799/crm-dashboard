"use client";

import StatusBadge from "./StatusBadge";
import { Sale } from "@/types/sales";

const SalesRow = ({ sale }: { sale: Sale }) => {
  const saleDate = new Date(sale.createdAt).toLocaleDateString();
  const nextActivity = new Date(sale.nextActivityDate).toLocaleDateString();

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <input type="checkbox" />
      </td>

      <td className="px-4 py-3">
        <StatusBadge status={sale.status} />
      </td>

      <td className="px-4 py-3 text-[#687072]">{saleDate}</td>

      <td className="px-4 py-3 text-[#687072]">
        {sale.amount.toLocaleString()}
      </td>

      <td className="px-4 py-3 text-[#687072]">Proposal ({sale.stage}%)</td>

      <td className="px-4 py-3 text-[#687072]">{nextActivity}</td>

      <td className="px-4 py-3 text-[#687072]">{sale.saleName}</td>
    </tr>
  );
};

export default SalesRow;
