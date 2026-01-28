import { TabType } from "./types";

interface CompanyDetailsProps {
  activeTab: TabType;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "Activities":
      return <div className="mt-6 text-sm">Activities content</div>;

    case "Contacts":
      return <div className="mt-6 text-sm">Contacts content</div>;

    case "Sales":
      return <div className="mt-6 text-sm">Sales content</div>;

    case "Requests":
      return <div className="mt-6 text-sm">Requests content</div>;

    default:
      return <CompanyInfo />;
  }
};

const CompanyInfo = () => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 text-sm">
      <div className="space-y-2">
        <p className="flex">
          <span className="w-28 text-[#747474]">Postal:</span>
          <a
            className="max-w-[200px] truncate cursor-pointer text-blue-600"
            title="Västgötagatan 5, 102 61 Stockholm"
          >
            Västgötagatan 5, 102 61 Stockholm
          </a>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">Country:</span>
          <span className="text-[#2D2D2D]">Sweden</span>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">Phone:</span>
          <a href="tel:9871521626" className="text-blue-600">
            9871521626
          </a>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">Website:</span>
          <a
            href="https://www.sc.se"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            www.sc.se
          </a>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">E-mail:</span>
          <a href="mailto:info@sc.se" className="text-blue-600">
            info@sc.se
          </a>
        </p>
      </div>

      <div className="space-y-2">
        <p className="flex">
          <span className="w-28 text-[#747474]">Category:</span>
          <span className="text-[#2D2D2D]">Customer A</span>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">Code:</span>
          <span className="text-[#2D2D2D]">SUPERCO</span>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">Number:</span>
          <span className="text-[#2D2D2D]">2002</span>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">VAT No:</span>
          <span className="text-[#2D2D2D]">SE123456789</span>
        </p>

        <p className="flex">
          <span className="w-28 text-[#747474]">Business:</span>
          <span className="text-[#2D2D2D]">IT</span>
        </p>
      </div>
    </div>
  );
};

export default CompanyDetails;
