import React from "react";
type DetalItemProps = {
  label: string;
  value: string;
  isLink?: boolean;
};

const DetailItem = ({ label, value, isLink }: DetailItemProps) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span
      className={`font-medium ${
        isLink
          ? "text-blue-600 hover:underline cursor-pointer"
          : "text-gray-900"
      }`}
    >
      {value}
    </span>
  </div>
);

type DealDetailsProps = {
  company: string;
  contact: string;
  saleDate: string;
  owner: string;
  saleType: string;
  status: string;
};

const DealDetails = (props: DealDetailsProps) => {
  return (
    <div className="space-y-2">
      <DetailItem label="Comapny" value={props.company} isLink />
      <DetailItem label="Contact" value={props.contact} isLink />
      <DetailItem label="Sale date" value={props.saleDate} />
      <DetailItem label="Owner" value={props.owner} />
      <DetailItem label="Sale type" value={props.saleType} />
      <DetailItem label="Status" value={props.status} />
    </div>
  );
};

export default DealDetails;
