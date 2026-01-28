import CompanyCard from "@/components/company/CompanyCard";
import DashboardLayout from "../components/layout/DashboardLayout";
import SalesTable from "@/components/sales/SalesTable";
import DealCardContainer from "@/components/deal/DealCardContainer";

const page = () => {
  return (
    <DashboardLayout>
      <div className="flex gap-4">
        {/* LEFT SIDE */}
        <div className="w-3/4 flex flex-col gap-4">
          <CompanyCard />
          <SalesTable />
        </div>

        {/* RIGHT SIDE */}
        <div className="">
          <DealCardContainer />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
