import { IoIosArrowRoundDown } from "react-icons/io";

const SalesHeader = () => {
  return (
    <thead className="bg-gray-50 text-left text-gray-500">
      <tr>
        <th className="px-4 py-3 ">
          <input type="checkbox" />
        </th>

        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Sale date</th>
        <th className="px-4 py-3">Amount</th>

        <th className="px-4 py-3">
          <div className="flex items-center gap-1">
            <span>Stage</span>
            <IoIosArrowRoundDown className="text-2xl" />
          </div>
        </th>

        <th className="px-4 py-3">Next activity</th>
        <th className="px-4 py-3">Sale name</th>
      </tr>
    </thead>
  );
};

export default SalesHeader;
