import { Deal } from "@/types/deal";
import DealDetails from "./DealDetails";
import DealActivities from "./DealActivities";
import DealStakeholders from "./DealStakeholders";

const DealCard = ({ deal }: { deal: Deal }) => {
  return (
    <div className="w-90 rounded-xl border bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-blue-700">{deal.title}</h2>
        <p className="text-sm text-gray-600">{deal.amount}</p>
      </div>

      <DealDetails
        company={deal.company}
        contact={deal.contact}
        saleDate={deal.saleDate}
        owner={deal.owner}
        saleType={deal.saleType}
        status={deal.status}
      />

      <div>
        <DealActivities activities={deal.activities} />
      </div>

      <div>
        <DealStakeholders stakeholders={deal.stakeholders} />
      </div>
    </div>
  );
};

export default DealCard;
