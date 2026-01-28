import { Deal } from "@/types/deal";

const DealDetails = ({ deal }: { deal: Deal }) => {
  return (
    <div className="space-y-2">
      <Row label="Company" value={deal.company} link />
      <Row label="Contact" value={deal.contact} link />
      <Row label="Sale date" value={deal.saleDate} />
      <Row label="Owner" value={deal.owner} />
      <Row label="Sale type" value={deal.saleType} />
      <Row label="Status" value={deal.status} />
    </div>
  );
};

type RowProps = {
  label: string;
  value: string;
  link?: boolean;
};

const Row = ({ label, value, link }: RowProps) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
    <span className="text-gray-500 text-sm">{label}</span>
    <span
      className={`sm:w-40 truncate text-sm ${
        link ? "text-blue-600 hover:underline cursor-pointer" : "text-gray-900"
      }`}
      title={value}
    >
      {value}
    </span>
  </div>
);

export default DealDetails;
