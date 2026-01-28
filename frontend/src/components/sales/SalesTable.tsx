import { Sale } from "@/types/sales";
import SalesHeader from "./SalesHeader";
import SalesRow from "./SalesRow";
import SalesTabs from "./SalesTabs";
import TableActions from "./TableActions";

const salesData: Sale[] = [
  {
    id: 1,
    status: "Open",
    saleDate: "01/02/2025",
    amount: 17344,
    stage: "Proposal (60%)",
    nextActivity: "06/11/2024",
    saleName: "45 Components - RTS",
  },
  {
    id: 2,
    status: "Lost",
    saleDate: "07/07/2024",
    amount: 3200,
    stage: "Lost",
    nextActivity: "07/07/2024",
    saleName: "Premium Support",
  },
  {
    id: 3,
    status: "Sold",
    saleDate: "27/04/2024",
    amount: 47230,
    stage: "Sold",
    nextActivity: "27/04/2024",
    saleName: "Introduction package",
  },
];

const SalesTable = () => {
  return (
    <div className="w-full max-w-5xl rounded-xl border bg-white p-1 shadow-sm overflow-x-auto">
      <SalesTabs />

      <table className="w-full text-sm">
        <SalesHeader />

        <tbody>
          {salesData.map((sale) => (
            <SalesRow key={sale.id} sale={sale} />
          ))}
        </tbody>
      </table>
      <TableActions />
    </div>
  );
};

export default SalesTable;
